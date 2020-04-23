FROM nginx:1.13.2-alpine

RUN mkdir /var/log/nginx/log/
RUN touch /var/log/nginx/log/host.access.log
RUN ln -sf /dev/stdout /var/log/nginx/log/host.access.log

COPY ./build/ /usr/share/nginx/html/

COPY nginx.conf /etc/nginx/conf.d/default.conf


EXPOSE 8080 8080
