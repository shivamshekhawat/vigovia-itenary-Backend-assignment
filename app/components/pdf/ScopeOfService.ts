export const createScopeOfService = (data) => {
  const scopeOfService = document.createElement("div")
  scopeOfService.style.pageBreakInside = "avoid"

  const services = [
    { service: "Flight Tickets And Hotel Vouchers", details: "Delivered 3 Days Post Full Payment" },
    { service: "Web Check-In", details: "Boarding Pass Delivery Via Email/WhatsApp" },
    { service: "Support", details: "Chat Support – Response Time: 4 Hours" },
    { service: "Cancellation Support", details: "Provided" },
    { service: "Trip Support", details: "Response Time: 5 Minutes" },
  ]

  scopeOfService.innerHTML = `
    <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 16px;">
      Scope Of <span style="color: #9333ea;">Service</span>
    </h2>
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr style="background: #6b21a8; color: white;">
            <th style="padding: 12px 16px; text-align: left; border-radius: 8px 0 0 8px;">Service</th>
            <th style="padding: 12px 16px; text-align: left; border-radius: 0 8px 8px 0;">Details</th>
          </tr>
        </thead>
        <tbody>
          ${services
            .map(
              (service) => `
            <tr style="background: #f3e8ff; border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 12px 16px; font-weight: 500;">${service.service}</td>
              <td style="padding: 12px 16px;">${service.details}</td>
            </tr>
          `,
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `

  return scopeOfService
}
