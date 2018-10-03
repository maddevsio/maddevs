FROM node:8-alpine as build
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build

FROM nginx:alpine
LABEL maintainer="Andrew S <halfb00t@gmail.com>"
COPY --from=build /app/dist /usr/share/nginx/html
