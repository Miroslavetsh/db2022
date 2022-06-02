import Entity from './Entity';
import Student from './Student';

export default interface Group extends Entity {
  name: string;
  students: Array<string>;
}
