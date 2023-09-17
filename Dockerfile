# build stage
FROM node:14-alpine AS build-stage
WORKDIR /taptreck
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx AS production-stage
COPY --from=build-stage /taptreck/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]