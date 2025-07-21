package main

import (
	"log"
	"net/http"
	"os"
"vigovia-itinerary/handlers"

)

func main() {
	// Create pdfs directory if it doesn't exist
	if err := os.MkdirAll("pdfs", 0755); err != nil {
		log.Fatal("Failed to create pdfs directory:", err)
	}

	// Setup routes
	http.HandleFunc("/api/generate-itinerary", handlers.GenerateItinerary)
	http.HandleFunc("/health", handlers.HealthCheck)

	// Serve static files from pdfs directory
	http.Handle("/pdfs/", http.StripPrefix("/pdfs/", http.FileServer(http.Dir("pdfs"))))

	log.Println("🚀 Server starting on port 8080...")
	log.Println("📋 API endpoint: http://localhost:8080/api/generate-itinerary")
	log.Println("🏥 Health check: http://localhost:8080/health")

	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal("Server failed to start:", err)
	}
}
