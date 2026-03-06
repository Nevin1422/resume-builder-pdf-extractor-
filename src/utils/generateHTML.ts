export function exportHTML(html:string){

  const blob = new Blob([html],{type:"text/html"})
  const link = document.createElement("a")

  link.href = URL.createObjectURL(blob)
  link.download = "resume.html"
  link.click()
}