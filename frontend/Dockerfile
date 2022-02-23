# For the production environment
# As server will be nginx server, we have to multistep docker builds here.

# The first phase is the builder phase where we do the npm build
# This will create a temproary container.

FROM node:14-alpine as builder
WORKDIR '/usr/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# FROM cooamd separates different phases
# Here we use the nginx base image and copy the generated contents from the builder phase

FROM nginx
COPY --from=builder /usr/app/build /usr/share/nginx//html

# '/usr/share/nginx/html' This is the default path where we have to copy content to host some static contents.
# we don't have to mention start nginx as that's the default command in base image.