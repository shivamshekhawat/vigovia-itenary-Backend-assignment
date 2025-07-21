package handlers

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"time"

	"vigovia-itinerary/models"
	"vigovia-itinerary/services"
)


// GenerateItinerary handles the POST /api/generate-itinerary endpoint
func GenerateItinerary(w http.ResponseWriter, r *http.Request) {
	// Set CORS headers for frontend integration
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	w.Header().Set("Content-Type", "application/json")

	// Handle preflight OPTIONS request
	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	}

	// Only allow POST method
	if r.Method != "POST" {
		log.Printf("❌ Invalid method: %s", r.Method)
		sendErrorResponse(w, http.StatusMethodNotAllowed, "Method not allowed", "Only POST method is supported")
		return
	}

	// Parse JSON request body
	var itinerary models.Itinerary
	if err := json.NewDecoder(r.Body).Decode(&itinerary); err != nil {
		log.Printf("❌ JSON parsing error: %v", err)
		sendErrorResponse(w, http.StatusBadRequest, "Invalid JSON", "Failed to parse request body")
		return
	}

	// Validate request data
	if err := itinerary.Validate(); err != nil {
		log.Printf("❌ Validation error: %v", err)
		sendErrorResponse(w, http.StatusBadRequest, "Validation failed", err.Error())
		return
	}

	// Generate unique filename with timestamp
	timestamp := time.Now().Unix()
	filename := fmt.Sprintf("itinerary_%d.pdf", timestamp)
	filePath := fmt.Sprintf("pdfs/%s", filename)

	// Generate PDF using the service
	if err := services.GeneratePDF(&itinerary, filePath); err != nil {
		log.Printf("❌ PDF generation error: %v", err)
		sendErrorResponse(w, http.StatusInternalServerError, "PDF generation failed", err.Error())
		return
	}

	// Create success response
	response := models.ItineraryResponse{
		FilePath: fmt.Sprintf("/pdfs/%s", filename),
	}

	// Send JSON response
	w.WriteHeader(http.StatusOK)
	if jsonData, err := response.ToJSON(); err != nil {
		log.Printf("❌ JSON encoding error: %v", err)
		sendErrorResponse(w, http.StatusInternalServerError, "Response encoding failed", err.Error())
	} else {
		w.Write(jsonData)
		log.Printf("✅ Successfully generated itinerary for %s to %s (File: %s)", 
			itinerary.Name, itinerary.Destination, filename)
	}
}

// HealthCheck handles the GET /health endpoint
func HealthCheck(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write([]byte(`{"status": "healthy", "service": "itinerary-generator", "timestamp": "` + 
		time.Now().Format(time.RFC3339) + `"}`))
}

// sendErrorResponse sends a standardized JSON error response
func sendErrorResponse(w http.ResponseWriter, statusCode int, error string, message string) {
	w.WriteHeader(statusCode)
	errorResp := models.ErrorResponse{
		Error:   error,
		Message: message,
	}
	
	if jsonData, err := errorResp.ToJSON(); err != nil {
		log.Printf("❌ Error encoding error response: %v", err)
		w.Write([]byte(`{"error": "Internal server error", "message": "Failed to encode error response"}`))
	} else {
		w.Write(jsonData)
	}
}
