FROM node:current-slim

WORKDIR /usr/frontend/

COPY package.json package-lock.json ./

RUN npm install

EXPOSE 8080

CMD [ "npm", "run", "start:dev" ]

COPY . .