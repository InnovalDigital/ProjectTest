import { ChevronDown, Bell } from "lucide-react"

export default function Navbar() {
  return (
    <header className="w-full">
      <nav className="mx-auto max-w-[1440px] px-24 py-6 flex items-center justify-between">
        {/* LEFT: Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-lime-400 rounded-md flex items-center justify-center">
            <span className="text-black font-bold text-sm">D</span>
          </div>
          <span className="font-semibold text-lg tracking-tight">
            MAC
          </span>
        </div>

        {/* CENTER: Navigation */}
        <ul className="flex items-center gap-10 text-sm font-medium text-black">
          <li className="flex items-center gap-1 cursor-pointer">
            Service <ChevronDown size={14} />
          </li>
          <li className="flex items-center gap-1 cursor-pointer">
            Agency <ChevronDown size={14} />
          </li>
          <li className="cursor-pointer">Case study</li>
          <li className="flex items-center gap-1 cursor-pointer">
            Resources <ChevronDown size={14} />
          </li>
          <li className="cursor-pointer">Contact</li>
        </ul>

        {/* RIGHT: CTA + Bell */}
        <div className="flex items-center gap-4">
          <button className="px-6 py-2.5 rounded-full border border-black text-sm font-medium">
            Get started
          </button>

          <button className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
            <Bell size={16} className="text-white" />
          </button>
        </div>
      </nav>
    </header>
  )
}
