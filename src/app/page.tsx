"use client"

import { useState } from "react"
import ResumeForm from "@/components/ResumeForm"
import Template1 from "@/components/templates/Template1"
import { ResumeData } from "@/types/resume"
import { generatePDF } from "@/utils/generatePDF"

export default function Page(){

  const [resume,setResume] = useState<ResumeData | null>(null)

  return(
    <div className="flex gap-10 p-10">

      <div>

        <ResumeForm setResume={setResume}/>

        {resume && (
          <button
            onClick={() => generatePDF("resume")}
            className="mt-4 bg-blue-600 text-white px-4 py-2"
          >
            Export PDF
          </button>
        )}

      </div>

      {resume && (
        <Template1 data={resume}/>
      )}

    </div>
  )
}