FROM node:16-alpine

EXPOSE 8080

WORKDIR /app/src

COPY . .

RUN npm install

CMD ["npm", "start"]
