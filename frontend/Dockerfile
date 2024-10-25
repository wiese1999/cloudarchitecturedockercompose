# Use the official Node.js image for build
FROM node:14 AS build

# Set working directory
WORKDIR /app

# Copy the project files
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./

# Install dependencies and build the app
RUN npm install && npm run build

# Use Nginx to serve the app
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80
