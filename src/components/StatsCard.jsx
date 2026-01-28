export default function StatsCard() {
  return (
    <section className="px-24 -mt-20 grid grid-cols-2 gap-20 items-center">
      {/* LEFT LIGHT CARD */}
      <div className="bg-white rounded-2xl p-10 shadow-lg w-[420px]">
        <h3 className="text-5xl font-bold">230+</h3>
        <p className="mt-2 text-gray-500">
          companies that trust us very much
        </p>
      </div>

      {/* RIGHT DARK CARD */}
      <div className="bg-black text-white rounded-2xl p-12 w-[520px] h-[220px] flex items-center justify-center">
        <p className="text-lg font-medium">
          Trusted by global brands
        </p>
      </div>
    </section>
  )
}
