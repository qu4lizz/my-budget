FROM node:lts-alpine3.20 AS build
WORKDIR /app
COPY package*.json angular.json ./
RUN npm install -g @angular/cli
RUN npm install
COPY . .
VOLUME ["/opt/client/node_modules"]
ARG DEFAULT_PORT=4200
ENV PORT=${DEFAULT_PORT}
EXPOSE $PORT
CMD ["npm", "start", "--", "--host", "0.0.0.0", "--port", "4200"]
