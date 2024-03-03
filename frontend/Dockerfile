FROM node:alpine
RUN mkdir /app
WORKDIR /app
COPY package.json /app
COPY . /app

RUN npm install

EXPOSE 8080

CMD ["npm", "run","ready"]