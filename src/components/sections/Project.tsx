"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Github } from "lucide-react"
import Image from "next/image"

interface Project {
  id: number
  title: string
  description: string
  fullDescription: string
  image: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "Pandhu App",
      description: "Earthquake alarm app powered by AI",
      fullDescription:
        "Pandhu App is an earthquake alert application enhanced with AI named Pandhu. It provides real-time earthquake warnings and early alerts to help users react quickly and stay safe. The app utilizes seismic data analysis combined with AI-based predictions to increase accuracy and reliability. With a simple and intuitive user interface, Pandhu App is designed to be accessible for users of all ages.",
        image: "/project/pandhu.png",
      technologies: ["Flutter", "Dart", "Firebase", "AI"],
      githubUrl: "https://github.com/tresnamada/HomePage-Pandhu",
    },
    
    {
      id: 2,
      title: "Unither",
      description: "Classroom community app with AI assistant",
      fullDescription:
        "Unither is a digital classroom community platform designed to connect students and teachers in one integrated ecosystem. It features an AI assistant named Uni that helps with class scheduling, task reminders, discussion forums, and progress tracking. The goal of Unither is to create a collaborative and efficient learning environment, supporting both remote and hybrid learning setups.",
        image: "/project/unither.png",
      technologies: ["Flutter", "Dart", "Firebase", "AI"],
      githubUrl: "https://github.com/tresnamada/unither",
    },

    {
      id: 3,
      title: "Siap Huni",
      description: "AI-powered housing solution platform",
      fullDescription:
        "Siap Huni is a digital platform designed to offer practical and affordable housing solutions for Indonesian communities, especially in urban and suburban areas. It provides a marketplace for standardized and budget-friendly prebuilt homes, along with a smart AI assistant called SiHuni. This AI helps users design their home based on land size and lifestyle preferences. Combining smart tech with cultural values, Siap Huni aims to create an interactive, helpful, and locally resonant home-buying experience.",
        image: "/project/siaphuni.png",
      technologies: ["Next.js", "React", "TailwindCSS", "AI", "Firebase"],
      githubUrl: "https://github.com/tresnamada/SiapHuni",
    },
    {
      id: 4,
      title: "Leafstyle",
      description: "Gamified AI platform for sustainable living",
      fullDescription:
        "Leafstyle is a digital platform built to encourage healthy and sustainable lifestyles. By integrating gamification elements and AI-powered suggestions, the platform promotes positive behavior changes in everyday life. Users can complete daily challenges, track progress, and receive personalized recommendations, all while contributing to environmental awareness. Leafstyle makes sustainable living fun, accessible, and engaging for everyone.",
        image: "/project/leafstyle.png",
      technologies: ["Next.js", "TailwindCSS", "AI", "Gamification", "Firebase"],
      githubUrl: "https://github.com/tresnamada/greenfinity",
    },

    {
      id: 5,
      title: "Sahabat Desa",
      description: "3D website to empower remote villages",
      fullDescription:
        "Sahabat Desa is a 3D-designed digital platform aimed at supporting remote villages in improving their quality of life. The website acts as a bridge connecting rural communities with valuable resources such as education, healthcare, infrastructure, and economic opportunities. By providing access to information, training, and collaboration with experts, Sahabat Desa accelerates rural development and empowers local communities to become more self-reliant and prosperous.",
        image: "/project/sahabatdesa.png",
      technologies: ["Three.js", "React", "TailwindCSS", "Firebase"],
      githubUrl: "https://github.com/erlangga/sahabat-desa",
      liveUrl: "https://sahabatdesa.vercel.app"    },
    {
      id: 6,
      title: "GenCerdas",
      description: "Scholarship guidance platform for students",
      fullDescription:
        "GenCerdas is an educational platform designed to help students and college applicants secure scholarships to various countries more effectively. The website provides comprehensive information, preparation guides, and assistance throughout the registration and documentation process. With a research-based approach and well-structured strategy, GenCerdas not only improves access to global education opportunities but also supports users in developing both academic and non-academic competencies required to compete internationally.",
        image: "/project/gencerdas.png",
      technologies: ["Next.js", "React", "TailwindCSS", "AI"],
      githubUrl: "https://github.com/tresnamada/GenCerdas-Vanilla"    
    },
    {
      id: 7,
      title: "Naturaya",
      description: "Donation platform with gamification and AI",
      fullDescription:
        "Naturaya is a donation-focused web platform that integrates gamification and AI to encourage community engagement in social and environmental causes. Users can track impact, earn badges, and receive personalized suggestions powered by AI to support initiatives aligned with their values. Naturaya redefines donation experiences by making them interactive, fun, and purpose-driven, helping build a stronger connection between donors and the causes they care about.",
        image: "/project/naturaya.png",
      technologies: ["Next.js", "TailwindCSS", "AI", "Gamification", "Firebase"],
      githubUrl: "https://github.com/tresnamada/Naturaya",
    },

    {
      id: 8,
      title: "Budayana",
      description: "Cultural ticketing platform with AI guide",
      fullDescription:
        "Budayana is a digital platform for buying and selling tickets to cultural events across Indonesia. It integrates an AI-powered assistant that helps users discover, understand, and choose cultural experiences based on their interests. Budayana promotes local traditions by making cultural events more accessible and engaging, while also supporting artists and communities through a modern, tech-driven approach.",
      image: "/project/budayana.png",
      technologies: ["Next.js", "TailwindCSS", "AI", "Firebase"],
      githubUrl: "https://github.com/tresnamada/budayna",
    },

    {
      id: 9,
      title: "Mentai",
      description: "Mental health platform with AI and doctor support",
      fullDescription:
        "Mentai is a mental health platform designed to provide accessible support through professional consultations and AI-driven assistance. Users can connect with licensed mental health professionals, access self-help resources, and interact with an AI companion trained to offer emotional support and mental wellness guidance. Mentai aims to reduce stigma and make mental healthcare more approachable, personal, and available anytime, anywhere.",
        image: "/project/mentai.png",
      technologies: ["Next.js", "TailwindCSS", "AI", "Firebase"],
      githubUrl: "https://github.com/tresnamada/Ment-Ai",
    },

    {
      id: 10,
      title: "Trampah",
      description: "UI/UX design for waste recycling app",
      fullDescription:
        "Trampah is a UI/UX design project for a mobile application focused on environmental cleanup and waste recycling. The app is designed to encourage users to take part in waste collection initiatives and convert trash into reusable items. With an intuitive interface and eco-friendly visuals, Trampah aims to promote sustainability, community participation, and responsible waste management through technology-driven design.",
        image: "/project/trampah.png",
      technologies: ["Figma", "Design Thinking", "Sustainability"],
      githubUrl: "https://github.com/erlangga/trampah-uiux",

    }
    
    
    
    
    
    
    
  ]

  return (
    <div className="min-h-screen py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto space-y-12"
      >
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">My Projects</h1>
          <p className="text-xl light:text-gray-600 text-gray-300">A showcase of my recent work and achievements</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-900 dark:border-gray-700 overflow-hidden">
                <div className="relative h-48 overflow-hidden flex items-center justify-center">
                  <Image
                    src={project.image || ""}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800 dark:text-gray-100">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs text-gray-600 dark:text-gray-400">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
              <DialogContent className="max-w-4xl max-h-[200vh] overflow-y-auto bg-white dark:bg-gray-800">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="space-y-6"
                >
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src={selectedProject.image || "/placeholder.svg"}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {selectedProject.fullDescription}
                    </p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-100">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-4 pt-4">
                      {selectedProject.title !== "Trampah" && (
                        <Button asChild className="flex-1 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                          <a
                            href={selectedProject.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            View Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </motion.div>
              </DialogContent>
            </Dialog>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
