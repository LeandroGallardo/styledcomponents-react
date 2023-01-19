FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Expose development port
EXPOSE 3000

# Run the app in development mode
CMD ["npm", "run", "dev"]