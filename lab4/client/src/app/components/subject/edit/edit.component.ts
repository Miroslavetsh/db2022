import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import Subject from '@models/Subject';
import Group from '@models/Group';
import { SubjectsService } from '@services/subjects.service';
import { GroupsService } from '@services/groups.service';

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditSubjectComponent implements OnInit {
  editSubject: ReturnType<FormBuilder['group']>;
  id: string;
  subject: Subject;
  groups: Array<Group>;

  constructor(
    fb: FormBuilder,
    private router: Router,
    private subjectService: SubjectsService,
    private groupService: GroupsService,
    private url: ActivatedRoute
  ) {
    this.id = '';
    this.groups = [];
    this.subject = {} as Subject;
    this.editSubject = fb.group({
      name: ['', Validators.required],
      amount_per_year: [0, Validators.required],
      group_id: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.id = this.url.snapshot.params['id'];

    this.subjectService.get(this.id).subscribe((data) => {
      this.editSubject.patchValue(data);
    });

    this.groupService.list().subscribe((data) => {
      this.groups = Object.values(data);
    });
  }

  onSubmit(): void {
    this.subjectService
      .update(this.id, this.editSubject.value)
      .subscribe(() => {
        this.router.navigate(['/list-subject']);
      });
  }
}
