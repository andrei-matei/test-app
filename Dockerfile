FROM node:18.12.1-bullseye-slim

WORKDIR /usr/src/

COPY . .

RUN npm install


CMD [ "node", "./index.js" ]