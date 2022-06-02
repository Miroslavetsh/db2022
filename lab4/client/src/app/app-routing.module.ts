import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAttendanceComponent } from './components/attendance/add/add.component';
import { EditAttendanceComponent } from './components/attendance/edit/edit.component';
import { ListAttendanceComponent } from './components/attendance/list/list.component';

import { AddGroupComponent } from './components/group/add/add.component';
import { EditGroupComponent } from './components/group/edit/edit.component';
import { ListGroupComponent } from './components/group/list/list.component';

import { AddStudentComponent } from './components/student/add/add.component';
import { EditStudentComponent } from './components/student/edit/edit.component';
import { ListStudentComponent } from './components/student/list/list.component';

import { AddSubjectComponent } from './components/subject/add/add.component';
import { EditSubjectComponent } from './components/subject/edit/edit.component';
import { ListSubjectComponent } from './components/subject/list/list.component';

const routes: Routes = [
  {
    path: '',
    component: ListStudentComponent,
  },
  {
    path: 'add-student',
    component: AddStudentComponent,
  },
  {
    path: 'edit-student/:id',
    component: EditStudentComponent,
  },
  {
    path: 'list-group',
    component: ListGroupComponent,
  },
  {
    path: 'add-group',
    component: AddGroupComponent,
  },
  {
    path: 'edit-group/:id',
    component: EditGroupComponent,
  },
  {
    path: 'list-subject',
    component: ListSubjectComponent,
  },
  {
    path: 'add-subject',
    component: AddSubjectComponent,
  },
  {
    path: 'edit-subject/:id',
    component: EditSubjectComponent,
  },
  {
    path: 'list-attendance',
    component: ListAttendanceComponent,
  },
  {
    path: 'add-attendance',
    component: AddAttendanceComponent,
  },
  {
    path: 'edit-attendance/:id',
    component: EditAttendanceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
