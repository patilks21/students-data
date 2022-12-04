import { Component, Input , Output, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms'
import * as _ from 'lodash';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.css']
})
export class UpdateDataComponent {
  @Input() receivedParentMessage:[]=[];
  @Output() newStudentData=new EventEmitter<[]>();
  fname:string='';
  lname:string='';
  mobile:string='';
  email:string='';
  address:string='';
  house:string=''
  id:number=0;
  isSuccess:boolean;
  constructor(){
    this.isSuccess = false;
  }
  onSelectChange(id:any){
    console.log(id);
    let student = JSON.parse(JSON.stringify(_.filter(
      this.receivedParentMessage, student => student['id'] === parseInt(id)
    )));
    this.id = student[0]['id'];
    this.fname = student[0]['name'].split(' ')[0];
    this.lname = student[0]['name'].split(' ')[1];
    this.mobile = student[0]['mobile'];
    this.email = student[0]['email'];
    this.address = student[0]['address'];
    this.house = student[0]['house'];
  }
  updateStudent(updatestudent :NgForm) {
    let updatedJson = {
      "id":this.id,
      "name":this.fname + ' ' + this.lname,
      "address":this.address,
      "mobile" :this.mobile,
      "email":this.email,
      "image":"",
      "house":this.house
    }
    let updatedData = JSON.parse(JSON.stringify(_.filter(
      this.receivedParentMessage, student => student['id'] !== this.id
    )));
    updatedData.push(updatedJson);
    updatedData = JSON.parse(JSON.stringify(_.sortBy(
      updatedData,(s) =>{
        return s['id']
      }
    )));
    updatestudent.reset();
    this.isSuccess = true;
    this.newStudentData.emit(updatedData);
  }
}
