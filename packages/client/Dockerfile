# dev
FROM node:alpine3.15 as dev
WORKDIR /app
COPY package.json /app
RUN yarn
COPY . /app
EXPOSE 3000
CMD ["yarn", "start:dev"]

# build
FROM node:alpine3.15 as build
WORKDIR /app
COPY package.json /app
RUN yarn
COPY . /app
RUN yarn build

#prod
FROM nginx:1.21.5-alpine as prod
EXPOSE 3000
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html