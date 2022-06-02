import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { GroupsService } from '@services/groups.service';
import { StudentsService } from '@services/students.service';
import Group from '@models/Group';
import Student from '@models/Student';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditStudentComponent implements OnInit {
  editStudent: ReturnType<FormBuilder['group']>;
  id: string;
  student: Student;
  groups: Array<Group>;

  constructor(
    fb: FormBuilder,
    private router: Router,
    private studentService: StudentsService,
    private groupsService: GroupsService,
    private url: ActivatedRoute
  ) {
    this.id = '';
    this.groups = [];
    this.student = {} as Student;
    this.editStudent = fb.group({
      full_name: ['', Validators.required],
      group_id: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.id = this.url.snapshot.params['id'];

    this.studentService.get(this.id).subscribe((data) => {
      this.editStudent.patchValue(data);
    });

    this.groupsService.list().subscribe((data) => {
      this.groups = Object.values(data);
    });
  }

  onSubmit(): void {
    console.log(this.editStudent.value);

    this.studentService
      .update(this.id, this.editStudent.value)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }
}
