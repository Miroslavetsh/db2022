# Create from official postgres image
FROM postgres

# Add a database
ENV POSTGRES_DB lab3

# Initial db scripts
COPY ./init-scripts /docker-entrypoint-initdb.d/