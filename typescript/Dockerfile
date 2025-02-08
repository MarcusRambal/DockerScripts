FROM node:18
WORKDIR /app
COPY app/typescript ./typescript 
WORKDIR /app/typescript 
RUN npm install
RUN npm run build
CMD ["node", "dist/main.js"]
