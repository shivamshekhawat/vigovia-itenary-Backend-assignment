export const createHotelBookings = (data) => {
  const hotelBookings = document.createElement("div")
  hotelBookings.style.pageBreakInside = "avoid"

  hotelBookings.innerHTML = `
    <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 16px;">
      Hotel <span style="color: #9333ea;">Bookings</span>
    </h2>
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr style="background: #6b21a8; color: white;">
            <th style="padding: 12px 16px; text-align: left; border-radius: 8px 0 0 8px;">City</th>
            <th style="padding: 12px 16px; text-align: left;">Check In</th>
            <th style="padding: 12px 16px; text-align: left;">Check Out</th>
            <th style="padding: 12px 16px; text-align: left;">Nights</th>
            <th style="padding: 12px 16px; text-align: left; border-radius: 0 8px 8px 0;">Hotel Name</th>
          </tr>
        </thead>
        <tbody>
          ${data.hotels
            .map(
              (booking) => `
            <tr style="background: #f3e8ff; border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 12px 16px;">${booking.city}</td>
              <td style="padding: 12px 16px;">${booking.checkIn}</td>
              <td style="padding: 12px 16px;">${booking.checkOut}</td>
              <td style="padding: 12px 16px;">${booking.nights}</td>
              <td style="padding: 12px 16px;">${booking.hotelName}</td>
            </tr>
          `,
            )
            .join("")}
        </tbody>
      </table>
    </div>
    <div style="font-size: 12px; color: #6b7280; margin-top: 12px;">
      <div>1. All Hotels Are Tentative And Can Be Replaced With Similar.</div>
      <div>2. Breakfast Included For All Hotel Stays.</div>
      <div>3. All Hotels Will Be 4* And Above Category</div>
      <div>4. A maximum occupancy of 2 people/room is allowed in most hotels.</div>
    </div>
  `

  return hotelBookings
}
