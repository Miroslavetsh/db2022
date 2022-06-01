import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Student from 'src/models/Student';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css'],
})
export class ListStudentComponent implements OnInit {
  students: Array<Student>;
  constructor(private studentsService: StudentsService, router: Router) {
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
      this.students = this.students.filter((user) => user._id !== id);
    });
  }

  editStudent(): void {}
}
