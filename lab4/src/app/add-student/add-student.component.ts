import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  addStudent: ReturnType<FormBuilder['group']>;
  constructor(
    fb: FormBuilder,
    private router: Router,
    private studentService: StudentsService
  ) {
    this.addStudent = fb.group({
      full_name: ['', Validators.required],
      presents: [true, Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.studentService.add(this.addStudent.value).subscribe((data) => {
      this.router.navigate(['/']);
    });
  }
}
