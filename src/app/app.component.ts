import { Component, NgModule } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import * as _ from 'lodash';
import {GetListComponent} from './get-list/get-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  studentView:boolean;
  addStudentView:boolean;
  houseView:boolean;
  updateView:boolean;
  title = 'students-data';
  studentData:[];
  idList:[]=[];
  constructor() {
    this.studentView = false;
    this.addStudentView = false;
    this.houseView = false;
    this.updateView = false;
    this.studentData = require('./studentsdata.json');
  }
 viewList() {
  this.addStudentView = false;
  this.houseView = false;
  this.updateView = false;
  if (this.studentView == true){
    this.studentView = false;
  } else {
    this.studentView = true;
  }
 }
 viewForm() {
  this.idList = JSON.parse(JSON.stringify(this.studentData.map(student => student['id'])));
  console.log(this.idList);
  this.studentView = false;
  this.houseView = false;
  this.updateView = false;
  if (this.addStudentView == true){
    this.addStudentView = false;
  } else {
    this.addStudentView = true;
  }
 }
 viewHouse() {
  this.studentView = false;
  this.addStudentView = false;
  this.updateView = false;
  if (this.houseView == true){
    this.houseView = false;
  } else {
    this.houseView = true;
  }
 }
 viewUpdate() {
  this.studentView = false;
  this.addStudentView = false;
  this.houseView = false;
  if (this.updateView == true){
    this.updateView = false;
  } else {
    this.updateView = true;
  }
 }
 updateData(updatedList:[]){
  this.studentData = JSON.parse(JSON.stringify(updatedList));
 }
 addNewData(newStudent:string){
  this.studentData = JSON.parse(JSON.stringify(_.union(this.studentData,[JSON.parse(newStudent)])));
 }
}

