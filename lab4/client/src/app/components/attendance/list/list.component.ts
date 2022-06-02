import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Attendance from '@models/Attendance';
import { AttendancesService } from '@services/attendances.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListAttendanceComponent implements OnInit {
  attendances: Array<Attendance>;
  constructor(private attendancesService: AttendancesService) {
    this.attendances = [];
  }

  ngOnInit(): void {
    this.loadAttendances();
  }

  loadAttendances(): void {
    this.attendancesService.list().subscribe((data) => {
      this.attendances = Object.values(data);
    });
  }

  deleteAttendance(id: string): void {
    this.attendancesService.remove(id).subscribe(() => {
      this.attendances = this.attendances.filter((attendance) => attendance._id !== id);
    });
  }
}
