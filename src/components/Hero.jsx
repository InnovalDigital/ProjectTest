import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-[1440px] px-24 pt-24 pb-32">
      <div className="grid grid-cols-[1.1fr_0.9fr] gap-20 items-start">
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-[64px] leading-[1.05] font-semibold tracking-tight">
            Stay ahead of the
            <br />
            curve with our
            <br />
            forward-thinking
          </h1>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-gray-600">
            An award-winning SEO agency with disciplines in digital marketing,
            design, and website development. focused on understanding you.
          </p>

          <div className="mt-10 flex items-center gap-8">
            <button className="flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full text-sm font-medium">
              Schedule Call
              <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                →
              </span>
            </button>

            <button className="text-sm font-medium underline underline-offset-4">
              View Case Study
            </button>
          </div>

          {/* BRANDS */}
          <div className="mt-16">
            <p className="text-xs text-gray-500 mb-4">
              Trusted by the world&apos;s biggest brands
            </p>
            <div className="flex items-center gap-8 opacity-70">
              <span className="text-sm">afterpay</span>
              <span className="text-sm">Basecamp</span>
              <span className="text-sm">maze</span>
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL STACK */}
        <div className="relative h-[520px]">
          {/* IMAGE CARD */}

          <div className="w-[360px] h-[260px] overflow-hidden rounded-tr-[140px] rounded-tl-none rounded-br-none rounded-bl-none">
            <div className="hero-image">
              <img
                src="https://img.freepik.com/free-photo/smiling-businesswoman-typing-laptop-sitting-cafe_197531-340.jpg?semt=ais_hybrid&w=740&q=80"
                alt="workspace"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating arrow */}
            <div className="absolute -top-6 left-24 w-16 h-16 bg-black rounded-full flex items-center justify-center z-10">
              <ArrowUpRight className="text-green-400" />
            </div>
          </div>

          {/* STAT CARD */}
          <div className="absolute top-0 right-0 w-[260px] h-[260px] bg-[#F3F3F3] rounded-[28px] p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-5xl font-semibold">230+</h3>
              <p className="mt-3 text-sm text-gray-600 leading-snug">
                some big companies
                <br />
                that we work with,
                <br />
                and trust us very much
              </p>
            </div>
            <div className="w-16 h-[3px] bg-black/20 rounded-full" />
          </div>

          {/* DARK GRAPH CARD */}
          <div className="absolute bottom-0 w-[520px] h-[220px] bg-black rounded-[32px] p-10 text-white">
            <p className="text-xs text-gray-400 mb-4">
              Drive More Traffic and Sales
            </p>

            <div className="flex justify-between items-end h-full">
              <h3 className="text-2xl font-medium leading-snug max-w-[240px]">
                Drive more traffic
                <br />
                and product sales
              </h3>

              <div className="flex items-end gap-4">
                <div className="w-10 h-20 bg-green-300 rounded-lg" />
                <div className="w-10 h-28 bg-green-400 rounded-lg" />
                <div className="w-10 h-36 bg-green-500 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
