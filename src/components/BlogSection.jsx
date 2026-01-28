import { ArrowRight } from "lucide-react"

const POSTS = [
  {
    id: 1,
    title: "How a Digital Marketing Agency Can Boost Your Business",
    excerpt:
      "We are the top digital marketing agency for branding corp. We offer a full range engine ...",
    dot: "bg-blue-400",
  },
  {
    id: 2,
    title:
      "The Latest Trends and Strategies with a Digital Marketing Agency",
    excerpt:
      "Working with this digital marketing agency has been a true partnership. They have tak...",
    dot: "bg-orange-400",
  },
  {
    id: 3,
    title:
      "Maximizing ROI with the Expertise of a Digital Marketing Agency",
    excerpt:
      "What sets this digital marketing agency apart is their commitment to transparency a...",
    dot: "bg-purple-500",
  },
]

export default function BlogSection() {
  return (
    <section className="bg-[#F6F6F6]">
      <div className="mx-auto max-w-[1440px] px-24 py-32">

        {/* HEADER */}
        <div className="flex items-start justify-between mb-16">
          <div>
            <h2 className="text-[36px] leading-tight font-semibold max-w-xl">
              Digital Marketing & SEO
              <br />
              Services That Grow Traffic &
              <br />
              Increase Revenue
            </h2>
          </div>

          <div className="max-w-md text-right">
            <p className="text-sm text-gray-500 mb-4">
              We are the top digital marketing agency for branding corp.
              We offer a full range of services to help clients improve
              their search engine rankings and drive more traffic to
              their websites.
            </p>
            <button className="px-6 py-2 rounded-full border border-black text-sm font-medium">
              See more
            </button>
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-3 gap-8">
          {POSTS.map(post => (
            <div
              key={post.id}
              className="bg-white rounded-[24px] p-8 shadow-sm hover:shadow-md transition"
            >
              {/* META */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span
                    className={`w-2 h-2 rounded-full ${post.dot}`}
                  />
                  <span className="text-xs text-gray-400">
                    5 min read
                  </span>
                </div>
              </div>

              {/* TITLE */}
              <h3 className="text-[18px] font-semibold leading-snug mb-4">
                {post.title}
              </h3>

              {/* EXCERPT */}
              <p className="text-sm text-gray-500 leading-relaxed mb-10">
                {post.excerpt}
              </p>

              {/* ACTION */}
              <button className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition">
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
