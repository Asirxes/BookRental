FROM mysql:8
#COPY ./mysql.cnf /etc/mysql/conf.d
#COPY ./projekt.sql /docker-entrypoint-initdb.d/projekt.sql

COPY ./projekt.sql /projekt.sql
# docker exec -it mysql bash
RUN cat /projekt.sql | mysql --user=root --password=secret laravel 
