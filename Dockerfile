FROM node:14-alpine AS build-stage
WORKDIR /taptrack
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx:alpine
COPY --from=build-stage /taptrack/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]