FROM node:20.11.1-alpine AS build

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

ARG API_URL
RUN sed -i "s|apiUrl: ''|apiUrl: '${API_URL}'|" src/environments/environment.prod.ts

RUN yarn build

FROM nginx:alpine

COPY --from=build /app/dist/pokedex-app/browser /usr/share/nginx/html

EXPOSE 80

