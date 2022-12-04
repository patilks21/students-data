import {Component, Input, Output, EventEmitter } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import * as _ from 'lodash';

@Component({
  selector: 'app-house-view',
  templateUrl: './house-view.component.html',
  styleUrls: ['./house-view.component.css']
})
export class HouseViewComponent {
  @Input() receivedParentMessage:[]=[];
  @Output() changeHouse=new EventEmitter<[]>();
  unassignedStudents:[]=[];
  redHouse:[]=[];
  blueHouse:[]=[];
  finalData:[]=[];
  isSuccess:boolean;
  constructor() {
    this.finalData = this.receivedParentMessage;
    this.isSuccess = false;
    //this.receivedParentMessage = [];
 }

 ngOnInit(){
    this.unassignedStudents = JSON.parse(JSON.stringify(_.filter(
      this.receivedParentMessage, student => student['house'] === ''
    )));
    this.redHouse = JSON.parse(JSON.stringify(_.filter(
      this.receivedParentMessage, student => student['house'] === 'Red'
    )));
    this.blueHouse = JSON.parse(JSON.stringify(_.filter(
      this.receivedParentMessage, student => student['house'] === 'Blue'
    )));
 }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  onSave(){
    this.unassignedStudents = JSON.parse(JSON.stringify(this.unassignedStudents).replaceAll('"house":"Red"','"house":""').replaceAll('"house":"Blue"','"house":""'));
    this.redHouse = JSON.parse(JSON.stringify(this.redHouse).replaceAll('"house":""','"house":"Red"').replaceAll('"house":"Blue"','"house":"Red"'));
    this.blueHouse = JSON.parse(JSON.stringify(this.blueHouse).replaceAll('"house":""','"house":"Blue"').replaceAll('"house":"Red"','"house":"Blue"'));
    this.finalData = JSON.parse(JSON.stringify(_.union(this.redHouse,this.blueHouse,this.unassignedStudents)));
    this.finalData = JSON.parse(JSON.stringify(_.sortBy(
      this.finalData,(s) =>{
        return s['id']
      }
    )));
    this.isSuccess = true;
    this.changeHouse.emit(this.finalData);
  }

}
