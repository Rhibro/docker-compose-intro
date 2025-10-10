# # Step 1: Use an official Node.js runtime as a parent image
# FROM node:20-alpine

# # Step 2: Set the working directory in the container
# WORKDIR /usr/src/app

# # Step 3: Copy package.json and package-lock.json
# COPY package*.json ./

# # Step 4: Install dependencies
# RUN npm install

# # Step 5: Copy the rest of your application code
# COPY . .

# # Step 6: Expose port 3000 (or your application's port)
# EXPOSE 3000

# # Step 7: Define the command to run your app
# CMD ["npm", "start"]

# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build  # if you have a build step

# Stage 2: Production
FROM node:20-alpine
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app ./
EXPOSE 3000
CMD ["npm", "start"]