#!/usr/bin/env python
from flask import Blueprint, jsonify, request
import services.student_service as student_service
from models.student import Student
from werkzeug.exceptions import HTTPException
import json

api = Blueprint('students', 'students')


@api.route('/students', methods=['GET'])
def api_get():
    ''' Get all entities'''
    students = student_service.get()
    return jsonify([student.as_dict() for student in students])


@api.route('/students', methods=['POST'])
def api_post():
    ''' Create entity'''
    student = student_service.post(request.json)
    return jsonify(student.as_dict())


@api.route('/students/<string:id>', methods=['PUT'])
def api_put(id):
    ''' Update entity by id'''
    body = request.json
    body['id'] = id
    res = student_service.put(body)
    return jsonify(res.as_dict()) if isinstance(res, Student) else jsonify(res)


@api.route('/students/<string:id>', methods=['DELETE'])
def api_delete(id):
    ''' Delete entity by id'''
    res = student_service.delete(id)
    return jsonify(res)


@api.errorhandler(HTTPException)
def handle_exception(e):
    """Return JSON format for HTTP errors."""
    # start with the correct headers and status code from the error
    response = e.get_response()
    # replace the body with JSON
    response.data = json.dumps({
        'success': False,
        "message": e.description
    })
    response.content_type = "application/json"
    return response
