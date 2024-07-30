FROM node:20.16.0-slim

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 8000
CMD ["node", "dist/index.js"]
