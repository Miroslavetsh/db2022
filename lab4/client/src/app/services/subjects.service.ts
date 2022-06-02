import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import Subject from '@models/Subject';

@Injectable({
  providedIn: 'root',
})
export class SubjectsService {
  constructor(private client: HttpClient) {}

  add(subject: Subject) {
    return this.client.post('http://localhost:8080/subjects', subject);
  }

  list() {
    return this.client.get('http://localhost:8080/subjects');
  }

  get(id: string) {
    return this.client.get('http://localhost:8080/subjects/' + id);
  }

  remove(id: string) {
    return this.client.delete('http://localhost:8080/subjects/' + id);
  }

  update(id: string, subject: Subject) {
    return this.client.put('http://localhost:8080/subjects/' + id, subject);
  }
}
