#!/usr/bin/env python
from config import app
from controllers.student_controller import api as students_api
from controllers.attendance_controller import api as attendances_api

# register the api
app.register_blueprint(students_api)
app.register_blueprint(attendances_api)

if __name__ == '__main__':
    ''' run application '''
    app.run(host='0.0.0.0', port=5000)
