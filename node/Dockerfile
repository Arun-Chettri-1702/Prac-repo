FROM node:25-slim

WORKDIR /app

COPY package*.json /app

RUN npm install --production

COPY . /app

EXPOSE 3000

CMD ["npm","run","start"]