# Python Postgres Lab 3

## Prerequisites

1. Python 3.x
2. Postgres database

## How to run it locally

- the first step is creating a new database named **lab3**
- secondly, create tables for students and attendances tables using scripts from _db/init-scripts/ddl.sql_
- run `pip install -r ./requirements.txt` command
- move to the _/app_ folder and run `python app.py` command

## Configuration

Located under the yaml file!!!

- **SQLALCHEMY_DATABASE_URI** postgres db connection url

also the config value can be set through environment variable **SQLALCHEMY_DATABASE_URI**.

## Local Running

Go to app folder.

- Install requirements:

```powershell
pip install -r requirements.txt
```

- Run the db/init-scripts/ddl.sql to create table

- Run application:

_setting a environment variable is an **optional sub-step**_

```powershell
set SQLALCHEMY_DATABASE_URI=your_database_uri
```

```powershell
python app.py
```

(required)

## Schemas

### Student

- id
- full_name

### Attendance

- id
- val (char that can be empty if student is present or contain a n symbol if not )
- subject_date (time stamp)
- student_id

## Test and Verification

You can test the relevant routes (with **Postman**, for example), such as:

### Students

- GET `/students` - get a list of all students
- GET `/students/:id` - get a student
- POST `/students` - add a new student (requires parameters from schema in body)
- PUT `/students/:id` - update a student (requires parameters from schema in body)
- DELETE `/students/:id` - delete a student

### Attendances (such as Students)

- GET `/attendances` - get a list of all attendances
- GET `/attendances/:id` - get a attendance
- POST `/attendances` - add a new attendance (requires parameters from schema in body)
- PUT `/attendances/:id` - update an attendance (requires parameters from schema in body)
- DELETE `/attendances/:id` - delete an attendance

I also add a `postman_collection.json` file in docs folder
