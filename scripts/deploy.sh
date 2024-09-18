#!/bin/bash

set -e  # Exit script on any error
set -x  # debugging

# Variables
PROJECT_DIR="/path/to/your/project"  # Determine the direction of your project
GIT_REPO_URL="git@github.com:username/repository.git"  # Your git repository address (using SSH)
BRANCH="main"  # Branch name

# Step 1: Set up SSH agent for Git authentication
echo "Setting up SSH agent..."
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa  # Replace your private key file

# Step 2: Update codebase
echo "Updating codebase..."
if [ -d "$PROJECT_DIR" ]; then
  cd "$PROJECT_DIR"
  git pull origin $BRANCH
else
  git clone $GIT_REPO_URL $PROJECT_DIR
  cd "$PROJECT_DIR"
fi

# Step 3: Remove node_modules and package-lock.json
echo "Removing node_modules and package-lock.json..."
rm -rf node_modules package-lock.json

# Step 4: Install dependencies
echo "Installing dependencies..."
npm install

# Step 5: Build the TypeScript project
echo "Building the project..."
npm run build

# Step 6: Run database migrations (for Prisma)
echo "Running database migrations..."
npx prisma migrate deploy

# Step 7: Restart application (assuming PM2 is used to manage the app)
echo "Restarting the application..."
if pm2 list | grep -q "fastify-app"; then
  pm2 restart fastify-app
else
  pm2 start dist/index.js --name fastify-app
fi

echo "Deployment completed successfully!"
