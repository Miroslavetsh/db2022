# STAGE 1 Angular
FROM node:alpine AS builder

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build

# STAGE 2 nginx
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/dist/lab4 .

RUN chown nginx:nginx /usr/share/nginx/html/*

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]