# ---- Builder/Test Stage ----
FROM node:18 AS builder
WORKDIR /app

# Install ALL dependencies (dev + prod)
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Run tests (optional here, or in tester service)
# RUN npm test


# ---- Runtime Stage ----
FROM node:18-alpine AS runtime
WORKDIR /app

# Install only production deps
COPY package*.json ./
RUN npm install --omit=dev

# Copy only built/needed files from builder
COPY --from=builder /app ./
COPY --from=builder /app/server.js ./server.js
COPY --from=builder /app/app.js ./app.js 
COPY --from=builder /app/db.js ./db.js  

EXPOSE 3000
CMD ["node", "server.js"]
