import { ResumeData } from "@/types/resume"

export default function Template1({ data }: { data: ResumeData }) {

  return (

    <div id="resume" className="w-[794px] mx-auto bg-white p-6">

      <div className="border border-gray-400 p-10 font-sans text-black">

        {/* HEADER */}

        <div className="text-center border-b pb-6">
          <h1 className="text-5xl font-bold tracking-wide">
            {data.name}
          </h1>

          <p className="text-lg tracking-[3px] text-gray-600 mt-2">
            {data.role}
          </p>
        </div>

        {/* CONTACT */}

        <div className="flex justify-between mt-6 text-sm border-b pb-4">
          <p>📞 {data.phone}</p>
          <p>📍 {data.address}</p>
          <p>✉ {data.email}</p>
        </div>

        {/* ABOUT */}

        <section className="mt-8">
          <h2 className="text-xl font-bold border-b pb-2">
            ABOUT ME
          </h2>

          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            {data.about}
          </p>
        </section>

        {/* EDUCATION */}

        <section className="mt-8">

          <h2 className="text-xl font-bold border-b pb-2">
            EDUCATION
          </h2>

          {data.education.map((edu, index) => (

            <div
              key={index}
              className="grid grid-cols-3 gap-4 text-sm mt-4"
            >

              <div>
                <p className="font-semibold">
                  {edu.startYear} - {edu.endYear}
                </p>

                <p className="text-gray-600">
                  {edu.school}
                </p>
              </div>

              <div className="col-span-2">
                <p className="font-semibold">
                  {edu.degree}
                </p>
              </div>

            </div>

          ))}

        </section>

        {/* EXPERIENCE */}

        <section className="mt-8">

          <h2 className="text-xl font-bold border-b pb-2">
            EXPERIENCE
          </h2>

          {data.experience.map((exp, index) => (

            <div
              key={index}
              className="grid grid-cols-3 gap-4 text-sm mt-4"
            >

              <div>
                <p className="font-semibold">
                  {exp.startYear} - {exp.endYear}
                </p>

                <p className="text-gray-600">
                  {exp.company}
                </p>
              </div>

              <div className="col-span-2">

                <p className="font-semibold">
                  {exp.role}
                </p>

                <p className="text-gray-600">
                  {exp.description}
                </p>

              </div>

            </div>

          ))}

        </section>

        {/* SKILLS */}

        <section className="mt-8">

          <h2 className="text-xl font-bold border-b pb-2">
            SKILLS
          </h2>

          <div className="grid grid-cols-3 gap-2 mt-4 text-sm">

            {data.skills.map((skill, index) => (
              <p key={index}>• {skill}</p>
            ))}

          </div>

        </section>

        {/* REFERENCES */}

        <section className="mt-8">

          <h2 className="text-xl font-bold border-b pb-2">
            REFERENCES
          </h2>

          <div className="grid grid-cols-2 gap-6 mt-4 text-sm">

            {data.references.map((ref, index) => (

              <div key={index}>

                <p className="font-semibold">
                  {ref.name}
                </p>

                <p className="text-gray-600">
                  {ref.role}
                </p>

                <p>
                  Phone: {ref.phone}
                </p>

                <p>
                  Email: {ref.email}
                </p>

              </div>

            ))}

          </div>

        </section>

      </div>

    </div>

  )
}