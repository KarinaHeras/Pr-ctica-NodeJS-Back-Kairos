FROM mongo:latest
FROM node

RUN mongod

COPY . .
RUN node ./scripts/import-data.js