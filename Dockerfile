# Use the official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the project files to the working directory
COPY . .

# Expose the port the server will be running on
EXPOSE 3000


# Start the server
# Run the command inside the container
CMD ["npm", "start", "node", "index.js"]
