export async function generatePDF(elementId: string) {

  const element = document.getElementById(elementId)

  if (!element) {
    console.error("Resume element not found")
    return
  }

  const html2pdf = (await import("html2pdf.js")).default

  html2pdf()
    .set({
      margin: 10,
      filename: "resume.pdf",
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
    })
    .from(element)
    .save()
}