FROM node:18-alpine3.17
ENV NODE_ENV=production
WORKDIR /usr/src/app

RUN apk add --no-cache bash
# apk update && apk upgrade && apk add curl

COPY server ./
COPY public ./public
COPY dist ./dist
COPY ./.env ./

RUN npm install --legacy-peer-deps --production --silent

EXPOSE 3000

CMD [ "npm", "run", "start-prod" ]