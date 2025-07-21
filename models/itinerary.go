package models

import (
	"encoding/json"
	"fmt"
	"time"
)

type Itinerary struct {
	Name        string    `json:"name"`
	Origin      string    `json:"origin"`         // <-- Added
	Destination string    `json:"destination"`
	StartDate   string    `json:"start_date"`
	EndDate     string    `json:"end_date"`
	Days        []DayPlan `json:"days"`           // <-- Added
}

type DayPlan struct {
	Date  string          `json:"date"`
	Items []ItineraryItem `json:"items"`
}

type ItineraryItem struct {
	Time      string `json:"time"`
	Activity  string `json:"activity"`
	Location  string `json:"location"`
	Transport string `json:"transport"`
	Notes     string `json:"notes"`
}

type ItineraryResponse struct {
	FilePath string `json:"file_path"`
}

type ErrorResponse struct {
	Error   string `json:"error"`
	Message string `json:"message"`
}

func (i *Itinerary) Validate() error {
	if i.Name == "" {
		return fmt.Errorf("name is required")
	}
	if i.Origin == "" {
		return fmt.Errorf("origin is required") // <-- Validate origin too
	}
	if i.Destination == "" {
		return fmt.Errorf("destination is required")
	}
	if i.StartDate == "" {
		return fmt.Errorf("start_date is required")
	}
	if i.EndDate == "" {
		return fmt.Errorf("end_date is required")
	}
	if len(i.Days) == 0 {
		return fmt.Errorf("at least one day must be provided") // <-- Validate days
	}

	// Validate date format
	startDate, err := time.Parse("2006-01-02", i.StartDate)
	if err != nil {
		return fmt.Errorf("invalid start_date format, expected YYYY-MM-DD")
	}
	endDate, err := time.Parse("2006-01-02", i.EndDate)
	if err != nil {
		return fmt.Errorf("invalid end_date format, expected YYYY-MM-DD")
	}
	if endDate.Before(startDate) {
		return fmt.Errorf("end_date must be after start_date")
	}
	return nil
}

func (r *ItineraryResponse) ToJSON() ([]byte, error) {
	return json.Marshal(r)
}

func (e *ErrorResponse) ToJSON() ([]byte, error) {
	return json.Marshal(e)
}
