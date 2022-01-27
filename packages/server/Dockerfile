FROM node:alpine3.15 as dev
RUN yarn
WORKDIR /server
COPY . /server
EXPOSE 5000
CMD [ "yarn", "start:dev" ]

FROM node:alpine3.15 as prod
RUN yarn --production
COPY . /server
WORKDIR /server
EXPOSE 5000
CMD [ "yarn", "start" ]