FROM node:18

WORKDIR /JavaScript

COPY JavaScript/ .

CMD ["node", "main.js"]
