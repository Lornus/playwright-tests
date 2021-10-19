FROM node
FROM mcr.microsoft.com/playwright:v1.6.2-focal


WORKDIR /app

COPY package-lock.json /app
COPY package.json /app

RUN npm ci

RUN npx playwright install


COPY . .

CMD ["npm", "run", "ui-playground-tests-headless"]

