# ----- Builder Stage -----

# use node instead of nginx (so we can run npm commands)
FROM node:22-alpine AS builder 

# set working directory
WORKDIR /app

# copy package files and install dependencies
COPY package*.json ./
RUN npm install 

# copy source and build
COPY . .
RUN npm run build 

# ---- Development Stage ----
FROM node:22-alpine AS dev
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]


# ---- Production Runtime Stage ----
FROM nginx:alpine AS runtime

# Copy built frontend from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]