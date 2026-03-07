"use client"

import { useState } from "react"
import ResumeForm from "@/components/ResumeForm"
import Template1 from "@/components/templates/Template1"
import Template2 from "@/components/templates/Template2"
import { ResumeData } from "@/types/resume"
import { generatePDF } from "@/utils/generatePDF"

export default function Page(){

  const [resume,setResume] = useState<ResumeData | null>(null)
  const [template,setTemplate] = useState("template1")

  return(
    <div className="flex gap-10 p-10">

      <div className="flex flex-col gap-4">

        {/* Resume Form */}
        <ResumeForm setResume={setResume}/>

        {/* Template Selector */}

        <div className="flex flex-col gap-2">

          <label className="font-semibold">
            Choose Template
          </label>

          <select
            className="border p-2"
            value={template}
            onChange={(e)=>setTemplate(e.target.value)}
          >
            <option value="template1">Template 1</option>
            <option value="template2">Template 2</option>
          </select>

        </div>

        {/* Export Button */}

        {resume && (
          <button
            onClick={() => generatePDF("resume")}
            className="mt-2 bg-blue-600 text-white px-4 py-2"
          >
            Export PDF
          </button>
        )}

      </div>

      {/* Resume Preview */}

      {resume && template === "template1" && (
        <Template1 data={resume}/>
      )}

      {resume && template === "template2" && (
        <Template2 data={resume}/>
      )}

    </div>
  )
}