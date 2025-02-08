FROM node:latest
WORKDIR /app
COPY . .
RUN npm install -g typescript
RUN tsc main.ts
CMD ["node", "main.js"]
