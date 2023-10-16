FROM node:20.8-buster-slim

WORKDIR /usr/src/app

COPY . .

RUN npm install

CMD ["node", "src/index.js"]

