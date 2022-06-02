import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './components/student/add/add.component';
import { EditStudentComponent } from './components/student/edit/edit.component';
import { ListStudentComponent } from './components/student/list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddGroupComponent } from './components/group/add/add.component';
import { ListGroupComponent } from './components/group/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    EditStudentComponent,
    ListStudentComponent,
    AddGroupComponent,
    ListGroupComponent,
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
