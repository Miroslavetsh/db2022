import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Group from '@models/Group';
import Attendance from '@models/Attendance';
import Subject from '@models/Subject';
import { AttendancesService } from '@services/attendances.service';
import { GroupsService } from '@services/groups.service';
import { SubjectsService } from '@services/subjects.service';

@Component({
  selector: 'app-add-attendance',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddAttendanceComponent implements OnInit {
  addAttendance: ReturnType<FormBuilder['group']>;
  attendances: Array<Attendance>;
  groups: Array<Group>;
  subjects: Array<Subject>;

  constructor(
    fb: FormBuilder,
    private router: Router,
    private attendanceService: AttendancesService,
    private groupService: GroupsService,
    private subjectService: SubjectsService
  ) {
    this.attendances = [];
    this.groups = [];
    this.subjects = [];

    this.addAttendance = fb.group({
      subject_id: ['', Validators.required],
      group_id: ['', Validators.required],
      date: ['', Validators.required],
      amount_of_students_present: ['', Validators.required],
      students: [[], Validators.required],
    });
  }

  ngOnInit(): void {
    this.groupService.list().subscribe((data) => {
      this.groups = Object.values(data);
    });

    this.subjectService.list().subscribe((data) => {
      this.subjects = Object.values(data);
    });
  }

  onSubmit(): void {
    this.attendanceService.add(this.addAttendance.value).subscribe(() => {
      console.log(this.addAttendance.value);

      this.router.navigate(['/']);
    });
  }
}
