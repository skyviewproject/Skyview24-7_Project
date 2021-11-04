FROM node:14.18.1
WORKDIR '/frontend'

COPY package.json .
RUN npm install
COPY . .
CMD ["npm","start"]
