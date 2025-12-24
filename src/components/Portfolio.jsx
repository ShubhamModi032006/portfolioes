"use client"

import { useState } from "react"
import { ArrowRight, Github, ExternalLink, Layers } from "lucide-react"
import { cn } from "../utils"
import VideoButton from "./VideoButton"
import FadeInSection from "./FadeInSection"

const categories = ["All", "Web", "Figma"]

// Updated Project Data with Bento-style coloring
const projects = [
  {
    id: 1,
    title: "FinCtrl",
    category: "Web",
    image: "https://res.cloudinary.com/dqhn4dq02/image/upload/v1741248835/hudrwpm8ah1hnlfo0ahm.png",
    link: "https://fin-ctrl-frontend-1.onrender.com",
    github: "https://github.com/shubhamiscodding/Fin_Ctrl",
    description: "A comprehensive financial management system that helps you track expenses, manage budgets, and analyze spending patterns effectively.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Tailwind"],
    demoVideo: "https://res.cloudinary.com/dqhn4dq02/video/upload/v1740999850/p5ditex5ags07kvajspz.mp4",
    size: "tall",
  },
  {
    id: 2,
    title: "Progcap Clone",
    category: "Web",
    image: "https://cdn.prod.website-files.com/6193782af8f15b5c5763d1de/619b51335bf284cd78d1b5e1_Progcap_Logo.svg",
    link: "https://progcap-clone.onrender.com",
    github: "https://github.com/shubhamiscodding/progcap-clone",
    description: "A pixel-perfect clone of the Progcap platform, showcasing advanced React implementation and responsive design techniques.",
    technologies: ["React", "CSS", "JavaScript"],
    size: "medium",
  },
  {
    id: 3,
    title: "Apollo Clone",
    category: "Web",
    image: "https://images.apollo247.in/images/pharmacy_logo.svg?tr=q-70,w-100,dpr-2,c-at_max",
    link: "https://apolloclone.onrender.com",
    github: "https://github.com/shubhamiscodding/apolloclone",
    description: "A faithful recreation of the Apollo healthcare platform interface.",
    technologies: ["HTML", "CSS"],
    size: "short",
  },
  {
    id: 4,
    title: "Youtube Clone",
    category: "Web",
    image: "https://cdn.iconscout.com/icon/free/png-512/free-youtube-104-432560.png?f=webp&w=512",
    link: "https://youtube-frontend-ch16.onrender.com",
    github: "https://github.com/shubhamiscodding/spotify-with-react/tree/main/you-vite-react",
    description: "A feature-rich YouTube clone that implements core functionalities using React and external APIs.",
    technologies: ["React", "API Integration"],
    size: "wide",
  },
  {
    id: 5,
    title: "Finctrl Prototype",
    category: "Figma",
    image: "https://res.cloudinary.com/dqhn4dq02/image/upload/v1741248835/hudrwpm8ah1hnlfo0ahm.png",
    link: "https://www.figma.com/proto/DNBtQzukvRqvlJOR15WNiD/FINAL-PROJECT?node-id=165-316&t=IJSgkeDiJ1yPqsuJ-1",
    description: "A sleek Figma prototype for a financial management tool with a simple and intuitive UI.",
    technologies: ["Figma", "UI Design"],
    size: "short",
  },
  {
    id: 6,
    title: "Smellwell",
    category: "Figma",
    image: "https://placehold.co/600x400/E9F0E6/333?text=SmellWell",
    link: "https://www.figma.com/proto/9tFxecNpUhwc9yXIunCS2P/something-like-cloning?page-id=218%3A73&node-id=227-440&viewport=588%2C159%2C0.11&t=IH2rnykLPCUofh1R-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=227%3A440",
    description: "A fragrance brand landing page design, featuring advanced prototyping.",
    technologies: ["Figma", "Prototyping"],
    size: "tall",
  },
  {
    id: 7,
    title: "Cricknews",
    category: "Figma",
    image: "https://wallpapercave.com/wp/wp6916613.jpg",
    link: "https://www.figma.com/proto/9tFxecNpUhwc9yXIunCS2P/something-like-cloning?node-id=90-400&t=uwCXGdlQ3AxLspQy-1",
    description: "A Figma prototype for a cricket news platform with interactive elements.",
    technologies: ["Figma", "Interaction"],
    size: "wide",
  },
  {
    id: 8,
    title: "Instagram Prototype",
    category: "Figma",
    image: "https://res.cloudinary.com/dqhn4dq02/image/upload/v1745691177/czc457xnddhzuvobj8xt.jpg",
    link: "https://www.figma.com/proto/9tFxecNpUhwc9yXIunCS2P/something-like-cloning?node-id=43-87&t=uwCXGdlQ3AxLspQy-1",
    description: "A Figma recreation of Instagram's interface with prototyping features.",
    technologies: ["Figma", "Clone"],
    size: "medium",
  },
  {
    id: 9,
    title: "Social Media One-Page",
    category: "Figma",
    image: "https://res.cloudinary.com/dqhn4dq02/image/upload/v1740113499/hinsjwtehr2aoxyj0f0s.png",
    link: "https://www.figma.com/proto/1rN6JDvA6MVeTwyABaoaHO/EXAM-BUT-UNIQE-IDEA?page-id=0%3A1&node-id=2-2&p=f&viewport=500%2C484%2C0.63&t=YXlQOTdePAZgLyKv-1&scaling=min-zoom&content-scaling=fixed",
    description: "A unique one-page social media design created in Figma with a creative layout.",
    technologies: ["Figma", "Layout"],
    size: "short",
  },
  {
    id: 10,
    title: "Fast-Typing Generator",
    category: "Web",
    image: "https://placehold.co/600x400/E9F0E6/333?text=Fast+Typing",
    link: "https://gemini-type.vercel.app/",
    github: "https://github.com/ShubhamModi032006/Gemini-type",
    description: "Generates text with a fast-typing effect using the Gemini API.",
    technologies: ["Gemini API", "Next.js"],
    size: "medium",
  },
  {
    id: 11,
    title: "Local File Uploader",
    category: "Web",
    image: "https://placehold.co/600x400/E9F0E6/333?text=Multer+Storage",
    link: "#",
    github: "#",
    description: "Backend project for local file storage using Node.js and Multer.",
    technologies: ["Node.js", "Multer", "React JSX", "Express", "MongoDB", "JWT"],
    size: "tall",
  },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  // Masonry layout height logic
  const getImageHeight = (size) => {
    switch (size) {
      case 'tall': return 'h-64 md:h-80';
      case 'wide': return 'h-48 md:h-60';
      case 'medium': return 'h-56 md:h-72';
      case 'short': default: return 'h-40 md:h-48';
    }
  }

  return (
    <section id="portfolio" className="py-20 bg-background text-foreground transition-colors min-h-screen">
      <div className="container mx-auto px-4">
        
        {/* --- Header --- */}
        <FadeInSection duration={0.3}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Selected Work</h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-4"></div>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A collection of projects exploring web development, design systems, and creative prototypes.
            </p>
          </div>
        </FadeInSection>

        {/* --- Filters --- */}
        <FadeInSection duration={0.4}>
          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground border-transparent shadow-lg transform scale-105"
                    : "bg-transparent border-border text-muted-foreground hover:bg-card/60"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeInSection>

        {/* --- Projects Grid (Masonry) --- */}
        <FadeInSection duration={0.4}>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={cn(
                  "break-inside-avoid relative rounded-2xl overflow-hidden transition-all duration-300 group",
                  "border border-border/60",
                  "shadow-lg hover:shadow-xl hover:-translate-y-2",
                  "bg-card/70 backdrop-blur-md"
                )}
              >
                {/* Image Container */}
                <div className={cn("relative overflow-hidden w-full", getImageHeight(project.size))}>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-fit transform transition-transform duration-700 group-hover:scale-110 "
                  />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                    <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-card rounded-full text-foreground hover:scale-110 transition-transform border border-border/60"
                          title="View Code"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-card rounded-full text-foreground hover:scale-110 transition-transform border border-border/60"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <span className="text-xs font-bold tracking-wider text-secondary uppercase mb-1 block">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-primary leading-tight">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies && project.technologies.slice(0, 3).map((tech, index) => (
                      <span 
                        key={index} 
                        className="text-xs font-medium px-2.5 py-1 rounded-md bg-card border border-border/60 text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.demoVideo && (
                    <div className="pt-4 border-t border-border/60">
                       <VideoButton
                        videoUrl={project.demoVideo}
                        videoTitle={`${project.title} Demo`}
                        text="Watch Preview"
                        className="w-full justify-center text-sm border border-border/60 text-foreground hover:bg-card/60"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>
        
      </div>
    </section>
  )
}