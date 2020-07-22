#https://hub.docker.com/repository/docker/chutimon/product
FROM  node:14.5.0-stretch
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install
EXPOSE 9999
CMD [ "npm", "start" ]
