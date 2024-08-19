FROM node:20-alpine

WORKDIR /app

COPY pnpm-lock.yaml ./

RUN npm install -g pnpm

COPY . .

RUN pnpm install

RUN pnpm build

EXPOSE 5173

CMD ["pnpm", "serve"]

