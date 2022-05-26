#!/usr/bin/env python
from models.student import Student
from config import db
from werkzeug.exceptions import NotFound


def get_all():
    return Student.query.all()


def get(id):
    return Student.query.get(id)


def post(body):
    student = Student(**body)
    db.session.add(student)
    db.session.commit()
    return student


def put(body):
    student = Student.query.get(body['id'])
    if student:
        student = Student(**body)
        db.session.merge(student)
        db.session.flush()
        db.session.commit()
        return student
    raise NotFound('No such entity found with id=' + str(body['id']))


def delete(id):
    student = Student.query.get(id)
    if student:
        db.session.delete(student)
        db.session.commit()
        return {'success': True}
    raise NotFound('No such entity found with id=' + str(id))
