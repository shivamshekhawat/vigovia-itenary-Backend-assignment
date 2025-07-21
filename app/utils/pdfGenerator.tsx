export const createPDFContent = (data) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
  }

  // Create the PDF container
  const container = document.createElement("div")
  container.className = "bg-white"
  container.style.minHeight = "297mm"
  container.style.width = "210mm"
  container.style.fontFamily = "Arial, sans-serif"

  container.innerHTML = `
    <!-- Header -->
    <div class="relative">
      <!-- Vigovia Logo -->
      <div style="text-align: center; padding: 24px 0; background: white;">
        <div style="font-size: 32px; font-weight: bold;">
          <span style="color: #9333ea;">vigo</span>
          <span style="color: black;">via</span>
        </div>
        <div style="font-size: 14px; color: #6b7280; margin-top: 4px;">PLAN.PACK.GO</div>
      </div>

      <!-- Gradient Header -->
      <div style="background: linear-gradient(to right, #60a5fa, #a855f7); color: white; padding: 32px; margin: 0 24px; border-radius: 8px;">
        <div style="text-align: center;">
          <h1 style="font-size: 24px; font-weight: bold; margin-bottom: 8px;">Hi, ${data.customerName}!</h1>
          <h2 style="font-size: 32px; font-weight: bold; margin-bottom: 8px;">${data.destination} Itinerary</h2>
          <p style="font-size: 20px; margin-bottom: 24px;">${data.duration}</p>
          
          <!-- Icons placeholder -->
          <div style="display: flex; justify-content: center; gap: 24px;">
            <div style="width: 32px; height: 32px; background: rgba(255,255,255,0.3); border-radius: 4px;"></div>
            <div style="width: 32px; height: 32px; background: rgba(255,255,255,0.3); border-radius: 4px;"></div>
            <div style="width: 32px; height: 32px; background: rgba(255,255,255,0.3); border-radius: 4px;"></div>
            <div style="width: 32px; height: 32px; background: rgba(255,255,255,0.3); border-radius: 4px;"></div>
            <div style="width: 32px; height: 32px; background: rgba(255,255,255,0.3); border-radius: 4px;"></div>
          </div>
        </div>
      </div>
    </div>

    <div style="padding: 24px; display: flex; flex-direction: column; gap: 32px;">
      <!-- Trip Details -->
      <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px;">
        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px; font-size: 14px;">
          <div>
            <div style="font-weight: 600; color: #374151;">Departure From</div>
            <div>${data.departureFrom}</div>
          </div>
          <div>
            <div style="font-weight: 600; color: #374151;">Departure</div>
            <div>${formatDate(data.departureDate)}</div>
          </div>
          <div>
            <div style="font-weight: 600; color: #374151;">Arrival</div>
            <div>${formatDate(data.returnDate)}</div>
          </div>
          <div>
            <div style="font-weight: 600; color: #374151;">Destination</div>
            <div>${data.destination}</div>
          </div>
          <div>
            <div style="font-weight: 600; color: #374151;">No. Of Travellers</div>
            <div>${data.travelers}</div>
          </div>
        </div>
      </div>

      <!-- Itinerary Timeline -->
      <div style="display: flex; flex-direction: column; gap: 24px;">
        ${data.itineraryDays
          .map(
            (day, index) => `
          <div style="display: flex; gap: 16px; align-items: flex-start;">
            <!-- Day Badge -->
            <div style="flex-shrink: 0;">
              <div style="background: #6b21a8; color: white; border-radius: 24px; width: 80px; height: 192px; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                <div style="font-size: 14px; font-weight: 500; margin-bottom: 8px;">Day</div>
                <div style="font-size: 36px; font-weight: bold;">${day.day}</div>
              </div>
            </div>

            <!-- Content Box -->
            <div style="flex: 1; border: 1px solid #e5e7eb; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1); background: white;">
              <div style="display: flex; gap: 24px;">
                <!-- Image and Title Section -->
                <div style="flex-shrink: 0; text-align: center;">
                  <div style="width: 96px; height: 96px; border-radius: 50%; overflow: hidden; border: 3px solid #e5e7eb; margin-bottom: 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                    ${
                      day.imagePreview
                        ? `<img src="${day.imagePreview}" alt="Day ${day.day}" style="width: 100%; height: 100%; object-fit: cover;" />`
                        : `<div style="width: 100%; height: 100%; background: linear-gradient(135deg, #60a5fa, #a855f7); display: flex; align-items: center; justify-content: center;">
                        <span style="color: white; font-weight: bold; font-size: 18px;">${day.day}</span>
                      </div>`
                    }
                  </div>
                  <div style="max-width: 96px;">
                    <div style="font-weight: bold; font-size: 14px; color: #1f2937; margin-bottom: 4px;">${day.date}</div>
                    <div style="font-size: 12px; color: #6b7280; line-height: 1.3;">${day.title}</div>
                  </div>
                </div>

                <!-- Timeline -->
                <div style="flex: 1; position: relative;">
                  <!-- Vertical line -->
                  <div style="position: absolute; left: 6px; top: 0; bottom: 0; width: 2px; background: #c084fc;"></div>
                  
                  <div style="display: flex; flex-direction: column; gap: 32px;">
                    <!-- Morning -->
                    <div style="display: flex; gap: 16px; position: relative;">
                      <div style="width: 12px; height: 12px; background: #9333ea; border-radius: 50%; margin-top: 6px; flex-shrink: 0; position: relative; z-index: 10; border: 2px solid white; box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);"></div>
                      <div style="flex: 1;">
                        <div style="font-weight: bold; color: #1f2937; margin-bottom: 8px; font-size: 16px;">Morning</div>
                        <ul style="font-size: 14px; color: #6b7280; margin: 0; padding: 0; list-style: none;">
                          ${day.morning
                            .map(
                              (activity) => `
                            <li style="display: flex; align-items: flex-start; margin-bottom: 4px;">
                              <span style="color: #9333ea; margin-right: 8px;">•</span>
                              <span>${activity}</span>
                            </li>
                          `,
                            )
                            .join("")}
                        </ul>
                      </div>
                    </div>

                    <!-- Afternoon -->
                    <div style="display: flex; gap: 16px; position: relative;">
                      <div style="width: 12px; height: 12px; background: #9333ea; border-radius: 50%; margin-top: 6px; flex-shrink: 0; position: relative; z-index: 10; border: 2px solid white; box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);"></div>
                      <div style="flex: 1;">
                        <div style="font-weight: bold; color: #1f2937; margin-bottom: 8px; font-size: 16px;">Afternoon</div>
                        <ul style="font-size: 14px; color: #6b7280; margin: 0; padding: 0; list-style: none;">
                          ${day.afternoon
                            .map(
                              (activity) => `
                            <li style="display: flex; align-items: flex-start; margin-bottom: 4px;">
                              <span style="color: #9333ea; margin-right: 8px;">•</span>
                              <span>${activity}</span>
                            </li>
                          `,
                            )
                            .join("")}
                        </ul>
                      </div>
                    </div>

                    <!-- Evening -->
                    <div style="display: flex; gap: 16px; position: relative;">
                      <div style="width: 12px; height: 12px; background: #9333ea; border-radius: 50%; margin-top: 6px; flex-shrink: 0; position: relative; z-index: 10; border: 2px solid white; box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);"></div>
                      <div style="flex: 1;">
                        <div style="font-weight: bold; color: #1f2937; margin-bottom: 8px; font-size: 16px;">Evening</div>
                        <ul style="font-size: 14px; color: #6b7280; margin: 0; padding: 0; list-style: none;">
                          ${day.evening
                            .map(
                              (activity) => `
                            <li style="display: flex; align-items: flex-start; margin-bottom: 4px;">
                              <span style="color: #9333ea; margin-right: 8px;">•</span>
                              <span>${activity}</span>
                            </li>
                          `,
                            )
                            .join("")}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `,
          )
          .join("")}
      </div>

      <!-- Flight Summary -->
      <div style="page-break-inside: avoid;">
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
      </div>

      <!-- Payment Plan -->
      <div style="page-break-inside: avoid;">
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
      </div>

      <!-- Call to Action -->
      <div style="text-align: center; margin-top: 32px;">
        <div style="font-size: 32px; font-weight: bold; color: #1f2937; margin-bottom: 16px;">PLAN.PACK.GO!</div>
        <div style="background: #9333ea; color: white; padding: 12px 32px; border-radius: 9999px; font-size: 18px; font-weight: 600; display: inline-block;">Book Now</div>
      </div>
    </div>

    <!-- Footer -->
    <footer style="background: #f3f4f6; margin-top: 32px; page-break-inside: avoid;">
      <!-- Tour Packages -->
      <div style="padding: 24px; text-align: center;">
        <div style="margin-bottom: 12px; font-size: 14px; color: #6b7280;">
          Bali Tour Packages • Japan Tour Packages • Vietnam Tour Packages • Malaysia Tour Packages • Thailand Tour Packages • Europe Tour Packages • Cultural Tour Packages • Luxury Tour Packages
        </div>
        <div style="font-size: 14px; color: #6b7280;">
          Dubai Tour Packages • Turkey Tour Packages • UAE Tour Packages • Singapore Tour Packages • Australia Tour Packages • South Korea Tour Packages • Honeymoon Tour Packages • Adventure Tour Packages
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid #d1d5db;" />

      <!-- Main Footer -->
      <div style="padding: 24px;">
        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 24px; font-size: 14px;">
          <div>
            <h3 style="font-weight: 600; color: #1f2937; margin-bottom: 12px;">Our offerings</h3>
            <div style="color: #6b7280; line-height: 1.8;">
              Holidays<br>Visa<br>Forex<br>Hotels<br>Flights
            </div>
          </div>
          <div>
            <h3 style="font-weight: 600; color: #1f2937; margin-bottom: 12px;">Popular destinations</h3>
            <div style="color: #6b7280; line-height: 1.8;">
              Dubai<br>Bali<br>Thailand<br>Singapore<br>Malaysia
            </div>
          </div>
          <div>
            <h3 style="font-weight: 600; color: #1f2937; margin-bottom: 12px;">Vigovia Specials</h3>
            <div style="color: #6b7280; line-height: 1.8;">
              Featured Experience<br>Group Tours<br>Backpackers Club<br>Offline Events
            </div>
          </div>
          <div>
            <h3 style="font-weight: 600; color: #1f2937; margin-bottom: 12px;">Company</h3>
            <div style="color: #6b7280; line-height: 1.8;">
              About Us<br>Careers<br>Vigovia Blog<br>Partner Portal<br>Accreditations
            </div>
          </div>
          <div>
            <div style="background: #6b21a8; color: white; padding: 8px 12px; border-radius: 8px; text-align: center; margin-bottom: 16px;">
              <div style="font-size: 12px; font-weight: 500;">Need Help? Call us</div>
              <div style="font-weight: bold; font-size: 14px;">+91-98xxx54641</div>
            </div>
            <div style="color: #6b7280; font-size: 12px;">
              <strong>Email:</strong> contact@vigovia.com<br><br>
              <strong>Address:</strong> HD-109 Cinnabar Hills, Links Business Park, Bangalore North, Bangalore, Karnataka, India-560071
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div style="background: #6b21a8; color: white; padding: 16px 24px;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div style="display: flex; align-items: center; gap: 24px;">
            <div>
              <div style="font-size: 20px; font-weight: bold;">
                <span style="color: white;">vigo</span><span style="color: #d1d5db;">via</span>
              </div>
              <div style="font-size: 12px; color: #d1d5db;">PLAN.PACK.GO</div>
            </div>
            <div style="font-size: 12px; color: #d1d5db;">
              © 2025 Vigovia Travel Technologies (P) Ltd. All rights reserved.
            </div>
          </div>
          <div style="font-size: 12px; color: #d1d5db;">
            Privacy policy • Legal notice • Accessibility
          </div>
        </div>
      </div>
    </footer>
  `

  return container
}
