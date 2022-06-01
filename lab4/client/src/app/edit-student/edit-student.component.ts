import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Student from 'src/models/Student';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css'],
})
export class EditStudentComponent implements OnInit {
  editStudent: ReturnType<FormBuilder['group']>;
  student: Student | undefined;
  id: string;

  constructor(
    fb: FormBuilder,
    private router: Router,
    private studentService: StudentsService,
    private url: ActivatedRoute
  ) {
    this.id = '';
    this.editStudent = fb.group({
      full_name: ['', Validators.required],
      presents: [true, Validators.required],
    });
  }

  ngOnInit(): void {
    this.id = this.url.snapshot.params['id'];
    this.studentService.get(this.id).subscribe((data) => {
      this.editStudent.patchValue(data);
    });
  }

  onSubmit(): void {
    this.studentService
      .update(this.id, this.editStudent.value)
      .subscribe((data) => {
        this.router.navigate(['/']);
      });
  }
}
