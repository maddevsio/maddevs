FROM node:8-alpine
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build

ENV PORT 3000
EXPOSE 3000

CMD ["node", "server.js"]
