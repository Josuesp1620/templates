FROM node:latest

WORKDIR /usr/src/maplibre_layers

COPY . .

RUN npm install

EXPOSE 7070

CMD ["npm", "run", "dev"]