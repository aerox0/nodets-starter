#
FROM node:lts-alpine as builder
RUN apk update

WORKDIR /app
RUN yarn global add turbo
COPY . .
RUN turbo prune --scope=core --docker

#
FROM node:lts-alpine as development
RUN apk update

WORKDIR /app
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/yarn.lock ./yarn.lock
COPY --from=builder /app/out/full/ .
COPY .gitignore .gitignore
COPY turbo.json turbo.json

RUN yarn install
RUN yarn turbo run build --filter=core

#
FROM node:lts-alpine as production
ENV NODE_ENV=production

WORKDIR /app
# RUN addgroup --system --gid 1001 nodets
# RUN adduser --system --uid 1001 nodets
COPY --from=development /app .
# RUN chown -R nodets:nodets ./
# RUN chown -R nodets:nodets ./yarn.lock
# USER nodets
CMD ["node", "apps/core/dist/index.js"]