import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import Attendance from '@models/Attendance';
import Group from '@models/Group';
import Subject from '@models/Subject';
import { AttendancesService } from '@services/attendances.service';
import { GroupsService } from '@services/groups.service';
import { SubjectsService } from '@services/subjects.service';

@Component({
  selector: 'app-edit-attendance',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditAttendanceComponent implements OnInit {
  editAttendance: ReturnType<FormBuilder['group']>;
  id: string;
  attendance: Attendance;
  groups: Array<Group>;
  subjects: Array<Subject>;

  constructor(
    fb: FormBuilder,
    private router: Router,
    private attendanceService: AttendancesService,
    private groupService: GroupsService,
    private subjectService: SubjectsService,
    private url: ActivatedRoute
  ) {
    this.id = '';
    this.attendance = {} as Attendance;
    this.groups = [];
    this.subjects = [];

    this.editAttendance = fb.group({
      subject_id: ['', Validators.required],
      group_id: ['', Validators.required],
      date: ['', Validators.required],
      amount_of_students_present: ['', Validators.required],
      students: [[], Validators.required],
    });
  }

  ngOnInit(): void {
    this.id = this.url.snapshot.params['id'];

    this.attendanceService.get(this.id).subscribe((data) => {
      this.editAttendance.patchValue(data);
    });

    this.groupService.list().subscribe((data) => {
      this.groups = Object.values(data);
    });

    this.subjectService.list().subscribe((data) => {
      this.subjects = Object.values(data);
    });
  }

  onSubmit(): void {
    this.attendanceService
      .update(this.id, this.editAttendance.value)
      .subscribe(() => {
        this.router.navigate(['/list-attendance']);
      });
  }
}
