FROM oven/bun:latest

WORKDIR /usr/src/app
COPY . /usr/src/app

RUN bun install

CMD bun src/index.ts