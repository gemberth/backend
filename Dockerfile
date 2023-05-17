FROM node:19.2-alpine3.16

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 3004

CMD ["npm", "start"]