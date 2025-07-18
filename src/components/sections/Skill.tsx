"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiDart,
  SiFlutter,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
} from "react-icons/si";

export default function TechStackSection() {
  const technologies = [
    {
      name: "HTML",
      icon: SiHtml5,
      color: "#E34F26",
      level: 98,
      category: "Frontend",
    },
    {
      name: "CSS",
      icon: SiCss3,
      color: "#1572B6",
      level: 85,
      category: "Frontend",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      color: "#F7DF1E",
      level: 90,
      category: "Frontend",
    },
    {
      name: "Dart",
      icon: SiDart,
      color: "#0175C2",
      level: 65,
      category: "Mobile",
    },
    {
      name: "Flutter",
      icon: SiFlutter,
      color: "#02569B",
      level: 60,
      category: "Mobile",
    },
    {
      name: "TailwindCSS",
      icon: SiTailwindcss,
      color: "#06B6D4",
      level: 98,
      category: "Frontend",
    },
    {
      name: "React JS",
      icon: SiReact,
      color: "#61DAFB",
      level: 80,
      category: "Frontend",
    },
    {
      name: "Next JS",
      icon: SiNextdotjs,
      color: "#000000",
      level: 79,
      category: "Frontend",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="min-h-screen dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 py-20 px-4 transition-colors duration-500">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto space-y-16"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center space-y-6">
          <div className="relative">
            <motion.h1
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Tech Stack
            </motion.h1>
            <motion.div
              className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </div>
          <motion.p
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed light:text-slate-800"
            variants={itemVariants}
          >
            Technologies and tools that power my development journey
          </motion.p>
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            
            return (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                className="group"
              >
                <Card className="relative overflow-hidden bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50">
                  <CardContent className="p-8 text-center space-y-6">
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge
                        variant="secondary"
                        className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border-0"
                      >
                        {tech.category}
                      </Badge>
                    </div>

                    {/* Icon - Fixed rendering */}
                    <motion.div
                      className={`w-20 h-20 mx-auto rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                      whileHover={{
                        rotate: [0, -10, 10, 0],
                        scale: 1.1,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon color={tech.color} size={48} title={tech.name} />
                    </motion.div>

                    {/* Technology Name */}
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                      {tech.name}
                    </h3>

                    {/* Proficiency Bar */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-sm font-medium text-slate-600 dark:text-slate-400">
                        <span>Proficiency</span>
                        <span className="text-slate-800 dark:text-slate-200">{tech.level}%</span>
                      </div>
                      <div className="relative w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full`}
                          style={{ backgroundColor: tech.color }}
                          initial={{ width: 0 }}
                          animate={{ width: `${tech.level}%` }}
                          transition={{
                            delay: index * 0.1 + 0.5,
                            duration: 1.2,
                            ease: "easeOut",
                          }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-white/20 rounded-full"
                            animate={{
                              x: ["-100%", "100%"],
                              opacity: [0, 1, 0],
                            }}
                            transition={{
                              duration: 2,
                              delay: index * 0.1 + 1.5,
                              ease: "easeInOut",
                            }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>

                  {/* Hover Effect Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    initial={false}
                  />
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </div>
  )
}