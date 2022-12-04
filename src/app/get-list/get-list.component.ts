import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-list',
  templateUrl: './get-list.component.html',
  styleUrls: ['./get-list.component.css']
})
export class GetListComponent implements OnInit {
  @Input() receivedParentMessage:[]=[];
  constructor() {
    //this.receivedParentMessage = [];
 }

 ngOnInit() {
    
 }
  
}
