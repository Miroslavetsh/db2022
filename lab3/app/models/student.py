#!/usr/bin/env python
from config import db


class Student(db.Model):
    __tablename__ = 'students'
    id = db.Column(db.Integer(), primary_key=True, autoincrement=True)
    full_name = db.Column(db.String(128), nullable=False)

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}
