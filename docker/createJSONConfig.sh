#!/bin/sh

# Creates the JSON config based on environment variables
echo "{
  \"API_BASE_URL\": \"${API_BASE_URL}\",
  \"MOCK_API\": \"${MOCK_API}\"
}" | jq '.' > config.json

# This will exec the CMD from your Dockerfile, i.e. "npm start"
exec "$@"