FROM node:alpine

WORKDIR /app

COPY package.json .
COPY tsconfig.json .
COPY ./src ./src

RUN npm install ci
RUN npm run build

CMD [ "node", "dist/index.js" ]
