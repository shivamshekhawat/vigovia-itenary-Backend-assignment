import { formatDate } from "../../utils/formatters"

export const createTripDetails = (data) => {
  const tripDetails = document.createElement("div")
  tripDetails.style.cssText = `
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 15px;
    margin: 20px 0;
    background: white;
    page-break-inside: avoid;
  `

  tripDetails.innerHTML = `
    <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 15px; font-size: 13px;">
      <div>
        <div style="font-weight: 600; color: #374151; margin-bottom: 5px;">Departure From</div>
        <div style="color: #000;">${data.departureFrom}</div>
      </div>
      <div>
        <div style="font-weight: 600; color: #374151; margin-bottom: 5px;">Departure</div>
        <div style="color: #000;">${formatDate(data.departureDate)}</div>
      </div>
      <div>
        <div style="font-weight: 600; color: #374151; margin-bottom: 5px;">Arrival</div>
        <div style="color: #000;">${formatDate(data.returnDate)}</div>
      </div>
      <div>
        <div style="font-weight: 600; color: #374151; margin-bottom: 5px;">Destination</div>
        <div style="color: #000;">${data.destination}</div>
      </div>
      <div>
        <div style="font-weight: 600; color: #374151; margin-bottom: 5px;">No. Of Travellers</div>
        <div style="color: #000;">${data.travelers}</div>
      </div>
    </div>
  `

  return tripDetails
}
