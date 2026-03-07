import { ResumeData } from "@/types/resume"

export default function Template2({ data }: { data: ResumeData }) {

  return (

    <div id="resume" className="w-[794px] mx-auto bg-white p-10 font-sans text-gray-800">

      {/* HEADER */}

      <div className="flex items-center gap-6 border-b pb-6">

        <div className="w-28 h-28 bg-gray-200 rounded-full flex items-center justify-center text-sm">
          Photo
        </div>

        <div>

          <h1 className="text-3xl font-bold">
            {data.name}
          </h1>

          <p className="text-lg text-gray-500">
            {data.role}
          </p>

          <div className="mt-3 text-sm grid grid-cols-2 gap-x-10 gap-y-1">

            <p>📞 {data.phone}</p>
            <p>🌐 website.com</p>

            <p>📍 {data.address}</p>
            <p>✉ {data.email}</p>

          </div>

        </div>

      </div>

      {/* MAIN CONTENT */}

      <div className="grid grid-cols-2 gap-10 mt-8">

        {/* LEFT COLUMN */}

        <div className="space-y-8">

          {/* ABOUT */}

          <section>

            <h2 className="font-bold border-b pb-2">
              ABOUT ME
            </h2>

            <p className="text-sm mt-3">
              {data.about}
            </p>

          </section>

          {/* EDUCATION */}

          <section>

            <h2 className="font-bold border-b pb-2">
              EDUCATION
            </h2>

            {data.education.map((edu, index) => (

              <div key={index} className="mt-3 text-sm">

                <p className="font-semibold">
                  {edu.school}
                </p>

                <p className="text-gray-500">
                  {edu.degree}
                </p>

                <p className="text-gray-500">
                  {edu.startYear} - {edu.endYear}
                </p>

              </div>

            ))}

          </section>

          {/* SKILLS */}

          <section>

            <h2 className="font-bold border-b pb-2">
              SKILLS
            </h2>

            <div className="grid grid-cols-2 text-sm mt-3 gap-y-1">

              {data.skills.map((skill, index) => (
                <p key={index}>• {skill}</p>
              ))}

            </div>

          </section>

        </div>

        {/* RIGHT COLUMN */}

        <div className="space-y-8 border-l pl-6">

          {/* EXPERIENCE */}

          <section>

            <h2 className="font-bold border-b pb-2">
              WORK EXPERIENCE
            </h2>

            {data.experience.map((exp, index) => (

              <div key={index} className="mt-4 text-sm">

                <div className="flex justify-between">

                  <p className="font-semibold">
                    {exp.company}
                  </p>

                  <p className="text-gray-500">
                    {exp.startYear} - {exp.endYear}
                  </p>

                </div>

                <p className="text-gray-600">
                  {exp.role}
                </p>

                <p className="text-gray-500 mt-1">
                  {exp.description}
                </p>

              </div>

            ))}

          </section>

          {/* REFERENCES */}

          <section>

            <h2 className="font-bold border-b pb-2">
              REFERENCES
            </h2>

            <div className="grid grid-cols-2 gap-6 mt-4 text-sm">

              {data.references.map((ref, index) => (

                <div key={index}>

                  <p className="font-semibold">
                    {ref.name}
                  </p>

                  <p className="text-gray-500">
                    {ref.role}
                  </p>

                  <p>{ref.phone}</p>

                  <p>{ref.email}</p>

                </div>

              ))}

            </div>

          </section>

        </div>

      </div>

    </div>

  )
}