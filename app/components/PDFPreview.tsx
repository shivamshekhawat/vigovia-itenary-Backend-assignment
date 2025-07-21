"use client"

import { formatCurrency, formatDate } from "../utils/formatters"

interface PDFPreviewProps {
  data: any
  onDownload: () => void
}

export default function PDFPreview({ data, onDownload }: PDFPreviewProps) {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Download Button */}
        <div className="text-center mb-8">
          <button
            onClick={onDownload}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg"
          >
            Download PDF
          </button>
          <p className="text-gray-600 mt-2">Preview your itinerary below - PDF will look exactly like this</p>
        </div>

        {/* PDF Preview Container - EXACT REPLICA */}
        <div
          id="pdf-content"
          className="bg-white shadow-2xl mx-auto"
          style={{
            width: "210mm",
            minHeight: "297mm",
            fontFamily: "Arial, sans-serif",
          }}
        >
          {/* Header Section */}
          <div className="text-center py-8 bg-white">
            <div className="text-4xl font-bold mb-2">
              <span className="text-purple-600">vigo</span>
              <span className="text-black">via</span>
            </div>
            <div className="text-sm text-gray-600 font-medium">PLAN.PACK.GO</div>
          </div>

          {/* Hero Section */}
          <div
            className="text-white py-10 px-8 mx-8 rounded-xl text-center relative"
            style={{
              background: "linear-gradient(90deg, #60a5fa 0%, #a855f7 100%)",
            }}
          >
            <h1 className="text-3xl font-bold mb-3">Hi, {data.customerName}!</h1>
            <h2 className="text-4xl font-bold mb-3">{data.destination} Itinerary</h2>
            <p className="text-xl mb-8 font-medium">{data.duration}</p>

            {/* Hero Icons */}
            <div className="flex justify-center gap-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-md border"
                  style={{
                    background: "rgba(255,255,255,0.25)",
                    borderColor: "rgba(255,255,255,0.3)",
                  }}
                />
              ))}
            </div>
          </div>

          <div className="p-8">
            {/* Trip Details */}
            <div
              className="rounded-xl p-6 mb-10"
              style={{
                border: "2px solid #e5e7eb",
                background: "#fafafa",
              }}
            >
              <div className="grid grid-cols-5 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="font-bold text-gray-700 mb-2 text-xs uppercase tracking-wide">Departure From</div>
                  <div className="text-black font-semibold">{data.departureFrom}</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="font-bold text-gray-700 mb-2 text-xs uppercase tracking-wide">Departure</div>
                  <div className="text-black font-semibold">{formatDate(data.departureDate)}</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="font-bold text-gray-700 mb-2 text-xs uppercase tracking-wide">Arrival</div>
                  <div className="text-black font-semibold">{formatDate(data.returnDate)}</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="font-bold text-gray-700 mb-2 text-xs uppercase tracking-wide">Destination</div>
                  <div className="text-black font-semibold">{data.destination}</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="font-bold text-gray-700 mb-2 text-xs uppercase tracking-wide">No. Of Travellers</div>
                  <div className="text-black font-semibold">{data.travelers}</div>
                </div>
              </div>
            </div>

            {/* Itinerary Timeline */}
            <div className="mb-12">
              {data.itineraryDays.map((day, index) => (
                <div key={index} className="flex gap-5 mb-9 items-start">
                  {/* Day Badge */}
                  <div
                    className="text-white rounded-3xl flex flex-col items-center justify-center flex-shrink-0"
                    style={{
                      background: "linear-gradient(180deg, #7c3aed 0%, #6b21a8 100%)",
                      width: "85px",
                      height: "200px",
                      boxShadow: "0 8px 25px rgba(107, 33, 168, 0.3)",
                    }}
                  >
                    <div className="text-sm font-semibold mb-2 opacity-90">Day</div>
                    <div className="text-5xl font-black">{day.day}</div>
                  </div>

                  {/* Day Content */}
                  <div
                    className="flex-1 rounded-2xl p-8 bg-white"
                    style={{
                      border: "2px solid #e5e7eb",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                    }}
                  >
                    {/* Day Header */}
                    <div className="flex gap-6 mb-8 items-start">
                      {/* Day Image */}
                      <div
                        className="rounded-full overflow-hidden flex-shrink-0"
                        style={{
                          width: "100px",
                          height: "100px",
                          border: "4px solid #e5e7eb",
                          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                        }}
                      >
                        {day.imagePreview ? (
                          <img
                            src={day.imagePreview || "/placeholder.svg"}
                            alt={`Day ${day.day}`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div
                            className="w-full h-full flex items-center justify-center text-white font-bold text-xl"
                            style={{
                              background: "linear-gradient(135deg, #60a5fa 0%, #a855f7 100%)",
                            }}
                          >
                            {day.day}
                          </div>
                        )}
                      </div>

                      {/* Day Info */}
                      <div className="flex-1">
                        <div className="font-bold text-lg text-gray-900 mb-2">{day.date}</div>
                        <div className="text-gray-600 text-sm font-medium leading-relaxed">{day.title}</div>
                      </div>
                    </div>

                    {/* Timeline */}
                    <div className="relative pl-6">
                      {/* Vertical Line */}
                      <div
                        className="absolute left-2 top-0 bottom-0 w-1 rounded-full"
                        style={{
                          background: "linear-gradient(180deg, #c084fc 0%, #a855f7 100%)",
                        }}
                      />

                      {/* Morning */}
                      <div className="relative mb-9">
                        <div
                          className="absolute -left-4 top-2 w-4 h-4 bg-purple-600 rounded-full border-3 border-white z-10"
                          style={{
                            boxShadow: "0 2px 8px rgba(147, 51, 234, 0.4)",
                          }}
                        />
                        <div className="font-bold text-lg text-gray-900 mb-3">Morning</div>
                        <ul className="space-y-1.5">
                          {day.morning.map((activity, i) => (
                            <li key={i} className="flex items-start text-gray-700 text-sm leading-relaxed">
                              <span className="text-purple-600 font-bold mr-3 text-base">•</span>
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Afternoon */}
                      <div className="relative mb-9">
                        <div
                          className="absolute -left-4 top-2 w-4 h-4 bg-purple-600 rounded-full border-3 border-white z-10"
                          style={{
                            boxShadow: "0 2px 8px rgba(147, 51, 234, 0.4)",
                          }}
                        />
                        <div className="font-bold text-lg text-gray-900 mb-3">Afternoon</div>
                        <ul className="space-y-1.5">
                          {day.afternoon.map((activity, i) => (
                            <li key={i} className="flex items-start text-gray-700 text-sm leading-relaxed">
                              <span className="text-purple-600 font-bold mr-3 text-base">•</span>
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Evening */}
                      <div className="relative">
                        <div
                          className="absolute -left-4 top-2 w-4 h-4 bg-purple-600 rounded-full border-3 border-white z-10"
                          style={{
                            boxShadow: "0 2px 8px rgba(147, 51, 234, 0.4)",
                          }}
                        />
                        <div className="font-bold text-lg text-gray-900 mb-3">Evening</div>
                        <ul className="space-y-1.5">
                          {day.evening.map((activity, i) => (
                            <li key={i} className="flex items-start text-gray-700 text-sm leading-relaxed">
                              <span className="text-purple-600 font-bold mr-3 text-base">•</span>
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Flight Summary */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Flight <span className="text-purple-600">Summary</span>
              </h2>
              {data.flights.map((flight, index) => (
                <div
                  key={index}
                  className="flex items-center rounded-xl mb-4 overflow-hidden bg-white"
                  style={{
                    border: "2px solid #e5e7eb",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                  }}
                >
                  <div className="bg-purple-100 px-5 py-4 font-semibold text-gray-900 text-center min-w-[140px]">
                    {flight.date}
                  </div>
                  <div className="flex-1 px-5 py-4">
                    <div className="font-bold text-gray-900 mb-1">{flight.airline}</div>
                    <div className="text-gray-600 text-sm font-medium">{flight.route}</div>
                  </div>
                </div>
              ))}
              <div
                className="text-xs text-gray-600 mt-4 p-3 bg-gray-50 rounded-lg italic"
                style={{
                  borderLeft: "4px solid #9333ea",
                }}
              >
                Note: All Flights Include Meals, Seat Choice (Excluding XL), And 20kg/25Kg Checked Baggage
              </div>
            </div>

            {/* Payment Plan */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Payment <span className="text-purple-600">Plan</span>
              </h2>

              <div className="mb-5">
                <div
                  className="flex items-center rounded-xl mb-3 overflow-hidden bg-white"
                  style={{
                    border: "2px solid #e5e7eb",
                  }}
                >
                  <div className="bg-purple-100 px-5 py-4 font-semibold text-gray-900 min-w-[150px]">Total Amount</div>
                  <div className="flex-1 px-5 py-4 font-semibold text-gray-900">
                    {formatCurrency(data.totalAmount)} For {data.travelers} Pax (Inclusive Of GST)
                  </div>
                </div>
              </div>

              <div
                className="rounded-xl overflow-hidden"
                style={{
                  boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                }}
              >
                <table className="w-full">
                  <thead>
                    <tr
                      className="text-white"
                      style={{
                        background: "linear-gradient(90deg, #7c3aed 0%, #6b21a8 100%)",
                      }}
                    >
                      <th className="px-5 py-4 text-left font-bold">Installment</th>
                      <th className="px-5 py-4 text-left font-bold">Amount</th>
                      <th className="px-5 py-4 text-left font-bold">Due Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-purple-100 border-b border-gray-200">
                      <td className="px-5 py-4 font-medium">Installment 1</td>
                      <td className="px-5 py-4 font-medium">{formatCurrency(data.installment1)}</td>
                      <td className="px-5 py-4 font-medium">Initial Payment</td>
                    </tr>
                    <tr className="bg-purple-100 border-b border-gray-200">
                      <td className="px-5 py-4 font-medium">Installment 2</td>
                      <td className="px-5 py-4 font-medium">{formatCurrency(data.installment2)}</td>
                      <td className="px-5 py-4 font-medium">Post Visa Approval</td>
                    </tr>
                    <tr className="bg-purple-100">
                      <td className="px-5 py-4 font-medium">Installment 3</td>
                      <td className="px-5 py-4 font-medium">{formatCurrency(data.installment3)}</td>
                      <td className="px-5 py-4 font-medium">20 Days Before Departure</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center py-12">
              <div className="text-5xl font-black text-gray-900 mb-6 tracking-wide">PLAN.PACK.GO!</div>
              <button
                className="text-white px-10 py-4 rounded-full text-xl font-bold border-none"
                style={{
                  background: "linear-gradient(90deg, #9333ea 0%, #7c3aed 100%)",
                  boxShadow: "0 8px 25px rgba(147, 51, 234, 0.3)",
                }}
              >
                Book Now
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-100 mt-16">
            {/* Tour Packages */}
            <div className="py-6 px-8 text-center bg-gray-100">
              <div className="text-xs text-gray-600 leading-relaxed mb-2 font-medium">
                Bali Tour Packages • Japan Tour Packages • Vietnam Tour Packages • Malaysia Tour Packages • Thailand
                Tour Packages • Europe Tour Packages • Cultural Tour Packages • Luxury Tour Packages
              </div>
              <div className="text-xs text-gray-600 leading-relaxed font-medium">
                Dubai Tour Packages • Turkey Tour Packages • UAE Tour Packages • Singapore Tour Packages • Australia
                Tour Packages • South Korea Tour Packages • Honeymoon Tour Packages • Adventure Tour Packages
              </div>
            </div>

            <hr className="border-gray-300 border-t-2" />

            {/* Footer Content */}
            <div className="p-8 bg-gray-100 grid grid-cols-5 gap-6 text-xs">
              <div>
                <h3 className="font-bold text-gray-900 mb-4 text-sm">Our offerings</h3>
                <div className="text-gray-600 leading-loose font-medium">
                  Holidays
                  <br />
                  Visa
                  <br />
                  Forex
                  <br />
                  Hotels
                  <br />
                  Flights
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-4 text-sm">Popular destinations</h3>
                <div className="text-gray-600 leading-loose font-medium">
                  Dubai
                  <br />
                  Bali
                  <br />
                  Thailand
                  <br />
                  Singapore
                  <br />
                  Malaysia
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-4 text-sm">Vigovia Specials</h3>
                <div className="text-gray-600 leading-loose font-medium">
                  Featured Experience
                  <br />
                  Group Tours
                  <br />
                  Backpackers Club
                  <br />
                  Offline Events
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-4 text-sm">Company</h3>
                <div className="text-gray-600 leading-loose font-medium">
                  About Us
                  <br />
                  Careers
                  <br />
                  Vigovia Blog
                  <br />
                  Partner Portal
                  <br />
                  Accreditations
                </div>
                <h3 className="font-bold text-gray-900 mt-5 mb-4 text-sm">More</h3>
                <div className="text-gray-600 leading-loose font-medium">
                  Investor Relations
                  <br />
                  Forex
                  <br />
                  FAQs
                  <br />
                  Domestic Holidays
                </div>
              </div>
              <div>
                <div
                  className="text-white p-3 rounded-lg text-center mb-5"
                  style={{
                    background: "linear-gradient(135deg, #7c3aed 0%, #6b21a8 100%)",
                    boxShadow: "0 4px 15px rgba(107, 33, 168, 0.3)",
                  }}
                >
                  <div className="text-xs font-semibold mb-1">Need Help? Call us</div>
                  <div className="font-bold text-sm">+91-98xxx54641</div>
                </div>
                <div className="text-gray-600 text-xs leading-tight">
                  <strong>Email:</strong> contact@vigovia.com
                  <br />
                  <br />
                  <strong>Address:</strong> HD-109 Cinnabar Hills, Links Business Park, Bangalore North, Bangalore,
                  Karnataka, India-560071
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-gray-300 px-8">
              <h4 className="text-gray-900 font-bold mb-3 text-sm">Payments</h4>
              <div className="flex gap-5 text-xs text-gray-600">
                <div>Razorpay</div>
                <div>Stripe</div>
              </div>
            </div>

            {/* Footer Bottom */}
            <div
              className="text-white p-5 px-8"
              style={{
                background: "linear-gradient(90deg, #7c3aed 0%, #6b21a8 100%)",
              }}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-6">
                  <div>
                    <div className="text-xl font-bold">
                      <span>vigo</span>
                      <span className="text-gray-300">via</span>
                    </div>
                    <div className="text-xs text-gray-300">PLAN.PACK.GO</div>
                  </div>
                  <div className="text-xs text-gray-300 font-medium">
                    © 2025 Vigovia Travel Technologies (P) Ltd. All rights reserved.
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="flex gap-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-purple-800 rounded-sm" />
                      </div>
                    ))}
                  </div>
                  <div className="text-xs text-gray-300 font-medium">Privacy policy • Legal notice • Accessibility</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
