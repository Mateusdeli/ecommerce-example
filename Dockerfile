FROM node:lts-alpine
WORKDIR /home/app/payment
COPY . .
VOLUME [ "/home/app/payment" ]
EXPOSE 3000
CMD [ "npm", "run", "start" ]