"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, MapPin, Trophy, Award, Star, Calendar, User, Code, Sparkles } from "lucide-react"
import Image from "next/image"

export default function AboutSection({ imageSrc }: { imageSrc?: string }) {


  // Data sertifikat Anda
  const certificates = [
    {
      title: "Web Development Competition",
      organizer: "Universitas Tarumanegara",
      year: "2025",
      rank: "1st Place",
      rankColor: "bg-gradient-to-r from-yellow-400 to-yellow-600",
      description: "Won first place in web development competition by creating a responsive website using React and Node.js",
      icon: Trophy,
      color: "bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500",
      skills: ["Next.js", "TypeScript", "Firebase" , "Tailwind CSS"],
      image: "/certificates/IOFEST.png", 
      imageAlt: "Sertifikat Juara 1 Web Development Competition"
    },
    {
      title: "Web Development Competiiton",
      organizer: "Universitas Katolik Parahyangan",
      year: "2025",
      rank: "1nd Place",
      // rankColor: "bg-gradient-to-r from-gray-400 to-gray-600",
      rankColor: "bg-gradient-to-r from-yellow-400 to-yellow-600",
      description: "Won first place in web development competition by creating a responsive e-ticket website using React and Firebase",
      icon: Trophy,
      color: "bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500",
      skills: ["React.js", "Firebase", "Tailwind CSS"],
      image: "/certificates/FICPACT2025.png", 
      imageAlt: "Sertifikat Juara 1 Web Development Competition"
    },
    {
      title: "Web Design Competiiton",
      organizer: "Universitas Primakara",
      year: "2025",
      rank: "10th Place",
      rankColor: "bg-gradient-to-r from-gray-400 to-gray-600",
      description: "Participated in web design competition by creating a responsive website donation using html, tailwind css, and javascript",
      icon: Award,
      color: "bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500",
      skills: ["HTML", "Tailwind CSS", "JavaScript"],
      image: "/certificates/WEBDESPRIMAKARA.png", 
      imageAlt: "Sertifikat 10 Besar Web Design Competition"
    },
    {
      title: "Web Design Competiiton",
      organizer: "Universitas Teknologi Yogyakarta",
      year: "2025",
      rank: "10th Place",
      rankColor: "bg-gradient-to-r from-gray-400 to-gray-600",
      description: "Participated in web design competition by creating a responsive website educationusing html, css, and javascript",
      icon: Award,
      color: "bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500",
      skills: ["HTML", "CSS", "JavaScript"],
      image: "/certificates/WEBDESUTY.png", 
      imageAlt: "Sertifikat 10 Besar Web Design Competition"
    },

    {
      title: "Web Design Competition",
      organizer: "Universitas Dian Nuswantoro",
      year: "2025",
      rank: "1th Place",
      rankColor: "bg-gradient-to-r from-yellow-400 to-yellow-600",
      description: "Won first place in web design competition by creating a responsive website using react.js three.js and tailwind css",
      icon: Trophy,
      color: "bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500",
      skills: ["React.js", "Three.js", "Tailwind CSS"],
      image: "/certificates/WEBDESIGNUDINUS.jpg", 
      imageAlt: "Sertifikat Juara 1 Web Design Competition"
    },
    {
      title: "Web Development Competition",
      organizer: "Universitas Dian Nuswantoro",
      year: "2025",
      rank: "2st Place",
      rankColor: "bg-gradient-to-r from-yellow-400 to-yellow-600",
      description: "Won second place in web design competition by creating a responsive website nextjs, typescript, Firebase and tailwind css",
      icon: Trophy,
      color: "bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500",
      skills: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: "/certificates/WEBDEVUDINUS.jpg", 
      imageAlt: "Sertifikat Juara 2 Web Development Competition"
    },
    {
      title: "Web Development Competition",
      organizer: "Universitas Telkom Purwokerto",
      year: "2024",
      rank: "1st Place",
      rankColor: "bg-gradient-to-r from-yellow-400 to-yellow-600",
      description: "Won first place in web design competition by creating a responsive website react.js, Firebase, and tailwind css",
      icon: Trophy,
      color: "bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500",
      skills: ["React.js", "Firebase", "Tailwind CSS"],
      image: "/certificates/WEBDEVSVNT.png", 
      imageAlt: "Sertifikat Juara 2 Web Development Competition"
    },
    {
      title: "UI/UX Design Competition",
      organizer: "Universitas Semarang",
      year: "2045",
      rank: "1st Place",
      rankColor: "bg-gradient-to-r from-yellow-400 to-yellow-600",
      description: "Won first place ui/ux design competition by creating a aplicatio using figma",
      icon: Trophy,
      color: "bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500",
      skills: ["Figma", "User Research", "Prototyping"],
      image: "/certificates/UIUXGENETIC.jpg", 
      imageAlt: "Sertifikat Juara 1 UI/UX Design Competition"
    },
  ]

  // Data pencapaian tanpa gambar (untuk yang tidak memiliki sertifikat)
  const achievements = [
    {
      title: "Cyber Security Bootcamp",
      organizer: "PT. Telkom Indonesia",
      year: "2024",
      description: "Completed Bootcamp Cyber Security by PT. Telkom Indonesia",
      icon: Award,
      color: "bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500",
      image: "/certificates/CYBER.png",
    },
    {
      title: "TOEIC",
      organizer: "TOEIC",
      year: "2024",
      description: "Completed TOEIC by TOEIC",
      icon: Star,
      color: "bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500",
      image: "/certificates/TOEIC.jpg",
    },
    {
      title: "Class Industry",
      organizer: "PT. Telkom Indonesia",
      year: "2024",
      description: "Completed Class Industry by PT. Telkom Indonesia",
      icon: Award,
      color: "bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500",
      image: "/certificates/KELASINDUSTRI.jpg",
    },
  ]

  const education = [
    {
      school: "SMP N 15 Semarang",
      period: "2020 - 2023",
      description: "Completed junior high school education with a focus on basic academic development",
      status: "Completed",
    },
    {
      school: "SMKN 8 Semarang",
      period: "2023 - Present",
      description: "Majoring in Software Engineering, learning programming and application development",
      status: "Current",
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
    <div className="min-h-screen bg-gradient-to-br py-20 px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto space-y-16"
      >
        {/* Hero Section */}
        <motion.div variants={itemVariants} className="text-center space-y-6">
          <div className="relative">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-32 h-32 mx-auto mb-8 relative"
            >
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                {imageSrc ? (
                  <img
                    src="/elang.jpg"
                    alt="Profile Picture"
                    className="rounded-full object-cover w-full h-full object-center"
                  />
                ) : (
                  <User className="w-16 h-16 text-white" />
                )}
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -inset-4 border-2 border-dashed border-blue-300 dark:border-blue-600 rounded-full"
              />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-100 light:text-[#131D4F]">
              Passionate developer crafting digital experiences with code and creativity
            </p>
          </div>
        </motion.div>

        {/* Personal Introduction */}
        <motion.div variants={itemVariants}>
          <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border-0 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
            <CardHeader className="relative">
              <CardTitle className="text-3xl text-gray-800 dark:text-gray-100 flex items-center">
                <Sparkles className="mr-3 h-8 w-8 text-purple-600" />
                Meet Erlangga
              </CardTitle>
            </CardHeader>
            <CardContent className="relative space-y-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    Hi! Im <span className="font-semibold text-blue-600 dark:text-blue-400">Erlangga</span>, but you
                    can call me <span className="font-semibold text-purple-600 dark:text-purple-400">Elang</span>. Im a
                    17-year-old aspiring developer from Semarang, passionate about creating engaging and functional user
                    experiences.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Currently studying at SMKN 8 Semarang, I serve as a Front-End Development mentor for SnapanDev,
                    sharing knowledge and enhancing technical skills within our school community.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 p-6 rounded-2xl">
                  <div className="flex items-center space-x-4 mb-4">
                    <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-gray-100">Front-End Developer</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Software Engineering Student</p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    I believe good design isn`t just about aesthetics, but how users interact with the product. I create
                    interfaces that are visually appealing, user-friendly, and accessible.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Educational Journey */}
        <motion.div variants={itemVariants} className="space-y-8">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent flex items-center justify-center">
            <GraduationCap className="mr-3 h-10 w-10 text-green-600" />
            Educational Journey
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-400 to-blue-500 rounded-full hidden md:block" />

            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-col`}
                >
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                    <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="bg-gradient-to-br from-green-400 to-blue-500 p-3 rounded-full shadow-lg">
                            <MapPin className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{edu.school}</h3>
                              <Badge variant={edu.status === "Current" ? "default" : "secondary"} className="ml-2">
                                {edu.status}
                              </Badge>
                            </div>
                            <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium mb-3">
                              <Calendar className="h-4 w-4 mr-2" />
                              {edu.period}
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{edu.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full shadow-lg border-4 border-white dark:border-gray-800" />
                  </div>

                  <div className="w-full md:w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div variants={itemVariants} className="space-y-8">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-yellow-600 to-red-600 bg-clip-text text-transparent flex items-center justify-center">
            <Trophy className="mr-3 h-10 w-10 text-yellow-600" />
            Achievements & Certifications
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Render certificates with images */}
            {certificates.map((cert, index) => (
              <motion.div key={`cert-${index}`} variants={itemVariants} whileHover={{ scale: 1.02, y: -5 }} className="group">
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 h-full overflow-hidden">
                  <div className={`h-2 ${cert.color}`} />
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`p-4 rounded-2xl ${cert.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <cert.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {cert.title}
                          </h3>
                          {cert.rank && (
                            <Badge className={`${cert.rankColor} text-white shadow-lg`}>
                              {cert.rank}
                            </Badge>
                          )}
                        </div>

                        <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm mb-3">
                          <Calendar className="h-4 w-4 mr-2" />
                          {cert.organizer} • {cert.year}
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                          {cert.description}
                        </p>

                        {/* Certificate Image - Tampilkan hanya jika ada */}
                        {cert.image && (
                          <div className="mb-4 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                            <Image
                              src={cert.image}
                              alt={cert.imageAlt}
                              width={600}
                              height={160}
                              className="w-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                              onClick={() => window.open(cert.image, '_blank')}
                            />
                          </div>
                        )}

                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, skillIndex) => (
                            <Badge
                              key={skillIndex}
                              variant="outline"
                              className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300 hover:scale-105 transition-transform"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Render achievements without images */}
            {achievements.map((achievement, index) => (
              <motion.div key={`ach-${index}`} variants={itemVariants} whileHover={{ scale: 1.02, y: -5 }} className="group">
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 h-full overflow-hidden">
                  <div className={`h-2 ${achievement.color}`} />
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`p-4 rounded-2xl ${achievement.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <achievement.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {achievement.title}
                          </h3>
                        </div>

                        <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm mb-3">
                          <Calendar className="h-4 w-4 mr-2" />
                          {achievement.organizer} • {achievement.year}
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                          {achievement.description}
                        </p>

                        {/* Achievement Image - Tampilkan hanya jika ada */}
                        {achievement.image && (
                          <div className="mb-4 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                            <Image
                              src={achievement.image}
                              alt={achievement.title}
                              width={600}
                              height={160}
                              className="w-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                              onClick={() => window.open(achievement.image, '_blank')}
                            />
                          </div>
                        )}

                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}