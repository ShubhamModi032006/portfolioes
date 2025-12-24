import { Globe, Github, Send, Twitter, Instagram, Code2 } from "lucide-react"
import { Button } from "./ui/Button"
import { motion } from "framer-motion"
import { useVideo } from "./VideoContext"
import VideoButton from "./VideoButton"
import FadeInSection from "./FadeInSection"

export default function Home() {
  const { showVideo } = useVideo();

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center py-20 relative overflow-hidden bg-background text-foreground transition-colors">

      <motion.div
        className="container mx-auto px-4 z-10"
        animate={{
          width: showVideo ? "60%" : "100%",
          x: showVideo ? "-35%" : 0,
          scale: showVideo ? 0.9 : 1
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* Misty Frosted Glass Container */}
        <div className="w-full max-w-6xl mx-auto p-8 md:p-12 lg:p-16 bg-card/70 backdrop-blur-[40px] border border-border/60 rounded-3xl shadow-2xl relative overflow-hidden">

          <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-20">

            {/* Left Side: Social Icons */}
            <FadeInSection duration={0.3}>
              <div className="flex flex-col items-center justify-center space-y-4 order-2 md:order-1 border-t md:border-t-0 md:border-r border-border/60 pt-6 md:pt-0 md:pr-6">

                {/* GitHub */}
                <a href="https://github.com/ShubhamModi032006" target="_blank" rel="noopener noreferrer" className="flex items-center transition-colors group">
                  <Github className="w-5 h-5 text-foreground/70 mr-4 group-hover:scale-110 group-hover:text-primary transition-all" />
                  <div className="w-8 h-[1px] bg-border/60 group-hover:bg-primary transition-colors"></div>
                </a>

                {/* LeetCode (Fixed: Used Code2 instead of CodeXml) */}
                <a href="https://leetcode.com/u/ShubhamModi032006/" target="_blank" rel="noopener noreferrer" className="flex items-center transition-colors group">
                  <Code2 className="w-5 h-5 text-foreground/70 mr-4 group-hover:scale-110 group-hover:text-primary transition-all" />
                  <div className="w-8 h-[1px] bg-border/60 group-hover:bg-primary transition-colors"></div>
                </a>

                {/* Twitter / X */}
                <a href="https://x.com/shubham_modi_cg" target="_blank" rel="noopener noreferrer" className="flex items-center transition-colors group">
                  <Twitter className="w-5 h-5 text-foreground/70 mr-4 group-hover:scale-110 group-hover:text-primary transition-all" />
                  <div className="w-8 h-[1px] bg-border/60 group-hover:bg-primary transition-colors"></div>
                </a>

                {/* Instagram */}
                <a href="https://www.instagram.com/shubham03.2006/" target="_blank" rel="noopener noreferrer" className="flex items-center transition-colors group">
                  <Instagram className="w-5 h-5 text-foreground/70 mr-4 group-hover:scale-110 group-hover:text-primary transition-all" />
                  <div className="w-8 h-[1px] bg-border/60 group-hover:bg-primary transition-colors"></div>
                </a>

              </div>
            </FadeInSection>

            {/* Center: Main Content */}
            <FadeInSection duration={0.4}>
              <div className="text-center md:text-left max-w-xl order-3 md:order-2">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-primary mb-3">
                  Shubham <br /> Modi
                </h1>

                <h2 className="text-xl md:text-2xl font-medium text-secondary mb-6">
                  Full Stack Developer
                </h2>

                <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-8">
                  I'm a passionate developer specializing in MERN stack solutions. I transform ideas into code and build engaging web applications.
                </p>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8">
                  <a href="#contact" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}>
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-primary/20 transition-all hover:scale-105 flex items-center gap-2">
                      Say Hello <Send className="w-4 h-4" />
                    </Button>
                  </a>

                  <VideoButton
                    videoUrl="https://res.cloudinary.com/dqhn4dq02/video/upload/v1740999850/p5ditex5ags07kvajspz.mp4"
                    videoTitle="FinCtrl Demo Video"
                    text="Watch Demo"
                    className="border border-border rounded-full px-6 py-3 hover:bg-card/60 transition-colors"
                  />
                </div>

                {/* Status Indicator */}
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-green-50/50 dark:bg-green-900/10 border border-green-200 dark:border-green-800/30 rounded-full">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  <span className="text-xs font-medium text-green-700 dark:text-green-400 tracking-wide uppercase">
                    Open to work & collaboration
                  </span>
                </div>

              </div>
            </FadeInSection>

            {/* Right Side: Image with Glow */}
            <FadeInSection duration={0.5}>
              <div className="relative order-1 md:order-3 mb-8 md:mb-0">
                {/* Image Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary via-secondary to-accent rounded-full blur-[40px] opacity-40 transform scale-90"></div>

                <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-[6px] border-card shadow-2xl mx-auto">
                  <img
                    src="https://res.cloudinary.com/dqhn4dq02/image/upload/v1740113553/jm7lzaefxenoz27qzxfz.jpg"
                    alt="Shubham Modi"
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </FadeInSection>
          </div>

        </div>
      </motion.div>
    </section>
  )
}