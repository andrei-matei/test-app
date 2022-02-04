FROM node:lts-bullseye

WORKDIR /usr/src/

COPY . .

RUN npm install



CMD [ "node", "./index.js" ]