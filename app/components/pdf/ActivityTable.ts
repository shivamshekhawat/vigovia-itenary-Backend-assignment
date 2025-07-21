export const createActivityTable = (data) => {
  const activityTable = document.createElement("div")
  activityTable.style.pageBreakInside = "avoid"

  // Use provided activities or default data
  const displayActivities =
    data.activities.length > 0 && data.activities[0].city
      ? data.activities
      : Array(16).fill({
          city: "Rio De Janeiro",
          activity: "Sydney Harbour Cruise & Taronga Zoo",
          type: "Airlines Standard",
          timeRequired: "2-3 Hours",
        })

  // First activity has different type if using default data
  if (displayActivities.length > 0 && !data.activities.length) {
    displayActivities[0] = { ...displayActivities[0], type: "Nature/Sightseeing" }
  }

  activityTable.innerHTML = `
    <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 16px;">
      Activity <span style="color: #9333ea;">Table</span>
    </h2>
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr style="background: #6b21a8; color: white;">
            <th style="padding: 12px 16px; text-align: left; border-radius: 8px 0 0 0;">City</th>
            <th style="padding: 12px 16px; text-align: left;">Activity</th>
            <th style="padding: 12px 16px; text-align: left;">Type</th>
            <th style="padding: 12px 16px; text-align: left; border-radius: 0 8px 0 0;">Time Required</th>
          </tr>
        </thead>
        <tbody>
          ${displayActivities
            .map(
              (activity) => `
            <tr style="background: #f3e8ff; border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 12px 16px;">${activity.city}</td>
              <td style="padding: 12px 16px;">${activity.activity}</td>
              <td style="padding: 12px 16px;">${activity.type}</td>
              <td style="padding: 12px 16px;">${activity.timeRequired}</td>
            </tr>
          `,
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `

  return activityTable
}
