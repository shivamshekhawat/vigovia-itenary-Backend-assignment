import { formatDate } from "../../utils/formatters"

export const createVisaDetails = (data) => {
  const visaDetails = document.createElement("div")
  visaDetails.style.pageBreakInside = "avoid"

  visaDetails.innerHTML = `
    <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 16px;">
      Visa <span style="color: #9333ea;">Details</span>
    </h2>
    <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px;">
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;">
        <div>
          <div style="font-weight: 600;">Visa Type :</div>
          <div>${data.visaType}</div>
        </div>
        <div>
          <div style="font-weight: 600;">Validity:</div>
          <div>${data.visaValidity}</div>
        </div>
        <div>
          <div style="font-weight: 600;">Processing Date :</div>
          <div>${formatDate(data.processingDate)}</div>
        </div>
      </div>
    </div>

    <div style="text-align: center; margin-top: 32px;">
      <div style="font-size: 32px; font-weight: bold; color: #1f2937; margin-bottom: 16px;">PLAN.PACK.GO!</div>
      <div style="background: #9333ea; color: white; padding: 12px 32px; border-radius: 9999px; font-size: 18px; font-weight: 600; display: inline-block;">Book Now</div>
    </div>
  `

  return visaDetails
}
