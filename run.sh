#!/bin/bash

# Run script for Itinerary Generator API

echo "🚀 Starting Itinerary Generator API..."

# Check if binary exists
if [ ! -f "bin/main" ]; then
    echo "❌ Binary not found. Please run ./build.sh first"
    exit 1
fi

# Create pdfs directory if it doesn't exist
mkdir -p pdfs

# Start the server
echo "🌐 Starting server on http://localhost:8080"
echo "📋 Health check: http://localhost:8080/health"
echo "📋 API endpoint: http://localhost:8080/api/generate-itinerary"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

./bin/main
