# Go Itinerary Generator API

A clean and well-structured Golang backend API for generating travel itinerary PDFs.

## 🚀 Quick Start

### Build and Run with Docker
\`\`\`bash
# Build Docker image
docker build -t go-itinerary .

# Run Docker container
docker run -p 8080:8080 go-itinerary
\`\`\`

### Local Development
\`\`\`bash
# Install dependencies
go mod download

# Run the server
go run .
\`\`\`

### Test the API
\`\`\`bash
# Test health endpoint
curl http://localhost:8080/health

# Test itinerary generation
curl -X POST http://localhost:8080/api/generate-itinerary \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","destination":"Singapore","start_date":"2024-06-01","end_date":"2024-06-07"}'
\`\`\`

## 📋 API Endpoints

### Generate Itinerary
- **URL**: \`POST /api/generate-itinerary\`
- **Input**: JSON with name, destination, start_date, end_date
- **Output**: \`{"file_path": "/pdfs/itinerary_timestamp.pdf"}\`

### Health Check
- **URL**: \`GET /health\`
- **Output**: \`{"status": "healthy"}\`

## 📁 Project Structure

\`\`\`
itinerary-generator/
├── main.go                 # Entry point
├── handlers/
│   └── itinerary.go       # HTTP handlers
├── models/
│   └── itinerary.go       # Data models
├── services/
│   └── pdf.go             # PDF generation
├── pdfs/                  # Generated PDFs
├── Dockerfile             # Docker configuration
└── README.md              # Documentation
\`\`\`

## 🎯 Features

- ✅ Clean Go code structure
- ✅ Professional PDF generation
- ✅ Docker support
- ✅ Error handling
- ✅ CORS enabled
- ✅ Health check endpoint
\`\`\`

## 🚀 Features

- **REST API** with POST endpoint `/api/generate-itinerary`
- **PDF Generation** using gofpdf library
- **Clean Architecture** with organized folder structure
- **Docker Support** with multi-stage builds
- **CORS Enabled** for frontend integration
- **Error Handling** with proper HTTP status codes
- **Health Check** endpoint at `/health`

## 🔧 API Specification

### Generate Itinerary
- **Endpoint**: `POST /api/generate-itinerary`
- **Content-Type**: `application/json`

**Request Body**:
\`\`\`json
{
  "name": "John Doe",
  "destination": "Singapore",
  "start_date": "2024-06-01",
  "end_date": "2024-06-07"
}
\`\`\`

**Success Response** (200):
\`\`\`json
{
  "file_path": "/pdfs/itinerary_1721443221.pdf"
}
\`\`\`

**Error Response** (400/500):
\`\`\`json
{
  "error": "Validation failed",
  "message": "name is required"
}
\`\`\`

### Health Check
- **Endpoint**: `GET /health`
- **Response**: `{"status": "healthy", "service": "itinerary-generator"}`

## 📋 Frontend Integration

The React frontend should call this API when the "Book Now" button is clicked:

\`\`\`javascript
const handleBookNow = async (formData) => {
  try {
    const response = await fetch('http://localhost:8080/api/generate-itinerary', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.customerName,
        destination: formData.destination,
        start_date: formData.departureDate,
        end_date: formData.returnDate,
      }),
    });

    const result = await response.json();
    
    if (response.ok) {
      // Success - redirect to homepage
      window.location.href = '/';
    } else {
      // Handle error
      console.error('Error:', result.message);
    }
  } catch (error) {
    console.error('Network error:', error);
  }
};
\`\`\`

## 🐳 Docker Commands

\`\`\`bash
# Build image
docker build -t go-itinerary .

# Run container
docker run -p 8080:8080 go-itinerary

# Run with volume mount for persistent PDFs
docker run -p 8080:8080 -v $(pwd)/pdfs:/root/pdfs go-itinerary

# Using Docker Compose
docker-compose up --build
\`\`\`

## 📝 PDF Features

Generated PDFs include:
- **Professional Design** with Vigovia branding
- **Trip Details** in formatted boxes
- **Daily Itinerary** with destination-specific activities
- **Proper Formatting** with colors and fonts
- **Generation Metadata** with timestamp

## 🔍 Error Handling

The API handles various error scenarios:
- **Invalid JSON**: 400 Bad Request
- **Missing Fields**: 400 Bad Request with specific field error
- **Invalid Dates**: 400 Bad Request with date format error
- **PDF Generation Failure**: 500 Internal Server Error
- **Method Not Allowed**: 405 for non-POST requests

## 🌐 CORS Support

CORS headers are included for frontend integration:
- `Access-Control-Allow-Origin: *`
- `Access-Control-Allow-Methods: POST, OPTIONS`
- `Access-Control-Allow-Headers: Content-Type`

## 📊 Health Monitoring

- Health check endpoint: `GET /health`
- Docker health check included
- Proper logging with emojis for better visibility

## 🔧 Dependencies

- `github.com/jung-kurt/gofpdf`: PDF generation
- Standard Go library for HTTP server and JSON handling

## 📄 License

MIT License
