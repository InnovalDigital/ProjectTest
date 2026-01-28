// src/App.jsx
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import HowWeWork from "./components/HowWeWork"
import CaseStudies from "./components/CaseStudies"
import Testimonial from "./components/Testimonial"
import FAQ from "./components/FAQ"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import BlogSection from "./components/BlogSection"

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowWeWork />
      <CaseStudies />
      <Testimonial />
      <FAQ />
      <BlogSection />
      <CTA />
      <Footer />
    </>
  )
}
