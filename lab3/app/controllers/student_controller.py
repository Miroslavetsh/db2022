#!/usr/bin/env python
from flask import Blueprint, jsonify, request
import services.student_service as student_service
from models.student import Student
from werkzeug.exceptions import HTTPException
import json

api = Blueprint('students', 'students')


@api.route('/students', methods=['GET'])
def api_get_all():
    students = student_service.get_all()
    return jsonify([student.as_dict() for student in students])


@api.route('/students/<string:id>', methods=['GET'])
def api_get(id):
    student = student_service.get(id)
    return jsonify(student)


@api.route('/students', methods=['POST'])
def api_post():
    student = student_service.post(request.json)
    return jsonify(student.as_dict())


@api.route('/students/<string:id>', methods=['PUT'])
def api_put(id):
    body = request.json
    body['id'] = id
    res = student_service.put(body)
    return jsonify(res.as_dict()) if isinstance(res, Student) else jsonify(res)


@api.route('/students/<string:id>', methods=['DELETE'])
def api_delete(id):
    res = student_service.delete(id)
    return jsonify(res)


@api.errorhandler(HTTPException)
def handle_exception(e):
    response = e.get_response()
    response.data = json.dumps({
        'success': False,
        "message": e.description
    })
    response.content_type = "application/json"
    return response
