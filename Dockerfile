FROM node:12

WORKDIR /app
COPY package.json /app
RUN npm ci
COPY . /app
RUN npm run build

ENV PORT 3000
EXPOSE 3000

CMD ["npm", "start"]
