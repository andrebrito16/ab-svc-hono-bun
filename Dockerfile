FROM oven/bun:0.8

WORKDIR /usr/src/app
COPY . /usr/src/app

RUN bun install

CMD bun src/index.ts