"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Trash2, Upload, X } from "lucide-react"

export default function TravelForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    // Basic Info
    customerName: "Rahul",
    destination: "Singapore",
    departureFrom: "Kolkata",
    departureDate: "2025-06-09",
    returnDate: "2025-06-15",
    travelers: "4",
    duration: "6 Days 5 Nights",

    // Payment Info
    totalAmount: "900000",
    installment1: "350000",
    installment2: "400000",
    installment3: "150000",

    // Visa Info
    visaType: "Tourist",
    visaValidity: "30 Days",
    processingDate: "2025-06-14",

    // Itinerary Days
    itineraryDays: [
      {
        day: 1,
        date: "27th November",
        title: "Arrival In Singapore & City Exploration",
        image: null,
        imagePreview: null,
        morning: ["Arrive In Singapore. Transfer From Airport To Hotel."],
        afternoon: [
          "Check Into Your Hotel.",
          "Visit Marina Bay Sands Sky Park (2-3 Hours).",
          "Optional: Stroll Along Marina Bay Waterfront Promenade Or Helix Bridge.",
        ],
        evening: ["Explore Gardens By The Bay, Including Super Tree Grove (3-4 Hours)"],
      },
      {
        day: 2,
        date: "28th November",
        title: "Singapore City Tour",
        image: null,
        imagePreview: null,
        morning: ["Breakfast at hotel.", "Visit Merlion Park and Marina Bay."],
        afternoon: ["Lunch at local restaurant.", "Explore Chinatown and Little India.", "Shopping at Orchard Road."],
        evening: ["Dinner cruise along Singapore River.", "Night Safari at Singapore Zoo."],
      },
    ],

    // Flights
    flights: [
      { date: "Thu 10 Jan'24", airline: "Fly Air India", route: "From Delhi (DEL) To Singapore (SIN)." },
      { date: "Thu 15 Jan'24", airline: "Fly Air India", route: "From Singapore (SIN) To Delhi (DEL)." },
    ],

    // Hotels
    hotels: [
      {
        city: "Singapore",
        checkIn: "24/02/2024",
        checkOut: "26/02/2024",
        nights: "2",
        hotelName: "Super Townhouse Oak Vashi Formerly Blue Diamond",
      },
    ],

    // Activities
    activities: [
      {
        city: "Singapore",
        activity: "Marina Bay Sands Sky Park",
        type: "Nature/Sightseeing",
        timeRequired: "2-3 Hours",
      },
      { city: "Singapore", activity: "Gardens By The Bay", type: "Nature/Sightseeing", timeRequired: "3-4 Hours" },
      { city: "Singapore", activity: "Singapore Zoo", type: "Wildlife", timeRequired: "4-5 Hours" },
    ],
  })

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleArrayChange = (arrayName, index, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [arrayName]: prev[arrayName].map((item, i) => (i === index ? { ...item, [field]: value } : item)),
    }))
  }

  const addArrayItem = (arrayName, template) => {
    setFormData((prev) => ({
      ...prev,
      [arrayName]: [...prev[arrayName], template],
    }))
  }

  const removeArrayItem = (arrayName, index) => {
    setFormData((prev) => ({
      ...prev,
      [arrayName]: prev[arrayName].filter((_, i) => i !== index),
    }))
  }

  const handleItineraryChange = (dayIndex, field, value, timeIndex = null) => {
    setFormData((prev) => ({
      ...prev,
      itineraryDays: prev.itineraryDays.map((day, i) => {
        if (i === dayIndex) {
          if (timeIndex !== null) {
            const newTimeSlot = [...day[field]]
            newTimeSlot[timeIndex] = value
            return { ...day, [field]: newTimeSlot }
          }
          return { ...day, [field]: value }
        }
        return day
      }),
    }))
  }

  const handleImageUpload = (dayIndex, event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setFormData((prev) => ({
          ...prev,
          itineraryDays: prev.itineraryDays.map((day, i) =>
            i === dayIndex
              ? {
                  ...day,
                  image: file,
                  imagePreview: e.target.result,
                }
              : day,
          ),
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = (dayIndex) => {
    setFormData((prev) => ({
      ...prev,
      itineraryDays: prev.itineraryDays.map((day, i) =>
        i === dayIndex
          ? {
              ...day,
              image: null,
              imagePreview: null,
            }
          : day,
      ),
    }))
  }

  const addItineraryActivity = (dayIndex, timeSlot) => {
    setFormData((prev) => ({
      ...prev,
      itineraryDays: prev.itineraryDays.map((day, i) =>
        i === dayIndex ? { ...day, [timeSlot]: [...day[timeSlot], ""] } : day,
      ),
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">
              <span className="text-purple-600">vigo</span>
              <span className="text-black">via</span>
              <div className="text-sm text-gray-600 mt-2">Travel Itinerary Generator</div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information */}
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4 text-purple-600">Basic Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Customer Name</label>
                    <input
                      type="text"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
                      value={formData.customerName}
                      onChange={(e) => handleInputChange("customerName", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Destination</label>
                    <input
                      type="text"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
                      value={formData.destination}
                      onChange={(e) => handleInputChange("destination", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Departure From</label>
                    <input
                      type="text"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
                      value={formData.departureFrom}
                      onChange={(e) => handleInputChange("departureFrom", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Departure Date</label>
                    <input
                      type="date"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
                      value={formData.departureDate}
                      onChange={(e) => handleInputChange("departureDate", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Return Date</label>
                    <input
                      type="date"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
                      value={formData.returnDate}
                      onChange={(e) => handleInputChange("returnDate", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Number of Travelers</label>
                    <input
                      type="number"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
                      value={formData.travelers}
                      onChange={(e) => handleInputChange("travelers", e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4 text-purple-600">Payment Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Total Amount (₹)</label>
                    <input
                      type="number"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
                      value={formData.totalAmount}
                      onChange={(e) => handleInputChange("totalAmount", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Installment 1 (₹)</label>
                    <input
                      type="number"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
                      value={formData.installment1}
                      onChange={(e) => handleInputChange("installment1", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Installment 2 (₹)</label>
                    <input
                      type="number"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
                      value={formData.installment2}
                      onChange={(e) => handleInputChange("installment2", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Installment 3 (₹)</label>
                    <input
                      type="number"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
                      value={formData.installment3}
                      onChange={(e) => handleInputChange("installment3", e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Itinerary Days */}
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4 text-purple-600">Daily Itinerary</h3>
                {formData.itineraryDays.map((day, dayIndex) => (
                  <div key={dayIndex} className="mb-6 p-4 border rounded-lg bg-gray-50">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Day {day.day} Date</label>
                        <input
                          type="text"
                          className="w-full p-2 border rounded"
                          value={day.date}
                          onChange={(e) => handleItineraryChange(dayIndex, "date", e.target.value)}
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium mb-2">Day Title</label>
                        <input
                          type="text"
                          className="w-full p-2 border rounded"
                          value={day.title}
                          onChange={(e) => handleItineraryChange(dayIndex, "title", e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Image Upload Section */}
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2">Day {day.day} Image</label>
                      <div className="flex items-center gap-4">
                        {day.imagePreview ? (
                          <div className="relative">
                            <img
                              src={day.imagePreview || "/placeholder.svg"}
                              alt={`Day ${day.day}`}
                              className="w-24 h-24 object-cover rounded-full border-2 border-purple-200"
                            />
                            <button
                              type="button"
                              onClick={() => removeImage(dayIndex)}
                              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ) : (
                          <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center bg-gray-50">
                            <Upload className="w-8 h-8 text-gray-400" />
                          </div>
                        )}
                        <div className="flex-1">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleImageUpload(dayIndex, e)}
                            className="hidden"
                            id={`image-upload-${dayIndex}`}
                          />
                          <label
                            htmlFor={`image-upload-${dayIndex}`}
                            className="cursor-pointer bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 inline-flex items-center gap-2"
                          >
                            <Upload className="w-4 h-4" />
                            {day.imagePreview ? "Change Image" : "Upload Image"}
                          </label>
                          <p className="text-xs text-gray-500 mt-1">
                            Upload an image that represents this day's activities
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Morning, Afternoon, Evening */}
                    {["morning", "afternoon", "evening"].map((timeSlot) => (
                      <div key={timeSlot} className="mb-4">
                        <label className="block text-sm font-medium mb-2 capitalize">{timeSlot} Activities</label>
                        {day[timeSlot].map((activity, actIndex) => (
                          <div key={actIndex} className="flex gap-2 mb-2">
                            <input
                              type="text"
                              className="flex-1 p-2 border rounded"
                              value={activity}
                              onChange={(e) => handleItineraryChange(dayIndex, timeSlot, e.target.value, actIndex)}
                              placeholder={`${timeSlot} activity ${actIndex + 1}`}
                            />
                            {day[timeSlot].length > 1 && (
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                  const newActivities = day[timeSlot].filter((_, i) => i !== actIndex)
                                  handleItineraryChange(dayIndex, timeSlot, newActivities)
                                }}
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            )}
                          </div>
                        ))}
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => addItineraryActivity(dayIndex, timeSlot)}
                        >
                          <Plus className="w-4 h-4 mr-1" /> Add Activity
                        </Button>
                      </div>
                    ))}
                  </div>
                ))}

                <Button
                  type="button"
                  onClick={() =>
                    addArrayItem("itineraryDays", {
                      day: formData.itineraryDays.length + 1,
                      date: "",
                      title: "",
                      image: null,
                      imagePreview: null,
                      morning: [""],
                      afternoon: [""],
                      evening: [""],
                    })
                  }
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  <Plus className="w-4 h-4 mr-2" /> Add Day
                </Button>
              </div>

              {/* Activities */}
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4 text-purple-600">Activities</h3>
                {formData.activities.map((activity, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 p-4 border rounded-lg">
                    <input
                      type="text"
                      placeholder="City"
                      className="p-2 border rounded"
                      value={activity.city}
                      onChange={(e) => handleArrayChange("activities", index, "city", e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Activity"
                      className="p-2 border rounded"
                      value={activity.activity}
                      onChange={(e) => handleArrayChange("activities", index, "activity", e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Type"
                      className="p-2 border rounded"
                      value={activity.type}
                      onChange={(e) => handleArrayChange("activities", index, "type", e.target.value)}
                    />
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Time Required"
                        className="flex-1 p-2 border rounded"
                        value={activity.timeRequired}
                        onChange={(e) => handleArrayChange("activities", index, "timeRequired", e.target.value)}
                      />
                      <Button type="button" variant="outline" onClick={() => removeArrayItem("activities", index)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
                <Button
                  type="button"
                  onClick={() => addArrayItem("activities", { city: "", activity: "", type: "", timeRequired: "" })}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  <Plus className="w-4 h-4 mr-2" /> Add Activity
                </Button>
              </div>

              {/* Generate PDF Button */}
              <div className="text-center pt-6">
                <Button type="submit" className="bg-purple-600 hover:bg-purple-700 px-12 py-4 text-lg font-semibold">
                  Generate PDF
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
