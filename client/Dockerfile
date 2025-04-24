# Base image
FROM node:22.14.0 as builder

# Set working directory
WORKDIR /client

# Copy files and install deps
COPY client/package*.json ./
RUN npm install

# Copy the rest and build
COPY client/ /client/
RUN npm run build

## Serve using a simple static server
#RUN npm install -g serve
#CMD ["serve", "-s", "build", "-l", "3000"]

# Expose the port
#EXPOSE 3000
## Run the app
#CMD ["npm", "start"]

# Run Vite dev server
#CMD ["npm", "run", "dev", "--", "--host"]

# Stage 2: Serve with Nginx
FROM nginx:alpine
COPY --from=builder /client/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
