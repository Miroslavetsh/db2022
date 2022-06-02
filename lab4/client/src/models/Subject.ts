import Entity from './Entity';

export default interface Subject extends Entity {
  name: string;
  group_id: string;
  amount_per_year: number;
}
