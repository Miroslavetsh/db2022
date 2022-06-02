import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { GroupsService } from '@services/groups.service';
import { StudentsService } from '@services/students.service';
import Group from 'src/models/Group';

@Component({
  selector: 'app-add-student',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddStudentComponent implements OnInit {
  addStudent: ReturnType<FormBuilder['group']>;
  groups: Array<Group>;

  constructor(
    fb: FormBuilder,
    private router: Router,
    private studentService: StudentsService,
    private groupService: StudentsService
  ) {
    this.groups = [];
    this.addStudent = fb.group({
      full_name: ['', Validators.required],
      group_id: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.groupService.list().subscribe((data) => {
      this.groups = Object.values(data);
    });
  }

  onSubmit(): void {
    this.studentService.add(this.addStudent.value).subscribe((data) => {
      this.router.navigate(['/']);
    });
  }
}
