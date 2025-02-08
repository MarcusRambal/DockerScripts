FROM node:latest
WORKDIR /app
COPY . /app
RUN npm install -g typescript
CMD ["sh", "-c", "tsc main.ts && node main.js"]
