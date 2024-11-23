FROM node:slim

WORKDIR /usr/src/

COPY . .

RUN npm install


CMD [ "node", "./index.js" ]