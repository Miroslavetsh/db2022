#!/usr/bin/env python
from models.attendance import Attendance
from config import db
from werkzeug.exceptions import NotFound


def get_all():
    return Attendance.query.all()


def get(id):
    return Attendance.query.get(id)


def post(body):
    attendance = Attendance(**body)
    db.session.add(attendance)
    db.session.commit()
    return attendance


def put(body):
    attendance = Attendance.query.get(body['id'])
    if attendance:
        attendance = Attendance(**body)
        db.session.merge(attendance)
        db.session.flush()
        db.session.commit()
        return attendance
    raise NotFound('No such entity found with id=' + str(body['id']))


def delete(id):
    attendance = Attendance.query.get(id)
    if attendance:
        db.session.delete(attendance)
        db.session.commit()
        return {'success': True}
    raise NotFound('No such entity found with id=' + str(id))
