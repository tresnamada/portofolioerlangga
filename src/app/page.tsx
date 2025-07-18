"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import HomeSection from "@/components/sections/Homepage"
import AboutSection from "@/components/sections/About"
import ProjectsSection from "@/components/sections/Project"
import TechStackSection from "@/components/sections/Skill"
import ContactSection from "@/components/sections/Contact"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <HomeSection />
      case "about":
        return <AboutSection imageSrc="/cobak.jpg" />
      case "projects":
        return <ProjectsSection />
      case "tech-stack":
        return <TechStackSection />
      case "contact":
        return <ContactSection />
      default:
        return <HomeSection />
    }
  }

  return (
    <div className=" transition-colors duration-300">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {renderSection()}
      </motion.main>

      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
    </div>
  )
}
