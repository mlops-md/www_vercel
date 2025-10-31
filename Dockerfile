FROM node:20-bullseye-slim AS builder
WORKDIR /app
RUN apt-get update && apt-get install -y python3 build-essential git ca-certificates && rm -rf /var/lib/apt/lists/*
COPY package*.json ./
COPY tsconfig.json ./
COPY next.config.js ./
COPY tailwind.config.js ./
COPY postcss.config.js ./
RUN npm install
COPY . .
RUN npm run build
FROM node:20-bullseye-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
EXPOSE 3000
CMD ["npm", "start"]
