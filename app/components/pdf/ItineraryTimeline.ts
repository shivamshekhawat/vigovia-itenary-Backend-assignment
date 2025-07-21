export const createItineraryTimeline = (data) => {
  const timeline = document.createElement("div")
  timeline.style.display = "flex"
  timeline.style.flexDirection = "column"
  timeline.style.gap = "24px"

  const timelineHTML = data.itineraryDays
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
    .join("")

  timeline.innerHTML = timelineHTML
  return timeline
}
