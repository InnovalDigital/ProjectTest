export default function HowWeWorkSection() {
  return (
    <section className="relative mx-auto max-w-[1440px] px-24 py-22">
      {/* TOP TEXT */}
      <div className="grid grid-cols-[1fr_1fr] gap-24 mb-20">
        <h2 className="text-[48px] leading-[1.15] font-semibold tracking-tight">
          Provide the best service with
          <br />
          out of the box ideas
        </h2>

        <p className="text-[15px] leading-relaxed text-gray-500 max-w-xl">
          we are a passionate team of digital marketing enthusiasts dedicated to
          helping businesses succeed in the digital world. With years of
          experience and a deep understanding of the ever-evolving online
          landscape, we stay at the forefront of industry trends and
          technologies.
        </p>
      </div>

      {/* BOTTOM CARDS */}
      <div className="grid grid-cols-[420px_1fr] gap-20 items-center">
        {/* LEFT BLACK STAT CARD */}
        <div className="relative w-[420px] h-[260px] bg-black rounded-[28px] p-10 text-white overflow-hidden">
          {/* subtle wave */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />

          <h3 className="text-[56px] font-semibold relative z-10">
            920<span className="text-green-400">+</span>
          </h3>

          <p className="mt-2 text-sm text-gray-300 relative z-10">
            Project finish with superbly
          </p>

          {/* dots */}
          <div className="absolute bottom-8 left-10 flex items-center gap-4 z-10">
            <div className="w-10 h-10 rounded-full bg-gray-300" />
            <div className="w-10 h-10 rounded-full bg-gray-300" />
            <div className="w-10 h-10 rounded-full bg-gray-300" />
            <div className="w-10 h-10 rounded-full bg-gray-300" />
            <span className="text-white text-xl font-semibold">+</span>
          </div>
        </div>

        {/* RIGHT IMAGE / VIDEO CARD */}
        <div className="relative w-full h-[320px] rounded-[28px] overflow-hidden">
          {/* IMAGE */}
          <img
            src="https://plus.unsplash.com/premium_photo-1661725357418-fb09ff7c0aae?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2ZmaWNlJTIwd29ya2VyfGVufDB8fDB8fHww"
            alt="How we work"
            className="w-full h-full object-cover"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/25" />

          {/* TEXT OVERLAY */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white text-[28px] tracking-[0.4em] font-medium">
              HOW WE WORK
            </h3>
          </div>

          {/* PLAY BUTTON */}
          <button className="absolute bottom-6 right-6 w-20 h-20 rounded-full bg-green-400 flex items-center justify-center shadow-lg">
            <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[16px] border-t-transparent border-b-transparent border-l-black ml-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
