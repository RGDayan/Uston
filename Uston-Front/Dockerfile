FROM node:latest as builder

WORKDIR /app

COPY package.json .
RUN npm install --production

# add app
COPY . .
RUN npm run build

FROM nginx:latest

COPY --from=builder /app/build /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
