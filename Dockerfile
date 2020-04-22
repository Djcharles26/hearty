FROM node:alpine as builder

WORKDIR '/home/tng'

COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /home/tng/build /usr/share/nginx/html