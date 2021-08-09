FROM node
WORKDIR /portfolio/client
COPY . /portfolio/client
RUN npm install && npm run build
CMD ["npm", "start"]