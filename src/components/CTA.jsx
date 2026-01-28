import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="mx-auto max-w-[1440px] px-24 pt-24 ">
      <div className="relative rounded-[32px] overflow-hidden px-16 py-16 text-white">

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/beautiful-stylish-black-background-with-pleats-drapes-swirls_158469-2524.jpg?semt=ais_hybrid&w=740&q=80')" }}
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/70" />

        {/* CONTENT */}
        <div className="relative z-10 flex items-center justify-between">
          <h2 className="text-[40px] font-semibold">
            Ready to work with us ?
          </h2>

          <button className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full text-sm font-medium">
            Get Started
            <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
              <ArrowRight size={14} />
            </span>
          </button>
        </div>

      </div>
    </section>
  )
}
