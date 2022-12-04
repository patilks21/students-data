import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { GetListComponent } from './get-list/get-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { HouseViewComponent } from './house-view/house-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { UpdateDataComponent } from './update-data/update-data.component';

@NgModule({
  declarations: [
    AppComponent,
    GetListComponent,
    AddStudentComponent,
    HouseViewComponent,
    UpdateDataComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
