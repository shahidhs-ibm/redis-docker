FROM node:alpine
COPY . /app
WORKDIR /app
EXPOSE 8080
RUN apk update 
RUN npm i
CMD ["node", "index.js"]