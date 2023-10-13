FROM node:20.8-buster-slim

WORKDIR /usr/src/app

COPY . .

CMD ["node", "src/index.js"]

