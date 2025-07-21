export const createHeader = (data) => {
  const header = document.createElement("div")
  header.style.cssText = `
    background: white;
    margin-bottom: 0;
    page-break-inside: avoid;
  `

  header.innerHTML = `
    <!-- Vigovia Logo -->
    <div style="text-align: center; padding: 20px 0; background: white;">
      <div style="font-size: 28px; font-weight: bold; margin-bottom: 5px;">
        <span style="color: #9333ea;">vigo</span>
        <span style="color: black;">via</span>
      </div>
      <div style="font-size: 12px; color: #6b7280;">PLAN.PACK.GO</div>
    </div>

    <!-- Gradient Header -->
    <div style="
      background: linear-gradient(to right, #60a5fa, #a855f7); 
      color: white; 
      padding: 25px; 
      margin: 0 20px; 
      border-radius: 8px;
      text-align: center;
    ">
      <h1 style="font-size: 22px; font-weight: bold; margin: 0 0 8px 0;">Hi, ${data.customerName}!</h1>
      <h2 style="font-size: 28px; font-weight: bold; margin: 0 0 8px 0;">${data.destination} Itinerary</h2>
      <p style="font-size: 18px; margin: 0 0 20px 0;">${data.duration}</p>
      
      <!-- Icons placeholder -->
      <div style="display: flex; justify-content: center; gap: 20px;">
        <div style="width: 28px; height: 28px; background: rgba(255,255,255,0.3); border-radius: 4px;"></div>
        <div style="width: 28px; height: 28px; background: rgba(255,255,255,0.3); border-radius: 4px;"></div>
        <div style="width: 28px; height: 28px; background: rgba(255,255,255,0.3); border-radius: 4px;"></div>
        <div style="width: 28px; height: 28px; background: rgba(255,255,255,0.3); border-radius: 4px;"></div>
        <div style="width: 28px; height: 28px; background: rgba(255,255,255,0.3); border-radius: 4px;"></div>
      </div>
    </div>
  `

  return header
}
