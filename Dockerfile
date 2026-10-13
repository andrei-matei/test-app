FROM node:current-alpine3.23

WORKDIR /usr/src/

COPY . .

RUN npm install


CMD [ "node", "./index.js" ]
