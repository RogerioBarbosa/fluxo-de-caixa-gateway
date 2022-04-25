FROM node

WORKDIR /usr

COPY package.json ./

COPY src ./src

RUN ls -a
RUN npm install
EXPOSE 3000

CMD ["npm","run", "start"]