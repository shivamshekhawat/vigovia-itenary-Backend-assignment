export const createTermsAndConditions = (data) => {
  const termsAndConditions = document.createElement("div")

  termsAndConditions.innerHTML = `
    <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 16px;">
      Terms and <span style="color: #9333ea;">Conditions</span>
    </h2>
    <div style="color: #2563eb; text-decoration: underline; cursor: pointer;">View all terms and conditions</div>
  `

  return termsAndConditions
}
