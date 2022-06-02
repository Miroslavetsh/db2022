import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Group from '@models/Group';
import { GroupsService } from '@services/groups.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListGroupComponent implements OnInit {
  groups: Array<Group>;
  constructor(private groupsService: GroupsService) {
    this.groups = [];
  }

  ngOnInit(): void {
    this.loadGroups();
  }

  loadGroups(): void {
    this.groupsService.list().subscribe((data) => {
      this.groups = Object.values(data);
    });
  }

  deleteGroup(id: string): void {
    this.groupsService.remove(id).subscribe(() => {
      this.groups = this.groups.filter((group) => group._id !== id);
    });
  }
}
