import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Student from '@models/Student';
import { StudentsService } from '@services/students.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListStudentComponent implements OnInit {
  students: Array<Student>;
  constructor(private studentsService: StudentsService) {
    this.students = [];
  }

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentsService.list().subscribe((data) => {
      this.students = Object.values(data);
    });
  }

  deleteStudent(id: string): void {
    this.studentsService.remove(id).subscribe(() => {
      this.students = this.students.filter((student) => student._id !== id);
    });
  }
}
