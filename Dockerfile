FROM node:current-alpine3.23

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --omit=dev

COPY . .

EXPOSE 3000

CMD [ "node", "./index.js" ]
