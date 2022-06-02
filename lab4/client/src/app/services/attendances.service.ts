import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import Attendance from '@models/Attendance';

@Injectable({
  providedIn: 'root',
})
export class AttendancesService {
  constructor(private client: HttpClient) {}

  add(attendance: Attendance) {
    return this.client.post('http://localhost:8080/attendances', attendance);
  }

  list() {
    return this.client.get('http://localhost:8080/attendances');
  }

  get(id: string) {
    return this.client.get('http://localhost:8080/attendances/' + id);
  }

  remove(id: string) {
    return this.client.delete('http://localhost:8080/attendances/' + id);
  }

  update(id: string, attendance: Attendance) {
    return this.client.put('http://localhost:8080/attendances/' + id, attendance);
  }
}
