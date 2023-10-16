FROM node:20.8-buster-slim

WORKDIR /usr/src/app

COPY . .

RUN chmod +x entrypoint.sh

RUN npm install

RUN apt update && \
    apt install -y wget netcat-traditional && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for

CMD ["sh", "entrypoint.sh"]

