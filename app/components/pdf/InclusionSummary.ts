export const createInclusionSummary = (data) => {
  const inclusionSummary = document.createElement("div")
  inclusionSummary.style.pageBreakInside = "avoid"

  const inclusions = [
    { category: "Flight", count: 2, details: "All Flights Mentioned", status: "Awaiting Confirmation" },
    {
      category: "Tourist Tax",
      count: 2,
      details: "Yotel (Singapore), Oakwood (Sydney), Mercure (Cairns), Novotel (Gold Coast), Holiday Inn (Melbourne)",
      status: "Awaiting Confirmation",
    },
    {
      category: "Hotel",
      count: 2,
      details: "Airport To Hotel - Hotel To Attractions - Day Trips If Any",
      status: "Included",
    },
  ]

  inclusionSummary.innerHTML = `
    <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 16px;">
      Inclusion <span style="color: #9333ea;">Summary</span>
    </h2>
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr style="background: #6b21a8; color: white;">
            <th style="padding: 12px 16px; text-align: left; border-radius: 8px 0 0 0;">Category</th>
            <th style="padding: 12px 16px; text-align: left;">Count</th>
            <th style="padding: 12px 16px; text-align: left;">Details</th>
            <th style="padding: 12px 16px; text-align: left; border-radius: 0 8px 0 0;">Status / Comments</th>
          </tr>
        </thead>
        <tbody>
          ${inclusions
            .map(
              (inclusion) => `
            <tr style="background: #f3e8ff; border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 12px 16px; font-weight: 500;">${inclusion.category}</td>
              <td style="padding: 12px 16px;">${inclusion.count}</td>
              <td style="padding: 12px 16px;">${inclusion.details}</td>
              <td style="padding: 12px 16px;">${inclusion.status}</td>
            </tr>
          `,
            )
            .join("")}
        </tbody>
      </table>
    </div>
    <div style="margin-top: 16px; padding: 12px; background: #f3f4f6; border-radius: 8px;">
      <div style="font-weight: 600;">Transfer Policy(Refundable Upon Claim)</div>
      <div style="font-size: 14px; color: #6b7280;">
        If Any Transfer Is Delayed Beyond 15 Minutes, Customers May Book An App-Based Or Radio Taxi And Claim A Refund For That Specific Leg.
      </div>
    </div>
  `

  return inclusionSummary
}
