import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#F4F4F4] mt-24">
      <div className="mx-auto max-w-[1440px] px-24 py-24 grid grid-cols-[1.2fr_1fr_1fr_1fr] gap-20">

        {/* BRAND */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-green-400 rounded-md flex items-center justify-center">
              <span className="font-bold text-black">D</span>
            </div>
            <span className="font-semibold text-lg">MAC</span>
          </div>

          <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-xs">
            We offer a comprehensive suite of digital marketing services that
            cover all aspects of our online presence. From SEO and social media
            marketing to content creation and PPC advertising.
          </p>

          <div className="flex items-center gap-4 text-gray-600">
            <Facebook size={18} />
            <Twitter size={18} />
            <Linkedin size={18} />
            <Instagram size={18} />
          </div>
        </div>

        {/* NAVIGATION */}
        <div>
          <h4 className="text-sm font-semibold mb-6">Navigation</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li>Service</li>
            <li>Agency</li>
            <li>Case Study</li>
            <li>Resource</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* LICENCE */}
        <div>
          <h4 className="text-sm font-semibold mb-6">Licence</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li>Privacy Policy</li>
            <li>Copyright</li>
            <li>Email Address</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-sm font-semibold mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li className="flex items-center gap-3">
              <Phone size={14} /> (406) 555-0120
            </li>
            <li className="flex items-center gap-3">
              <Mail size={14} /> hey@boostim.com
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={14} /> 2972 Westheimer Rd. Santa Ana, Illinois 85486
            </li>
          </ul>
        </div>

      </div>
    </footer>
  )
}
