#!/bin/bash

# Docker run script for Itinerary Generator API

echo "🐳 Running Itinerary Generator API with Docker..."

# Stop and remove existing container if it exists
echo "🧹 Cleaning up existing containers..."
docker stop itinerary-api 2>/dev/null || true
docker rm itinerary-api 2>/dev/null || true

# Create pdfs directory for volume mount
mkdir -p pdfs

# Run the container
echo "🚀 Starting Docker container..."
docker run -d \
    --name itinerary-api \
    -p 8080:8080 \
    -v $(pwd)/pdfs:/root/pdfs \
    --restart unless-stopped \
    go-itinerary-api:latest

if [ $? -eq 0 ]; then
    echo "✅ Container started successfully!"
    echo ""
    echo "📋 Container name: itinerary-api"
    echo "🌐 API URL: http://localhost:8080"
    echo "🏥 Health check: http://localhost:8080/health"
    echo "📁 PDFs saved to: $(pwd)/pdfs"
    echo ""
    echo "Useful commands:"
    echo "  • View logs: docker logs -f itinerary-api"
    echo "  • Stop container: docker stop itinerary-api"
    echo "  • Remove container: docker rm itinerary-api"
else
    echo "❌ Failed to start container!"
    exit 1
fi
