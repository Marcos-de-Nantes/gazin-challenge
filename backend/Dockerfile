FROM node:alpine

WORKDIR /usr/src/app/backend

COPY package*.json ./

RUN yarn

EXPOSE 8080

CMD ["yarn", "dev"]