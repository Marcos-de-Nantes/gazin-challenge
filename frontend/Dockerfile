FROM node:alpine

WORKDIR /usr/src/app/frontend

COPY package*.json ./

RUN yarn

EXPOSE 3000

CMD ["yarn", "dev"]