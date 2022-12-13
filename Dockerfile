FROM node:15.3-alpine
WORKDIR /tubes-beneran
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm run build
CMD ["npm", "start"]
