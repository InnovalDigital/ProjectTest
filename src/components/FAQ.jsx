import { useState } from "react"

const FAQS = [
  {
    question: "Why is digital marketing important for my business?",
    answer:
      "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights.",
  },
  {
    question: "How can digital marketing help improve my website's visibility?",
    answer:
      "Through SEO, content marketing, and paid advertising, digital marketing improves search rankings, drives organic traffic, and increases online presence.",
  },
  {
    question: "How long does it take to see results from digital marketing efforts?",
    answer:
      "Typically, SEO takes 3–6 months, while paid campaigns can show results almost immediately.",
  },
  {
    question: "How do you measure the success of digital marketing campaigns?",
    answer:
      "We track KPIs such as traffic, conversions, engagement, ROI, and customer acquisition cost.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="mx-auto max-w-[1440px] px-24 py-28 ">
      <div className="grid grid-cols-[420px_1fr] gap-24">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-[32px] font-semibold mb-4">
            Digital Marketing FAQs
          </h2>

          <p className="text-sm text-gray-500 leading-relaxed mb-8">
            As a leading digital marketing agency, we are dedicated to providing
            comprehensive educational resources and answering frequently asked
            questions to help our clients.
          </p>

          <div className="flex items-center gap-4">
            <button className="px-6 py-2 rounded-full border border-black text-sm font-medium">
              More Questions
            </button>
            <button className="text-sm font-medium underline underline-offset-4">
              Contact Us
            </button>
          </div>
        </div>

        {/* RIGHT ACCORDION */}
        <div className="divide-y divide-black/20">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div key={index} className="py-6">
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="text-sm font-medium max-w-[520px]">
                    {faq.question}
                  </span>

                  <span className="text-xl font-light">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <p className="mt-4 text-sm text-gray-500 leading-relaxed max-w-[560px]">
                    {faq.answer}
                  </p>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
