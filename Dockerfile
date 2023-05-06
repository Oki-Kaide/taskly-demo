# Stage 1 - the build process
FROM node:12 as build-deps
WORKDIR /usr/src/app
COPY package.json ./
RUN yarn
COPY . ./
RUN yarn build

# Stage 2 - the production environment
FROM nginx:1.12-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
