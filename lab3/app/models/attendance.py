#!/usr/bin/env python
from config import db


class Attendance(db.Model):
    __tablename__ = 'attendances'
    id = db.Column(db.Integer(), primary_key=True, autoincrement=True)
    val = db.Column(db.CHAR(), nullable=False)
    subject_date = db.Column(db.Date(), nullable=False)
    student_id = db.Column(db.Integer(), nullable=False)

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}
