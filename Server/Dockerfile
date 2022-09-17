FROM ubuntu
RUN apt-get update
RUN apt-get -y install redis
EXPOSE 6379
CMD ["redis-server", "--protected-mode", "no"]

