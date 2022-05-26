#!/usr/bin/env python
from flask import Blueprint, jsonify, request
import services.attendance_service as attendance_service
from models.attendance import Attendance
from werkzeug.exceptions import HTTPException
import json

api = Blueprint('attendances', 'attendances')


@api.route('/attendances', methods=['GET'])
def api_get_all():
    attendances = attendance_service.get_all()
    return jsonify([attendance.as_dict() for attendance in attendances])


@api.route('/attendances/<string:id>', methods=['GET'])
def api_get(id):
    attendance = attendance_service.get(id)
    return jsonify(attendance.as_dict())


@api.route('/attendances', methods=['POST'])
def api_post():
    attendance = attendance_service.post(request.json)
    return jsonify(attendance.as_dict())


@api.route('/attendances/<string:id>', methods=['PUT'])
def api_put(id):
    body = request.json
    body['id'] = id
    res = attendance_service.put(body)
    return jsonify(res.as_dict()) if isinstance(res, Attendance) else jsonify(res)


@api.route('/attendances/<string:id>', methods=['DELETE'])
def api_delete(id):
    res = attendance_service.delete(id)
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
