# FROM nginx:alpine

# COPY dist /usr/share/nginx/html

# EXPOSE 80

# use node instead of nginx (so we can run npm commands)
FROM node:22-alpine

# set working directory
WORKDIR /app

# copy package files and install dependencies
COPY package*.json ./
RUN npm install 

# copy the rest of the project files
COPY . .

# expose the dev server port (default is 5173)
EXPOSE 5173

# start the dev server
CMD ["npm", "run", "dev", "--", "--host"]