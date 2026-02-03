FROM node:25.5.0-alpine3.23

WORKDIR /usr/src/

COPY . .

RUN npm install


CMD [ "node", "./index.js" ]