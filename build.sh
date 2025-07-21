#!/bin/bash

echo "🚀 Building Go Itinerary Generator..."

# Create necessary directories
mkdir -p pdfs

# Build Go application
echo "🔨 Building Go binary..."
go mod tidy
go build -o bin/main .

if [ $? -eq 0 ]; then
    echo "✅ Go application built successfully!"
else
    echo "❌ Go build failed!"
    exit 1
fi

# Build Docker image
echo "🐳 Building Docker image..."
docker build -t go-itinerary .

if [ $? -eq 0 ]; then
    echo "✅ Docker image built successfully!"
    echo "📋 Image: go-itinerary"
    echo ""
    echo "🚀 To run the container:"
    echo "   docker run -p 8080:8080 go-itinerary"
else
    echo "❌ Docker build failed!"
    exit 1
fi

echo "🎉 Build completed successfully!"
