# Dockerfile for MLOps.md — Next.js (App Router)
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files first (for caching deps)
COPY package*.json ./
COPY tsconfig.json ./
COPY next.config.js ./
COPY tailwind.config.js ./
COPY postcss.config.js ./

RUN npm install --frozen-lockfile

# Copy rest of the project
COPY . .

# Build the Next.js app
RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copy build output and necessary files
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["npm", "start"]
