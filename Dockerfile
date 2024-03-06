FROM node:14-alpine
RUN npm install -g http-server
WORKDIR /taptrack
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD [ "http-server", "dist" ]