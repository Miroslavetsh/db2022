import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Student from 'src/models/Student';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor(private client: HttpClient) {}

  add(student: Student) {
    return this.client.post(
      'http://localhost:8080/endpoint/add-student',
      student
    );
  }

  list() {
    return this.client.get('http://localhost:8080/endpoint');
  }

  get(id: string) {
    return this.client.get('http://localhost:8080/endpoint/student/' + id);
  }

  remove(id: string) {
    return this.client.delete(
      'http://localhost:8080/endpoint/del-student/' + id
    );
  }

  update(id: string, student: Student) {
    return this.client.put(
      'http://localhost:8080/endpoint/update-student/' + id,
      student
    );
  }
}
