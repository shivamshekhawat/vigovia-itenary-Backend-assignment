export const createFlightSummary = (data) => {
  const flightSummary = document.createElement("div")
  flightSummary.style.pageBreakInside = "avoid"

  flightSummary.innerHTML = `
    <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 16px;">
      Flight <span style="color: #9333ea;">Summary</span>
    </h2>
    <div style="display: flex; flex-direction: column; gap: 12px;">
      ${data.flights
        .map(
          (flight) => `
        <div style="display: flex; align-items: center; border: 1px solid #e5e7eb; border-radius: 8px;">
          <div style="background: #f3e8ff; padding: 12px 16px; border-radius: 8px 0 0 8px;">
            <div style="font-size: 14px; font-weight: 500;">${flight.date}</div>
          </div>
          <div style="flex: 1; padding: 12px 16px;">
            <div style="font-weight: 600;">${flight.airline}</div>
            <div style="color: #6b7280; font-size: 14px;">${flight.route}</div>
          </div>
        </div>
      `,
        )
        .join("")}
    </div>
    <div style="font-size: 12px; color: #6b7280; margin-top: 12px;">
      Note: All Flights Include Meals, Seat Choice (Excluding XL), And 20kg/25Kg Checked Baggage
    </div>
  `

  return flightSummary
}
