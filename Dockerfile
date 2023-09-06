FROM caddy:2.7-alpine as building

RUN apk update && apk upgrade && apk add bash
RUN mkdir /app

WORKDIR /app

COPY . .

RUN ./scripts/build.sh

FROM caddy:2.7-alpine

RUN addgroup -S caddy && \
    adduser -S caddy -G caddy -h /app

USER caddy

WORKDIR /app

COPY --from=building /app/Caddyfile ./Caddyfile
COPY --from=building /app/lido-landing ./lido-landing

EXPOSE 3000

CMD ["caddy", "run"]