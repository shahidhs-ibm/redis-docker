FROM node
COPY . /app
WORKDIR /app
ARG --network my-net
ENV REDIS-HOST=red-server 
EXPOSE 5000:8080
RUN apt update 
RUN npm i
CMD [ "/bin/bash" ]