FROM node:12

WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run generate

ENV PORT 3000
EXPOSE 3000

CMD ["node", "server.js"]
