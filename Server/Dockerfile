FROM ubuntu
ARG network=my-net 
ARG -d
ARG network-alias=red-server
RUN apt-get update
RUN apt-get -y install redis
EXPOSE 8080:6379
CMD ["redis-server", "--protected-mode", "no"]

