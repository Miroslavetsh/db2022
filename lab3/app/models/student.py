#!/usr/bin/env python
from flask import Flask, jsonify, request
from config import db
import yaml
import os


class Student(db.Model):
    ''' The data model'''
    # table name
    __tablename__ = 'students'
    id = db.Column(db.Integer(), primary_key=True, autoincrement=True)
    full_name = db.Column(db.String(200), nullable=False)

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}
