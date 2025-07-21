export const createFooter = (data) => {
  const footer = document.createElement("footer")
  footer.style.cssText = `
    background: #f3f4f6;
    margin-top: 40px;
    page-break-inside: avoid;
    width: 100%;
  `

  footer.innerHTML = `
    <!-- Tour Packages -->
    <div style="padding: 20px; text-align: center; background: #f3f4f6;">
      <div style="margin-bottom: 10px; font-size: 12px; color: #6b7280; line-height: 1.5;">
        Bali Tour Packages • Japan Tour Packages • Vietnam Tour Packages • Malaysia Tour Packages • Thailand Tour Packages • Europe Tour Packages • Cultural Tour Packages • Luxury Tour Packages
      </div>
      <div style="font-size: 12px; color: #6b7280; line-height: 1.5;">
        Dubai Tour Packages • Turkey Tour Packages • UAE Tour Packages • Singapore Tour Packages • Australia Tour Packages • South Korea Tour Packages • Honeymoon Tour Packages • Adventure Tour Packages
      </div>
    </div>

    <hr style="border: none; border-top: 1px solid #d1d5db; margin: 0;" />

    <!-- Main Footer -->
    <div style="padding: 20px; background: #f3f4f6;">
      <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; font-size: 12px;">
        <div>
          <h3 style="font-weight: 600; color: #1f2937; margin: 0 0 10px 0; font-size: 13px;">Our offerings</h3>
          <div style="color: #6b7280; line-height: 1.6;">
            Holidays<br>Visa<br>Forex<br>Hotels<br>Flights
          </div>
        </div>
        <div>
          <h3 style="font-weight: 600; color: #1f2937; margin: 0 0 10px 0; font-size: 13px;">Popular destinations</h3>
          <div style="color: #6b7280; line-height: 1.6;">
            Dubai<br>Bali<br>Thailand<br>Singapore<br>Malaysia
          </div>
        </div>
        <div>
          <h3 style="font-weight: 600; color: #1f2937; margin: 0 0 10px 0; font-size: 13px;">Vigovia Specials</h3>
          <div style="color: #6b7280; line-height: 1.6;">
            Featured Experience<br>Group Tours<br>Backpackers Club<br>Offline Events
          </div>
        </div>
        <div>
          <h3 style="font-weight: 600; color: #1f2937; margin: 0 0 10px 0; font-size: 13px;">Company</h3>
          <div style="color: #6b7280; line-height: 1.6;">
            About Us<br>Careers<br>Vigovia Blog<br>Partner Portal<br>Accreditations
          </div>
          <h3 style="font-weight: 600; color: #1f2937; margin: 15px 0 10px 0; font-size: 13px;">More</h3>
          <div style="color: #6b7280; line-height: 1.6;">
            Investor Relations<br>Forex<br>FAQs<br>Domestic Holidays
          </div>
        </div>
        <div>
          <div style="background: #6b21a8; color: white; padding: 8px 10px; border-radius: 6px; text-align: center; margin-bottom: 15px;">
            <div style="font-size: 11px; font-weight: 500;">Need Help? Call us</div>
            <div style="font-weight: bold; font-size: 13px;">+91-98xxx54641</div>
          </div>
          <div style="color: #6b7280; font-size: 11px; line-height: 1.4;">
            <strong>Email:</strong> contact@vigovia.com<br><br>
            <strong>Address:</strong> HD-109 Cinnabar Hills, Links Business Park, Bangalore North, Bangalore, Karnataka, India-560071
          </div>
        </div>
      </div>

      <!-- Payment Methods -->
      <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #d1d5db;">
        <div style="color: #1f2937; font-weight: 600; margin-bottom: 8px; font-size: 13px;">Payments</div>
        <div style="display: flex; gap: 15px; font-size: 12px;">
          <div style="color: #6b7280;">Razorpay</div>
          <div style="color: #6b7280;">Stripe</div>
        </div>
      </div>
    </div>

    <!-- Bottom Section -->
    <div style="background: #6b21a8; color: white; padding: 15px 20px;">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div style="display: flex; align-items: center; gap: 20px;">
          <div>
            <div style="font-size: 18px; font-weight: bold;">
              <span style="color: white;">vigo</span><span style="color: #d1d5db;">via</span>
            </div>
            <div style="font-size: 10px; color: #d1d5db;">PLAN.PACK.GO</div>
          </div>
          <div style="font-size: 11px; color: #d1d5db;">
            © 2025 Vigovia Travel Technologies (P) Ltd. All rights reserved.
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 15px;">
          <!-- Social Media Icons Placeholder -->
          <div style="display: flex; gap: 6px;">
            <div style="width: 24px; height: 24px; background: white; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
              <div style="width: 12px; height: 12px; background: #6b21a8; border-radius: 2px;"></div>
            </div>
            <div style="width: 24px; height: 24px; background: white; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
              <div style="width: 12px; height: 12px; background: #6b21a8; border-radius: 2px;"></div>
            </div>
            <div style="width: 24px; height: 24px; background: white; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
              <div style="width: 12px; height: 12px; background: #6b21a8; border-radius: 2px;"></div>
            </div>
            <div style="width: 24px; height: 24px; background: white; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
              <div style="width: 12px; height: 12px; background: #6b21a8; border-radius: 2px;"></div>
            </div>
          </div>
          <!-- Legal Links -->
          <div style="font-size: 11px; color: #d1d5db;">
            Privacy policy • Legal notice • Accessibility
          </div>
        </div>
      </div>
    </div>
  `

  return footer
}
