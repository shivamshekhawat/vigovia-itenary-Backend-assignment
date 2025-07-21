#!/bin/bash

echo "🧪 Testing Go Itinerary Generator API..."

# Test health endpoint
echo "🏥 Testing health endpoint..."
curl -s http://localhost:8080/health

echo ""
echo ""

# Test itinerary generation
echo "📋 Testing itinerary generation..."
curl -X POST http://localhost:8080/api/generate-itinerary \
    -H "Content-Type: application/json" \
    -d '{
        "name": "John Doe",
        "destination": "Singapore",
        "start_date": "2024-06-01",
        "end_date": "2024-06-07"
    }'

echo ""
echo ""
echo "✅ API test completed!"
echo "📁 Check the pdfs/ directory for generated files"
