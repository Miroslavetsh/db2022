import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import Group from '@models/Group';
import { GroupsService } from '@services/groups.service';

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditGroupComponent implements OnInit {
  editGroup: ReturnType<FormBuilder['group']>;
  id: string;
  group: Group;

  constructor(
    fb: FormBuilder,
    private router: Router,
    private groupService: GroupsService,
    private url: ActivatedRoute
  ) {
    this.id = '';
    this.group = {} as Group;
    this.editGroup = fb.group({
      name: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.id = this.url.snapshot.params['id'];

    this.groupService.get(this.id).subscribe((data) => {
      this.editGroup.patchValue(data);
    });
  }

  onSubmit(): void {
    this.groupService.update(this.id, this.editGroup.value).subscribe(() => {
      this.router.navigate(['/list-group']);
    });
  }
}
