FROM node
COPY . /app
WORKDIR /app
EXPOSE 8080
RUN apt update 
RUN npm i
CMD ["node", "index.js"]