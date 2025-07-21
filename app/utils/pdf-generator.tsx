// --- helper to load html2pdf globally via <script> ---
const loadHtml2Pdf = (): Promise<any> =>
  new Promise((resolve, reject) => {
    // already loaded?
    if (typeof window !== "undefined" && (window as any).html2pdf) {
      return resolve((window as any).html2pdf)
    }

    const script = document.createElement("script")
    script.src = "https://cdn.jsdelivr.net/npm/html2pdf.js@0.10.1/dist/html2pdf.bundle.min.js"
    script.async = true
    script.onload = () => {
      const lib = (window as any).html2pdf
      return typeof lib === "function" ? resolve(lib) : reject(new Error("html2pdf not found on window"))
    }
    script.onerror = () => reject(new Error("Failed to load the html2pdf bundle"))
    document.head.appendChild(script)
  })

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

export const generatePDF = async (data) => {
  const html2pdfFactory = await loadHtml2Pdf()

  // Get the exact preview element and clone it
  const previewElement = document.getElementById("pdf-content")
  if (!previewElement) {
    throw new Error("Preview element not found")
  }

  // Clone the element to avoid modifying the original
  const clonedElement = previewElement.cloneNode(true) as HTMLElement

  try {
    // Generate PDF with the exact same element
    const opt = {
      margin: [5, 5, 5, 5],
      filename: `${data.customerName}_${data.destination}_Itinerary.pdf`,
      image: {
        type: "jpeg",
        quality: 0.98,
      },
      html2canvas: {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
        letterRendering: true,
        logging: false,
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
      },
      pagebreak: {
        mode: ["avoid-all", "css"],
      },
    }

    await html2pdfFactory().set(opt).from(clonedElement).save()
  } catch (error) {
    console.error("PDF generation error:", error)
    throw error
  }
}
