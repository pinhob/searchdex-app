FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

# Install dependencies and Expo CLI globally
RUN npm install
RUN npm install -g expo-cli

COPY . .

# Expose ports - default Expo ports for the dev server, app connection, and dev tools
EXPOSE 8081 19000 19001 19002

# Set environment variables to enable proper network access
ENV REACT_NATIVE_PACKAGER_HOSTNAME="0.0.0.0"
ENV EXPO_DEVTOOLS_LISTEN_ADDRESS="0.0.0.0"

# Start Expo in development mode with host option to make it accessible outside container
CMD ["expo", "start", "--host", "0.0.0.0", "--android", "--dev", "true", "--minify", "false"]
