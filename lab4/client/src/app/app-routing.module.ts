import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGroupComponent } from './components/group/add/add.component';
import { EditGroupComponent } from './components/group/edit/edit.component';
import { ListGroupComponent } from './components/group/list/list.component';
import { AddStudentComponent } from './components/student/add/add.component';
import { EditStudentComponent } from './components/student/edit/edit.component';
import { ListStudentComponent } from './components/student/list/list.component';

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
    path: 'add-group',
    component: AddGroupComponent,
  },
  {
    path: 'list-group',
    component: ListGroupComponent,
  },
  {
    path: 'edit-group/:id',
    component: EditGroupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
