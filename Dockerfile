FROM node:18-alpine as BUILD_IMAGE

WORKDIR /app_be

ENV NODE_ENV 'production'

RUN chown -R node:node /app_be

COPY . .

RUN npm install

# Installing pm2 globally
# RUN npm install pm2 -g

# Starting our application
# CMD pm2 start process.yml && tail -f /dev/null

EXPOSE 8080

USER node

CMD ["node", "src/index.js"]