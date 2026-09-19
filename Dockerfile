FROM nginx:1.27-alpine
ARG OCI_REVISION
ARG OCI_CREATED
LABEL org.opencontainers.image.revision=$OCI_REVISION \
      org.opencontainers.image.created=$OCI_CREATED
COPY . /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
