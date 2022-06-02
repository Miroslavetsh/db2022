import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
