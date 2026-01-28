import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const TABS = [
  { label: "All Work", count: 20, key: "all" },
  { label: "UI/UX Design", count: 10, key: "uiux" },
  { label: "Digital Marketing", count: 5, key: "marketing" },
  { label: "Branding", count: 5, key: "branding" },
];

const PROJECTS = [
  {
    id: 1,
    title: "AiWave – AI Chatbot Mobile App",
    category: "uiux",
    image: "https://prokit.iqonic.design/wp-content/uploads/2023/01/main_image_1.png",
  },
  {
    id: 2,
    title: "AI Corporation – 2023",
    category: "uiux",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/1867a489788291.5e00bbeda7d8c.png",
  },
  {
    id: 3,
    title: "App Lancer – Freelance",
    category: "branding",
    image: "https://i.pinimg.com/736x/0f/d3/5f/0fd35f74f0866ae484090fa998a1dccd.jpg",
  },
];

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState("uiux");
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const filtered =
    activeTab === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeTab);

  // arrow scroll
  const scroll = (dir) => {
    scrollRef.current.scrollBy({
      left: dir * 420,
      behavior: "smooth",
    });
  };

  // drag scroll
  const onMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    const x = e.pageX - startX.current;
    scrollRef.current.scrollLeft = scrollLeft.current - x;
  };

  const stopDrag = () => (isDragging.current = false);

  return (
    <section className="mx-auto max-w-[1440px] px-24 py-32">
      {/* GLOSSY CONTAINER */}
      <div className="relative rounded-[36px] overflow-hidden text-white px-20 py-20 bg-black">
        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/premium-photo/beautiful-stylish-black-background-with-pleats-drapes-swirls_158469-2524.jpg?semt=ais_hybrid&w=740&q=80')",
          }}
        />

        {/* DARK OVERLAY (keeps text readable) */}
        <div className="absolute inset-0 bg-black/60" />

        {/* CONTENT */}
        <div className="relative z-10">
          <h2 className="text-[36px] max-w-4xl mb-12 font-medium">
            Real-world examples of how we have helped companies achieve their
            marketing objectives.
          </h2>

          {/* TABS */}
          <div className="flex gap-4 mb-16">
            {TABS.map((tab) => {
              const active = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition
                    ${
                      active
                        ? "bg-green-400 text-black"
                        : "border border-white/30 hover:border-white"
                    }`}
                >
                  {tab.label} [{tab.count}]
                </button>
              );
            })}
          </div>

          {/* SCROLL AREA */}
          <div className="relative">
            {/* ARROWS */}
            <button
              onClick={() => scroll(-1)}
              className="absolute -left-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
            >
              <ArrowLeft />
            </button>

            <button
              onClick={() => scroll(1)}
              className="absolute -right-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
            >
              <ArrowRight />
            </button>

            {/* HORIZONTAL TRACK */}
            <div
              ref={scrollRef}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseLeave={stopDrag}
              onMouseUp={stopDrag}
              className="flex gap-12 overflow-x-auto cursor-grab active:cursor-grabbing scrollbar-hide"
            >
              {/* ROUND FEATURE CARD */}
              <div className="min-w-[420px] h-[420px] rounded-full overflow-hidden relative bg-white padding-4">
                <img
                  src="/case-round.png"
                  alt="Case preview"
                  className="w-full h-full object-cover"
                />

                {/* SEE DETAILS */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-36 h-36 rounded-full bg-green-400 flex items-center justify-center text-black font-medium ">
                    {/* IMAGE */}
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: "url('https://www.designyourway.net/blog/wp-content/uploads/2013/04/seller-dashboard-large.jpg')" }}
                    />

                    {/* GREEN OVERLAY */}
                    <div className="absolute inset-0 bg-green-40/90" />

                    {/* TEXT */}
                    <div className="relative z-10 flex items-center justify-center h-full text-black font-medium">
                      See Details
                    </div>
                  </div>
                </div>
              </div>

              {/* PROJECT CARDS */}
              {filtered.map((item) => (
                <div
                  key={item.id}
                  className="min-w-[380px] h-[320px] rounded-[28px] overflow-hidden relative bg-white/10 backdrop-blur-md"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute bottom-6 left-6">
                    <p className="text-xs text-white/60 mb-1">
                      {item.title.split("–")[0]}
                    </p>
                    <p className="font-medium">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
