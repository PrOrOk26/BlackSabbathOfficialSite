FROM node:current-slim

WORKDIR /usr/app/

COPY package.json package-lock.json ./

RUN npm install

EXPOSE 8080

CMD [ "npm", "start" ]

COPY . .