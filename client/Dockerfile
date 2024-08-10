FROM node:lts-alpine3.20 AS build
WORKDIR /app
COPY package*.json angular.json ./
RUN npm install -g @angular/cli
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx:stable-alpine3.19-slim
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/client/browser /usr/share/nginx/html
ARG DEFAULT_PORT=4200
ENV PORT=${DEFAULT_PORT}
EXPOSE $PORT
CMD ["nginx", "-g", "daemon off;"]
