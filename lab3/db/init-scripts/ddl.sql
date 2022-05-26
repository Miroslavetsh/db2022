CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(128) NOT NULL
);

CREATE TABLE attendances (
    id SERIAL PRIMARY KEY,
    val CHAR NOT NULL,
    subject_date DATE NOT NULL,
    student_id INTEGER NOT NULL,
    FOREIGN KEY (student_id) REFERENCES students (id)
);
