import Entity from './Entity';
import Student from './Student';

export default interface Attendance extends Entity {
  subject_id: string;
  group_id: string;
  amount_of_students_present: number;
  date: Date;
  students: Array<
    Student & {
      presents: boolean;
    }
  >;
}
