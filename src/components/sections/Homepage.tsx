"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Instagram } from "lucide-react"
import Link from "next/link"

export default function HomeSection() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-8">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative mx-auto w-48 h-48"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 rounded-full animate-pulse"></div>
          <img
            src="/elang.jpg"
            alt="Erlangga Tresnamada Muliawan"
            className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-xl"
          />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-3xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 light:text-[#131D4F]">
            Erlangga Tresnamada
          </h1>
          <h2 className="text-3xl md:text-4xl font-medium text-gray-600 dark:text-gray-300 light:text-[#131D4F]">Muliawan</h2>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="space-y-4"
        >
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6 py-3 rounded-full text-xl font-medium shadow-lg">
            Front End Developer
          </div>
          <p className="text-lg light:text-[#131D4F] dark:text-gray-400 max-w-2xl mx-auto ">
            Passionate about creating beautiful and functional user interfaces with modern web technologies
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-2 light:border-gray-400 dark:border-gray-700 light:text-gray-700 dark:text-gray-300 hover:bg-gray-100 light:hover:bg-gray-100 transition-all duration-300"
          >
            <ArrowDown className="mr-2 h-4 w-4" />
            Explore My Work
          </Button>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex justify-center space-x-6 mt-8"
        >
          <Link href="https://github.com/tresnamada/" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-slate-600 transition-colors">
            <Github className="h-6 w-6" />
          </Link>
          <Link href="https://www.linkedin.com/in/erlanggatresnamadamuliawan/" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-blue-600 transition-colors">
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link href="https://instagram.com/tresnamada" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-purple-600 transition-colors">
            <Instagram className="h-6 w-6" />
          </Link>
        </motion.div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="h-6 w-6 text-gray-500 dark:text-gray-400" />
        </motion.div>
      </div>
    </div>
  )
}
