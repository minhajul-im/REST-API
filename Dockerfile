FROM node:20 AS builder

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml* ./

RUN pnpm install

ARG NEXT_EMAIL_PRIVATE_KEY

ENV NEXT_EMAIL_PRIVATE_KEY=${NEXT_EMAIL_PRIVATE_KEY}

ARG NEXT_BASE_URL

ENV NEXT_BASE_URL=${NEXT_BASE_URL}

COPY . .

RUN pnpm run build

EXPOSE 3000

CMD ["pnpm", "run", "start"]

