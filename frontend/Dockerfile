# Use Node.js to build the React app
FROM node:16 AS build
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY ./ ./
RUN npm run build  # This will create a production build in the 'build' folder

# Use Nginx to serve the production build
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
