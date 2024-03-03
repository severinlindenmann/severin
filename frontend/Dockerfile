FROM node:alpine
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app

RUN npm install
RUN npm run build

EXPOSE 8080

CMD ["npm", "run","start"]