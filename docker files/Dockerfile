FROM ubuntu
RUN apt-get update
RUN apt-get -y install git
RUN apt-get install make
RUN apt -y install build-essential
RUN apt-get -y install pkg-config
## for tcl
ENV TZ=Asia/Kolkata \
    DEBIAN_FRONTEND=noninteractive
RUN apt-get -y install tzdata tcl

# WORKDIR /home
# RUN git clone https://github.com/redis/redis.git 
# WORKDIR /home/redis
# RUN make ; cd src ; ./redis-server

RUN apt-get -y install redis
CMD ["redis-server", "--protected-mode", "no"]

