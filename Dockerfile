FROM caddy:2.7-alpine as building

RUN apk update && apk upgrade && apk add --no-cache bash="5.2.15-r5"
RUN mkdir /app

WORKDIR /app

COPY . .


FROM caddy:2.7-alpine

RUN apk add --no-cache libcap="2.69-r0" && \
    setcap -r /usr/bin/caddy && \
    apk del libcap

RUN addgroup -S caddy && \
    adduser -S caddy -G caddy -h /app

USER caddy

WORKDIR /app

COPY --from=building /app/Caddyfile ./Caddyfile
COPY --from=building /app/lido-landing ./lido-landing
COPY --from=building /app/banners ./banners

EXPOSE 3000

CMD ["caddy", "run"]
