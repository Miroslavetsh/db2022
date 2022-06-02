import Entity from './Entity';

export default interface Student extends Entity {
  full_name: string;
  group_id: string;
}
