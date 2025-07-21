"use client"
import { useState } from "react"
import TravelForm from "./components/TravelForm"
import PDFPreview from "./components/PDFPreview"
import { generatePDF } from "./utils/pdf-generator"

export default function Home() {
  const [showPreview, setShowPreview] = useState(false)
  const [formData, setFormData] = useState(null)

  const handleFormSubmit = async (data) => {
    setFormData(data)
    setShowPreview(true)
  }

  const handleDownloadPDF = async () => {
    try {
      // Show loading state
      const loadingToast = document.createElement("div")
      loadingToast.className = "fixed top-4 right-4 bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg z-50"
      loadingToast.textContent = "Generating PDF..."
      document.body.appendChild(loadingToast)

      // Generate PDF using the exact same styling as preview
      await generatePDF(formData)

      // Remove loading toast
      document.body.removeChild(loadingToast)

      // Show success message
      const successToast = document.createElement("div")
      successToast.className = "fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50"
      successToast.textContent = "PDF Downloaded Successfully!"
      document.body.appendChild(successToast)

      setTimeout(() => {
        if (document.body.contains(successToast)) {
          document.body.removeChild(successToast)
        }
      }, 3000)
    } catch (error) {
      console.error("PDF generation failed:", error)
      alert("Failed to generate PDF. Please try again.")
    }
  }

  const handleBackToForm = () => {
    setShowPreview(false)
    setFormData(null)
  }

  if (showPreview && formData) {
    return (
      <div>
        <div className="fixed top-4 left-4 z-50">
          <button
            onClick={handleBackToForm}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-semibold"
          >
            ← Back to Form
          </button>
        </div>
        <PDFPreview data={formData} onDownload={handleDownloadPDF} />
      </div>
    )
  }

  return <TravelForm onSubmit={handleFormSubmit} />
}
