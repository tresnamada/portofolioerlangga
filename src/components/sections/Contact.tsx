"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Send } from "lucide-react"
import { toast } from "sonner"
import emailjs from '@emailjs/browser'

export default function ContactSection() {

const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!


  const [formData, setFormData] = useState({

    name: "",

    email: "",

    subject: "",

    message: "",

  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    await emailjs.send(
      serviceID,
      templateID,
      {
        from_name: formData.name,
        reply_to: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      publicKey
    )

    if (!serviceID || !templateID || !publicKey) {
      toast.error("Email service not configured properly")
      return
    }
    

    toast.success("Message Sent!", {
      description: "Thank you for your message. I'll get back to you soon!",
    })

    setFormData({ name: "", email: "", subject: "", message: "" })
  } catch (error) {
    console.error(error)
    toast.error("Failed to send message", {
      description: "Please try again later.",
    })
  } finally {
    setIsSubmitting(false)
  }
}

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    setFormData((prev) => ({

      ...prev,

      [e.target.name]: e.target.value,

    }))

  }

  return (

    <div className="min-h-screen py-20">

      <motion.div

        initial={{ opacity: 0, y: 50 }}

        animate={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.5 }}

        className="max-w-4xl mx-auto space-y-12"

      >

        <div className="text-center space-y-4">

          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Get In Touch</h1>

          <p className="text-xl text-gray-100 light:text-gray-900">

            Have a question or want to work together? Id love to hear from you!

          </p>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          <motion.div

            initial={{ opacity: 0, x: -50 }}

            animate={{ opacity: 1, x: 0 }}

            transition={{ delay: 0.2, duration: 0.5 }}

            className="space-y-8"

          >

            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700">

              <CardHeader>

                <CardTitle className="flex items-center text-2xl text-gray-800 dark:text-gray-100">

                  <Mail className="mr-3 h-6 w-6 text-blue-600 dark:text-blue-400" />

                  Contact Information

                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">

                <div>

                  <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Email</h3>

                  <p className="text-gray-600 dark:text-gray-300">erlangga.tresnamada@gmail.com</p>

                </div>

                <div>

                  <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Response Time</h3>

                  <p className="text-gray-600 dark:text-gray-300">I typically respond within 24 hours</p>

                </div>

                <div>

                  <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Best Time to Contact</h3>

                  <p className="text-gray-600 dark:text-gray-300">Monday - Friday, 9:00 AM - 6:00 PM (WIB)</p>

                </div>

              </CardContent>

            </Card>

            <motion.div

              initial={{ opacity: 0, y: 30 }}

              animate={{ opacity: 1, y: 0 }}

              transition={{ delay: 0.4, duration: 0.5 }}

            >

              <Card className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">

                <CardContent className="p-6">

                  <h3 className="text-xl font-bold mb-2">Lets Build Something Amazing</h3>

                  <p className="opacity-90">

                    Whether you have a project in mind or just want to chat about technology, Im always excited to

                    connect with fellow developers and potential collaborators.

                  </p>

                </CardContent>

              </Card>

            </motion.div>

          </motion.div>

          <motion.div

            initial={{ opacity: 0, x: 50 }}

            animate={{ opacity: 1, x: 0 }}

            transition={{ delay: 0.3, duration: 0.5 }}

          >

            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700">

              <CardHeader>

                <CardTitle className="text-2xl text-gray-800 dark:text-gray-100">Send a Message</CardTitle>

              </CardHeader>

              <CardContent>

                <form onSubmit={handleSubmit} className="space-y-6">

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <div className="space-y-2">

                      <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">Name</Label>

                      <Input

                        id="name"

                        name="name"

                        value={formData.name}

                        onChange={handleChange}

                        placeholder="Your name"

                        required

                        className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"

                      />

                    </div>

                    <div className="space-y-2">

                      <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email</Label>

                      <Input

                        id="email"

                        name="email"

                        type="email"

                        value={formData.email}

                        onChange={handleChange}

                        placeholder="your.email@example.com"

                        required

                        className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"

                      />

                    </div>

                  </div>

                  <div className="space-y-2">

                    <Label htmlFor="subject" className="text-gray-700 dark:text-gray-300">Subject</Label>

                    <Input

                      id="subject"

                      name="subject"

                      value={formData.subject}

                      onChange={handleChange}

                      placeholder="What's this about?"

                      required

                      className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"

                    />

                  </div>

                  <div className="space-y-2">

                    <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">Message</Label>

                    <Textarea

                      id="message"

                      name="message"

                      value={formData.message}

                      onChange={handleChange}

                      placeholder="Tell me about your project or question..."

                      rows={6}

                      required

                      className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"

                    />

                  </div>

                  <Button

                    type="submit"

                    className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"

                    disabled={isSubmitting}

                  >

                    {isSubmitting ? (

                      <motion.div

                        animate={{ rotate: 360 }}

                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1 }}

                        className="mr-2"

                      >

                        <Send className="h-4 w-4" />

                      </motion.div>

                    ) : (

                      <Send className="mr-2 h-4 w-4" />

                    )}

                    {isSubmitting ? "Sending..." : "Send Message"}

                  </Button>

                </form>

              </CardContent>

            </Card>

          </motion.div>

        </div>

      </motion.div>

    </div>

  )

}