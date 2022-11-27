FROM node:16.17.0-bullseye-slim

WORKDIR /usr/src/

COPY . .

RUN npm install


CMD [ "node", "./index.js" ]