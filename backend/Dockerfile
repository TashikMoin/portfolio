FROM node
WORKDIR /portfolio/backend
COPY ./package.json .
COPY ./package-lock.json .
RUN npm install
CMD ["node", "app.js"]

