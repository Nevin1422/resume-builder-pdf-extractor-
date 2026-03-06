"use client"

import { useState } from "react"
import { ResumeData } from "@/types/resume"

type Props = {
  setResume: (data: ResumeData) => void
}

export default function ResumeForm({ setResume }: Props) {

  const [form, setForm] = useState<ResumeData>({
    name: "",
    role: "",
    phone: "",
    email: "",
    address: "",
    about: "",
    skills: [],
    education: [],
    experience: [],
    references: []
  })

  const [skillInput, setSkillInput] = useState("")

  const updateField = (field: keyof ResumeData, value: any) => {
    setForm({ ...form, [field]: value })
  }

  const addSkill = () => {

    if (!skillInput.trim()) return

    setForm({
      ...form,
      skills: [...form.skills, skillInput]
    })

    setSkillInput("")
  }

  const addEducation = () => {
    setForm({
      ...form,
      education: [
        ...form.education,
        { school: "", degree: "", startYear: "", endYear: "" }
      ]
    })
  }

  const addExperience = () => {
    setForm({
      ...form,
      experience: [
        ...form.experience,
        { company: "", role: "", startYear: "", endYear: "", description: "" }
      ]
    })
  }

  const addReference = () => {
    setForm({
      ...form,
      references: [
        ...form.references,
        { name: "", role: "", phone: "", email: "" }
      ]
    })
  }

  const handleSubmit = () => {
    setResume(form)
  }

  return (

    <div className="flex flex-col gap-4 w-[350px]">

      <h2 className="font-bold text-lg">Personal Info</h2>

      <input placeholder="Name" className="border p-2"
        onChange={(e)=>updateField("name",e.target.value)} />

      <input placeholder="Role" className="border p-2"
        onChange={(e)=>updateField("role",e.target.value)} />

      <input placeholder="Phone" className="border p-2"
        onChange={(e)=>updateField("phone",e.target.value)} />

      <input placeholder="Email" className="border p-2"
        onChange={(e)=>updateField("email",e.target.value)} />

      <textarea placeholder="About Me" className="border p-2"
        onChange={(e)=>updateField("about",e.target.value)} />

      {/* SKILLS */}

      <h2 className="font-bold text-lg mt-4">Skills</h2>

      <div className="flex gap-2">

        <input
          placeholder="Enter a skill"
          className="border p-2 flex-1"
          value={skillInput}
          onChange={(e)=>setSkillInput(e.target.value)}
        />

        <button
          onClick={addSkill}
          className="bg-gray-200 px-4"
        >
          Add
        </button>

      </div>

      <div className="flex flex-wrap gap-2">

        {form.skills.map((skill, index)=>(
          <span
            key={index}
            className="bg-gray-200 px-2 py-1 text-sm"
          >
            {skill}
          </span>
        ))}

      </div>

      {/* EDUCATION */}

      <h2 className="font-bold text-lg mt-4">Education</h2>

      <button onClick={addEducation} className="bg-gray-200 p-2">
        Add Education
      </button>

      {form.education.map((edu, i) => (

        <div key={i} className="flex flex-col gap-2 border p-2">

          <input
            placeholder="School"
            className="border p-2"
            onChange={(e)=>{
              const updated=[...form.education]
              updated[i].school=e.target.value
              updateField("education",updated)
            }}
          />

          <input
            placeholder="Degree"
            className="border p-2"
            onChange={(e)=>{
              const updated=[...form.education]
              updated[i].degree=e.target.value
              updateField("education",updated)
            }}
          />

          <input
            placeholder="Start Year"
            className="border p-2"
            onChange={(e)=>{
              const updated=[...form.education]
              updated[i].startYear=e.target.value
              updateField("education",updated)
            }}
          />

          <input
            placeholder="End Year"
            className="border p-2"
            onChange={(e)=>{
              const updated=[...form.education]
              updated[i].endYear=e.target.value
              updateField("education",updated)
            }}
          />

        </div>

      ))}

      {/* EXPERIENCE */}

      <h2 className="font-bold text-lg mt-4">Experience</h2>

      <button onClick={addExperience} className="bg-gray-200 p-2">
        Add Experience
      </button>

      {form.experience.map((exp, i) => (

        <div key={i} className="flex flex-col gap-2 border p-2">

          <input placeholder="Company" className="border p-2"
            onChange={(e)=>{
              const updated=[...form.experience]
              updated[i].company=e.target.value
              updateField("experience",updated)
            }}
          />

          <input placeholder="Role" className="border p-2"
            onChange={(e)=>{
              const updated=[...form.experience]
              updated[i].role=e.target.value
              updateField("experience",updated)
            }}
          />

          <input placeholder="Start Year" className="border p-2"
            onChange={(e)=>{
              const updated=[...form.experience]
              updated[i].startYear=e.target.value
              updateField("experience",updated)
            }}
          />

          <input placeholder="End Year" className="border p-2"
            onChange={(e)=>{
              const updated=[...form.experience]
              updated[i].endYear=e.target.value
              updateField("experience",updated)
            }}
          />

          <textarea placeholder="Description" className="border p-2"
            onChange={(e)=>{
              const updated=[...form.experience]
              updated[i].description=e.target.value
              updateField("experience",updated)
            }}
          />

        </div>

      ))}

      {/* REFERENCES */}

      <h2 className="font-bold text-lg mt-4">References</h2>

      <button onClick={addReference} className="bg-gray-200 p-2">
        Add Reference
      </button>

      {form.references.map((ref,i)=>(

        <div key={i} className="flex flex-col gap-2 border p-2">

          <input placeholder="Name" className="border p-2"
            onChange={(e)=>{
              const updated=[...form.references]
              updated[i].name=e.target.value
              updateField("references",updated)
            }}
          />

          <input placeholder="Role" className="border p-2"
            onChange={(e)=>{
              const updated=[...form.references]
              updated[i].role=e.target.value
              updateField("references",updated)
            }}
          />

          <input placeholder="Phone" className="border p-2"
            onChange={(e)=>{
              const updated=[...form.references]
              updated[i].phone=e.target.value
              updateField("references",updated)
            }}
          />

          <input placeholder="Email" className="border p-2"
            onChange={(e)=>{
              const updated=[...form.references]
              updated[i].email=e.target.value
              updateField("references",updated)
            }}
          />

        </div>

      ))}

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white p-3 mt-4"
      >
        Generate Resume
      </button>

    </div>
  )
}