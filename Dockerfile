FROM FROM node:20-alpine3.17

WORKDIR /Docker

COPY package.json /CounterApp/
COPY src /CounterApp/

RUN npm install

CMD ["npm", "start"]