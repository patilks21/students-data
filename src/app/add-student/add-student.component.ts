import { outputAst } from '@angular/compiler';
import { Component, Input , Output, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  @Input() idList:[]=[];
  @Output() newStudent=new EventEmitter<string>();
  fname:string='';
  lname:string='';
  mobile:string='';
  email:string='';
  address:string='';
  
  addStudent(addStudent :NgForm) {
    let maxId = Math.max(...this.idList);
    let newStudentData = {
      "id":maxId + 1,
      "name":this.fname + ' ' + this.lname,
      "address":this.address,
      "mobile" :this.mobile,
      "email":this.email,
      "image":"",
      "house":""
    }
    addStudent.reset();
    this.newStudent.emit(JSON.stringify(newStudentData));
  }
}
