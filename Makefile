.PHONY: build run test clean docker-build docker-run docker-compose-up docker-compose-down test-api health setup all quick-start docker-workflow docker-stop docker-logs docker-clean

# Build the application
build:
	go build -o bin/main .

# Run the application
run:
	go run .

# Test the application
test:
	go test ./...

# Clean build artifacts
clean:
	rm -rf bin/
	rm -rf pdfs/*.pdf

# Docker commands
docker-build:
	docker build -t go-itinerary-api:latest .

docker-run:
	docker run -d --name itinerary-api -p 8080:8080 -v $(PWD)/pdfs:/root/pdfs go-itinerary-api:latest

docker-stop:
	docker stop itinerary-api || true
	docker rm itinerary-api || true

docker-logs:
	docker logs -f itinerary-api

docker-clean:
	docker stop itinerary-api || true
	docker rm itinerary-api || true
	docker rmi go-itinerary-api:latest || true

# Build and run with Docker Compose
docker-compose-up:
	docker-compose up --build

# Stop Docker Compose
docker-compose-down:
	docker-compose down

# Test the API
test-api:
	curl -X POST http://localhost:8080/api/generate-itinerary \
		-H "Content-Type: application/json" \
		-d '{"name":"John Doe","destination":"Singapore","start_date":"2024-06-01","end_date":"2024-06-07"}'

# Health check
health:
	curl http://localhost:8080/health

# Setup and scripts
setup:
	chmod +x *.sh
	mkdir -p pdfs bin
	go mod tidy

# Complete workflow
all: setup build docker-build

# Quick start
quick-start: setup build run

# Docker workflow
docker-workflow: docker-clean docker-build docker-run
