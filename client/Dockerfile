FROM node
WORKDIR /portfolio/client
COPY ./package.json .
COPY ./package-lock.json .
RUN npm install && npm run build
CMD ["npm", "start"]