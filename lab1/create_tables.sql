CREATE TABLE "Student" (
  "id" SERIAL PRIMARY KEY,
  "fullName" varchar,
  "group" varchar,
  "isPresent" boolean
);

CREATE TABLE "Attendency" (
  "id" SERIAL,
  "student_id" int,
  PRIMARY KEY ("id", "student_id")
);

ALTER TABLE
  "Attendency"
ADD
  FOREIGN KEY ("student_id") REFERENCES "Student" ("id");