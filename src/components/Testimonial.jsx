import { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

const TESTIMONIALS = [
  {
    text: `They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.`,
    name: "Michael Kaizer",
    role: "CEO of Basecamp Corp",
    avatar: "https://img.freepik.com/free-photo/woman-showing-ok-sign_23-2148990150.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    text: `The team delivered outstanding results with a clear strategy and excellent execution. Our growth metrics improved significantly within months.`,
    name: "Sarah Williams",
    role: "Marketing Director",
    avatar: "https://img.freepik.com/free-photo/pleased-handsome-male-customer-show-thumb-up-approval_176420-17945.jpg?semt=ais_user_personalization&w=740&q=80",
  },
  {
    text: `Professional, creative, and data-driven. They truly understand modern digital marketing.`,
    name: "Daniel Roberts",
    role: "Founder, Startup X",
    avatar: "https://media.istockphoto.com/id/1230749818/photo/portrait-of-smiling-male-owner-of-fashion-store-standing-in-front-of-clothing-display.jpg?s=612x612&w=0&k=20&c=xoWhF-hrQcbMEPDYncHiHF8HJX2YgmYt7T-KLCPZIpY=",
  },
]

export default function Testimonial() {
  const [index, setIndex] = useState(0)
  const total = TESTIMONIALS.length

  const prev = () =>
    setIndex(i => (i === 0 ? total - 1 : i - 1))
  const next = () =>
    setIndex(i => (i === total - 1 ? 0 : i + 1))

  const item = TESTIMONIALS[index]

  return (
    <section className="mx-auto max-w-[1940px] px-4 py-27 position-relative flex flex-col items-center gap-16 ">
      <div className="relative max-w-7xl">

        {/* QUOTE */}
        <p className="text-[22px] leading-relaxed font-medium text-black">
          “{item.text}”
        </p>

        {/* FOOTER */}
        <div className="mt-12 flex items-center justify-between">
          {/* AUTHOR */}
          <div className="flex items-center gap-4">
            <img
              src={item.avatar}
              alt={item.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium">{item.name}</p>
              <p className="text-xs text-gray-500">{item.role}</p>
            </div>
          </div>

          {/* CONTROLS */}
          <div className="flex items-center gap-4">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition"
            >
              <ArrowLeft size={16} />
            </button>

            <span className="text-xs text-gray-500">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:opacity-80 transition"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
