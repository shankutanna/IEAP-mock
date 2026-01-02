FROM node:18-alpine
WORKDIR /app
COPY package.json ./
RUN npm install --omit=dev
COPY public ./public
COPY server.js ./
EXPOSE 3000
CMD ["npm", "start"]
