import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Group from '@models/Group';
import { SubjectsService } from '@services/subjects.service';
import { GroupsService } from '@services/groups.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddSubjectComponent implements OnInit {
  addSubject: ReturnType<FormBuilder['group']>;
  groups: Array<Group>;

  constructor(
    fb: FormBuilder,
    private router: Router,
    private subjectService: SubjectsService,
    private groupService: GroupsService
  ) {
    this.groups = [];

    this.addSubject = fb.group({
      name: ['', Validators.required],
      amount_per_year: ['', Validators.required],
      group_id: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.groupService.list().subscribe((data) => {
      this.groups = Object.values(data);
    });
  }

  onSubmit(): void {
    this.subjectService.add(this.addSubject.value).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
