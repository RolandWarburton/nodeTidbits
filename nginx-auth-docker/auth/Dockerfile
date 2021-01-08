FROM node:14
WORKDIR /usr/src/app
COPY ./package.json /usr/src/app
RUN npm install
COPY . /usr/src/app
EXPOSE 8080
CMD ["npm", "run", "start"]
