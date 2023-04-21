FROM node:lts-alpine

ENV PORT=8000

WORKDIR /home/app/payment
COPY . .
VOLUME [ "/home/app/payment" ]
EXPOSE ${PORT}
CMD [ "npm", "run", "start" ]