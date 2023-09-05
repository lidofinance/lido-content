FROM caddy:2.7-alpine

RUN apk update && apk upgrade && apk add bash

RUN mkdir -p /app

WORKDIR /app
COPY . .
RUN ./scripts/build.sh

EXPOSE 3000

CMD ["caddy", "run"]