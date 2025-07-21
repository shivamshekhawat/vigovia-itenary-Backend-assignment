import { formatCurrency } from "../../utils/formatters"

export const createPaymentPlan = (data) => {
  const paymentPlan = document.createElement("div")
  paymentPlan.style.pageBreakInside = "avoid"

  paymentPlan.innerHTML = `
    <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 16px;">
      Payment <span style="color: #9333ea;">Plan</span>
    </h2>
    
    <div style="margin-bottom: 16px; display: flex; flex-direction: column; gap: 8px;">
      <div style="display: flex; align-items: center; border: 1px solid #e5e7eb; border-radius: 8px;">
        <div style="background: #f3e8ff; padding: 12px 16px; border-radius: 8px 0 0 8px; font-weight: 500;">Total Amount</div>
        <div style="flex: 1; padding: 12px 16px;">
          ${formatCurrency(data.totalAmount)} For ${data.travelers} Pax (Inclusive Of GST)
        </div>
      </div>
      <div style="display: flex; align-items: center; border: 1px solid #e5e7eb; border-radius: 8px;">
        <div style="background: #f3e8ff; padding: 12px 16px; border-radius: 8px 0 0 8px; font-weight: 500;">TCS</div>
        <div style="flex: 1; padding: 12px 16px;">Not Collected</div>
      </div>
    </div>

    <table style="width: 100%; border-collapse: collapse;">
      <thead>
        <tr style="background: #6b21a8; color: white;">
          <th style="padding: 12px 16px; text-align: left; border-radius: 8px 0 0 8px;">Installment</th>
          <th style="padding: 12px 16px; text-align: left;">Amount</th>
          <th style="padding: 12px 16px; text-align: left; border-radius: 0 8px 8px 0;">Due Date</th>
        </tr>
      </thead>
      <tbody>
        <tr style="background: #f3e8ff; border-bottom: 1px solid #e5e7eb;">
          <td style="padding: 12px 16px;">Installment 1</td>
          <td style="padding: 12px 16px;">${formatCurrency(data.installment1)}</td>
          <td style="padding: 12px 16px;">Initial Payment</td>
        </tr>
        <tr style="background: #f3e8ff; border-bottom: 1px solid #e5e7eb;">
          <td style="padding: 12px 16px;">Installment 2</td>
          <td style="padding: 12px 16px;">${formatCurrency(data.installment2)}</td>
          <td style="padding: 12px 16px;">Post Visa Approval</td>
        </tr>
        <tr style="background: #f3e8ff; border-bottom: 1px solid #e5e7eb;">
          <td style="padding: 12px 16px;">Installment 3</td>
          <td style="padding: 12px 16px;">${formatCurrency(data.installment3)}</td>
          <td style="padding: 12px 16px;">20 Days Before Departure</td>
        </tr>
      </tbody>
    </table>
  `

  return paymentPlan
}
