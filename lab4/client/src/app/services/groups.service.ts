import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import Group from '@models/Group';

@Injectable({
  providedIn: 'root',
})
export class GroupsService {
  constructor(private client: HttpClient) {}

  add(group: Group) {
    return this.client.post('http://localhost:8080/groups', group);
  }

  list() {
    return this.client.get('http://localhost:8080/groups');
  }

  get(id: string) {
    return this.client.get('http://localhost:8080/groups/' + id);
  }

  remove(id: string) {
    return this.client.delete('http://localhost:8080/groups/' + id);
  }

  update(id: string, group: Group) {
    return this.client.put('http://localhost:8080/groups/' + id, group);
  }
}
