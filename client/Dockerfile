FROM node:lts-alpine3.20
WORKDIR /app
COPY package*.json angular.json ./
RUN npm install -g @angular/cli
RUN npm install
COPY . .

ARG DEFAULT_PORT=4200
ENV PORT=${DEFAULT_PORT}
EXPOSE $PORT

CMD ["ng", "serve", "--host", "0.0.0.0", "--poll", "2000", "--port", "4200"]
