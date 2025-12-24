import { useState, useRef } from "react"
import { Mail, Send, ArrowRight, Github, Linkedin } from "lucide-react"
import { Button } from "./ui/Button"
import { Input } from "./ui/Input"
import { Textarea } from "./ui/Textarea"
import emailjs from '@emailjs/browser'
import FadeInSection from "./FadeInSection"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const formRef = useRef()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)
    setError(false)

    // Using EmailJS to send the email directly
    // You need to sign up at emailjs.com and get your service ID, template ID and user ID
    emailjs.sendForm(
      'service_viou3nq', // Replace with your EmailJS service ID
      'template_syis90r', // Replace with your EmailJS template ID
      formRef.current,
      'XBKz6GzHVZLdTS5rd' // Replace with your EmailJS user ID
    )
      .then((result) => {
        setLoading(false)
        setSuccess(true)
        setFormData({ name: "", email: "", message: "" })
      }, (error) => {
        setLoading(false)
        setError(true)
      })
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-background text-foreground transition-colors">

      <FadeInSection duration={0.3}>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or just want to say hi? I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>
      </FadeInSection>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <FadeInSection duration={0.3}>
            <div className="border border-border/60 rounded-3xl p-8 bg-card/70 backdrop-blur-md shadow-xl">
              <h3 className="text-2xl font-semibold text-primary mb-8">Talk to me</h3>
              <div className="space-y-6">

                {/* --- EMAIL BOX --- */}
                <a
                  href="mailto:shubham.modi.cg@gmail.com"
                  className="group block bg-card border border-border/60 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <Mail className="w-8 h-8 text-primary mb-4" />
                    <h4 className="text-lg font-medium text-primary mb-1">Email</h4>
                    <p className="text-muted-foreground mb-4">shubham.modi.cg@gmail.com</p>
                    <div className="inline-flex items-center text-muted-foreground group-hover:text-primary">
                      <span className="mr-2">Write me</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>

                {/* --- GITHUB BOX --- */}
                <a
                  href="https://github.com/ShubhamModi032006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-card border border-border/60 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <Github className="w-8 h-8 text-primary mb-4" />
                    <h4 className="text-lg font-medium text-primary mb-1">GitHub</h4>
                    <p className="text-muted-foreground mb-4">ShubhamModi032006</p>
                    <div className="inline-flex items-center text-muted-foreground group-hover:text-primary">
                      <span className="mr-2">Visit profile</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>

                {/* --- LINKEDIN BOX --- */}
                <a
                  href="https://www.linkedin.com/in/shubham-modi-cg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-card border border-border/60 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <Linkedin className="w-8 h-8 text-primary mb-4" />
                    <h4 className="text-lg font-medium text-primary mb-1">LinkedIn</h4>
                    <p className="text-muted-foreground mb-4">shubham-modi-cg</p>
                    <div className="inline-flex items-center text-muted-foreground group-hover:text-primary">
                      <span className="mr-2">Connect</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection duration={0.4}>
            <div className="border border-border/60 rounded-3xl p-8 bg-card/70 backdrop-blur-md shadow-xl">
              <h3 className="text-2xl font-semibold text-primary mb-8">Write me your project</h3>

              {success && (
                <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg border border-green-200">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
                  Something went wrong. Please try again or contact directly via email.
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-muted-foreground mb-2 block">Name</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Insert your name"
                    required
                    className="w-full p-4 rounded-lg border border-border/60 focus:ring-2 focus:ring-primary/30 focus:border-primary bg-background text-foreground"
                  />
                </div>
                <div>
                  <label className="text-muted-foreground mb-2 block">Mail</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Insert your email"
                    required
                    className="w-full p-4 rounded-lg border border-border/60 focus:ring-2 focus:ring-primary/30 focus:border-primary bg-background text-foreground"
                  />
                </div>
                <div>
                  <label className="text-muted-foreground mb-2 block">Project</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your project"
                    required
                    className="w-full p-4 rounded-lg border border-border/60 focus:ring-2 focus:ring-primary/30 focus:border-primary min-h-[150px] bg-background text-foreground"
                  />
                </div>

                {/* Add a hidden field for the recipient email */}
                <input type="hidden" name="to_email" value="shubham.modi.cg@gmail.com" />

                <Button
                  type="submit"
                  disabled={loading}
                  className={`bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 py-6 flex items-center gap-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {loading ? 'Sending...' : 'Send Message'} <Send className="w-4 h-4" />
                </Button>
              </form>


              <div className="mt-28 p-4 bg-primary/5 rounded-xl border border-border/60 flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <p className="text-sm font-medium text-primary">
                  Currently available for freelance & full-time roles.
                </p>
              </div>


            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
