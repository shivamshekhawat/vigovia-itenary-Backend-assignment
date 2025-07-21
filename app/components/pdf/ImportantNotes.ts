export const createImportantNotes = (data) => {
  const importantNotes = document.createElement("div")
  importantNotes.style.pageBreakInside = "avoid"

  const notes = [
    {
      point: "Airlines Standard Policy",
      details:
        "In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost.",
    },
    {
      point: "Flight/Hotel Cancellation",
      details:
        "In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost.",
    },
    {
      point: "Trip Insurance",
      details:
        "In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost.",
    },
    {
      point: "Hotel Check-In & Check Out",
      details:
        "In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost.",
    },
    {
      point: "Visa Rejection",
      details:
        "In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost.",
    },
  ]

  importantNotes.innerHTML = `
    <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 16px;">
      Important <span style="color: #9333ea;">Notes</span>
    </h2>
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr style="background: #6b21a8; color: white;">
            <th style="padding: 12px 16px; text-align: left; border-radius: 8px 0 0 8px;">Point</th>
            <th style="padding: 12px 16px; text-align: left; border-radius: 0 8px 8px 0;">Details</th>
          </tr>
        </thead>
        <tbody>
          ${notes
            .map(
              (note) => `
            <tr style="background: #f3e8ff; border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 12px 16px; font-weight: 500;">${note.point}</td>
              <td style="padding: 12px 16px;">${note.details}</td>
            </tr>
          `,
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `

  return importantNotes
}
