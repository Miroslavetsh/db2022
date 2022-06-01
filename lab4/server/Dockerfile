FROM node:alpine

WORKDIR /usr/server

COPY ./ ./

RUN npm install

EXPOSE 8080

CMD [ "npm", "run", "serve" ]
