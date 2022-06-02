import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { GroupsService } from '@services/groups.service';
import { StudentsService } from '@services/students.service';
import Group from '@models/Group';
import Student from '@models/Student';

@Component({
  selector: 'app-add-group',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddGroupComponent implements OnInit {
  addGroup: ReturnType<FormBuilder['group']>;
  groups: Array<Group>;

  constructor(
    fb: FormBuilder,
    private router: Router,
    private groupService: GroupsService
  ) {
    this.groups = [];

    this.addGroup = fb.group({
      name: ['', Validators.required],
      students: [[], Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.groupService.add(this.addGroup.value).subscribe((data) => {
      this.router.navigate(['/']);
    });
  }
}
