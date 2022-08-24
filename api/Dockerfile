FROM node:16-alpine


WORKDIR /app
RUN chown -R node:node /app
RUN npm install -g nodemon


COPY --chown=node:node package.json .

RUN npm install

COPY --chown=node:node . .

EXPOSE 4000

USER node

CMD ["npm", "run", "dev"]