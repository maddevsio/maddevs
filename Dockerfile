FROM nginx:alpine
LABEL maintainer="Andrew S, <halfb00t@gmail.com>"
COPY . /usr/share/nginx/html
