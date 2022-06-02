import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddStudentComponent } from './components/student/add/add.component';
import { EditStudentComponent } from './components/student/edit/edit.component';
import { ListStudentComponent } from './components/student/list/list.component';

import { AddGroupComponent } from './components/group/add/add.component';
import { EditGroupComponent } from './components/group/edit/edit.component';
import { ListGroupComponent } from './components/group/list/list.component';

import { AddSubjectComponent } from './components/subject/add/add.component';
import { EditSubjectComponent } from './components/subject/edit/edit.component';
import { ListSubjectComponent } from './components/subject/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    EditStudentComponent,
    ListStudentComponent,
    AddGroupComponent,
    EditGroupComponent,
    ListGroupComponent,
    AddSubjectComponent,
    EditSubjectComponent,
    ListSubjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
