# Build stage
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine
WORKDIR /app
COPY --from=build /app/build ./build
COPY --from=build /app/server.js ./
COPY --from=build /app/package*.json ./
RUN npm install --production && npm install express
EXPOSE 3000
CMD ["node", "server.js"]
