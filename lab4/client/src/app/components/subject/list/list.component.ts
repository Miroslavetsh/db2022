import { Component, OnInit } from '@angular/core';

import Subject from '@models/Subject';
import { SubjectsService } from '@services/subjects.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListSubjectComponent implements OnInit {
  subjects: Array<Subject>;
  constructor(private subjectsService: SubjectsService) {
    this.subjects = [];
  }

  ngOnInit(): void {
    this.loadSubjects();
  }

  loadSubjects(): void {
    this.subjectsService.list().subscribe((data) => {
      this.subjects = Object.values(data);
      console.log(this.subjects);
    });
  }

  deleteSubject(id: string): void {
    this.subjectsService.remove(id).subscribe(() => {
      this.subjects = this.subjects.filter((subject) => subject._id !== id);
    });
  }
}
