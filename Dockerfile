# build stage
FROM node:14-alpine AS build-stage
WORKDIR /taptrack
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:alpine AS production-stage
# Установка сертификата SSL
COPY --from=build-stage /taptrack/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]