CREATE USER anotheruser WITH PASSWORD 'anotheruser';

GRANT connect ON DATABASE "learning" TO anotheruser;

CREATE USER newuser WITH PASSWORD 'newuser';

GRANT ALL ON DATABASE "learning" TO newuser;