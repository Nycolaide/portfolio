FROM node:20.16 AS base
WORKDIR /usr/src/app

# install with production (exclude devDependencies)
FROM base AS install
RUN mkdir -p /temp/prod
COPY package*.json yarn.lock /temp/prod/
COPY /static /temp/prod/static
RUN cd /temp/prod && yarn install --frozen-lockfile --production

# copy node_modules from temp directory
# then copy all (non-ignored) project files into the image
FROM base AS prerelease
COPY --from=install /temp/prod/node_modules node_modules
COPY . .
ENV NODE_ENV=production
RUN yarn build

# copy production dependencies and source code into final image
FROM base AS release
COPY --from=install /temp/prod/node_modules node_modules
COPY --from=install /temp/prod/static static
COPY --from=prerelease /usr/src/app/build build
COPY --from=prerelease /usr/src/app/package.json .

# run the app
EXPOSE 3000
CMD [ "node", "build" ]