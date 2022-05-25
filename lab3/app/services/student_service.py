#!/usr/bin/env python
from models.student import Student
from config import db
from werkzeug.exceptions import NotFound

def get():
    '''
    Get all entities
    :returns: all entity
    '''
    return Student.query.all()

def post(body):
    '''
    Create entity with body
    :param body: request body
    :returns: the created entity
    '''
    student = Student(**body)
    db.session.add(student)
    db.session.commit()
    return student

def put(body):
    '''
    Update entity by id
    :param body: request body
    :returns: the updated entity
    '''
    student = Student.query.get(body['id'])
    if student:
        student = Student(**body)
        db.session.merge(student)
        db.session.flush()
        db.session.commit()
        return student
    raise NotFound('no such entity found with id=' + str(body['id']))

def delete(id):
    '''
    Delete entity by id
    :param id: the entity id
    :returns: the response
    '''
    student = Student.query.get(id)
    if student:
        db.session.delete(student)
        db.session.commit()
        return {'success': True}
    raise NotFound('no such entity found with id=' + str(id))



