#!/bin/bash

# Setup script for Itinerary Generator API

echo "⚙️  Setting up Itinerary Generator API..."

# Check if Go is installed
if ! command -v go &> /dev/null; then
    echo "❌ Go is not installed. Please install Go 1.21 or later"
    echo "💡 Visit: https://golang.org/doc/install"
    exit 1
fi

echo "✅ Go is installed: $(go version)"

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "⚠️  Docker is not installed. Docker features will not be available"
    echo "💡 Visit: https://docs.docker.com/get-docker/"
else
    echo "✅ Docker is installed: $(docker --version)"
fi

# Check if jq is installed (for JSON parsing in tests)
if ! command -v jq &> /dev/null; then
    echo "⚠️  jq is not installed. API tests may not work properly"
    echo "💡 Install with: sudo apt-get install jq (Ubuntu) or brew install jq (macOS)"
else
    echo "✅ jq is installed: $(jq --version)"
fi

# Create necessary directories
echo "📁 Creating project directories..."
mkdir -p pdfs
mkdir -p bin

# Download Go dependencies
echo "📦 Downloading Go dependencies..."
go mod tidy

if [ $? -eq 0 ]; then
    echo "✅ Dependencies downloaded successfully!"
else
    echo "❌ Failed to download dependencies!"
    exit 1
fi

# Make scripts executable
echo "🔧 Making scripts executable..."
chmod +x build.sh
chmod +x run.sh
chmod +x docker-run.sh
chmod +x test-api.sh

echo ""
echo "🎉 Setup completed successfully!"
echo ""
echo "Next steps:"
echo "  1. Build the project: ./build.sh"
echo "  2. Run locally: ./run.sh"
echo "  3. Or run with Docker: ./docker-run.sh"
echo "  4. Test the API: ./test-api.sh"
echo ""
echo "📚 Read README.md for detailed documentation"
