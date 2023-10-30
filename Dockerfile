FROM node:16 as builder

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install
COPY . .
RUN npm run build

EXPOSE 8080

# Set environment variables
ENV PORT=8080
ENV STORAGE_PATH=/usr/src/app/src/resources/pokeneas-data.json
ENV STORAGE_URI=/usr/src/app/src/resources/pokeneas-data.json


CMD [ "node", "dist/index.js" ]




