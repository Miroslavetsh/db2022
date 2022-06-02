import Entity from './Entity';

export default interface Group extends Entity {
  name: string;
  students: Array<string>;
}
