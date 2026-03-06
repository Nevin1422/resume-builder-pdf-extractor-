export interface Education {
  school: string
  degree: string
  startYear: string
  endYear: string
  description: string
}

export interface Experience {
  company: string
  role: string
  startYear: string
  endYear: string
  description: string
}

export interface Reference {
  name: string
  role: string
  phone: string
  email: string
}

export interface ResumeData {
  name: string
  role: string

  phone: string
  email: string
  address: string

  about: string

  skills: string[]

  education: Education[]

  experience: Experience[]

  references: Reference[]
}