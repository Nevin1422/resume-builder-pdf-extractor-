import { ResumeData } from "@/types/resume"

export default function Template1({ data }: { data: ResumeData }) {

  return (
    <div id="resume" className="bg-white text-black w-[794px] p-12">

      {/* HEADER */}

      <div className="text-center border-b pb-6">

        <h1 className="text-5xl font-bold">
          {data.name}
        </h1>

        <p className="text-lg text-gray-600">
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

        <p className="mt-3 text-gray-700 text-sm">
          {data.about}
        </p>

      </section>

    </div>
  )
}