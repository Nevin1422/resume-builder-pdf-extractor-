export function exportTXT(text:string){

  const blob = new Blob([text],{type:"text/plain"})
  const link = document.createElement("a")

  link.href = URL.createObjectURL(blob)
  link.download = "resume.txt"
  link.click()
}