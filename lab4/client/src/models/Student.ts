import Entity from "./Entity";

export default interface Student extends Entity {
  _id: string;
  full_name: string;
  group_id: string;
}
