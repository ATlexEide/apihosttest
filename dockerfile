# Step 1: Use an official Node.js runtime as a base image
FROM node:23

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Step 4: Install the dependencies
RUN npm install

# Step 5: Copy the rest of the application files (your app.js)
COPY . .

# Step 6: Expose the port the app will run on
EXPOSE 8080

# Step 7: Define the command to run the app
CMD ["node", "index.js"]
