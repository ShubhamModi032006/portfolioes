import { motion } from "framer-motion"
import FadeInSection from "./FadeInSection"
import {
  Code2, Database, Wrench, Globe, Server, Terminal, Cpu, Layout,
  Braces, Layers, Box, GitBranch, Cloud, Lock, Zap, ShieldCheck
} from "lucide-react"

// --- Configuration: Skill Data ---

const coreStack = [
  { name: "MongoDB", icon: <Database className="w-8 h-8 text-[#47A248]" />, color: "bg-[#47A248]/10 border-[#47A248]/20" },
  { name: "Express", icon: <Terminal className="w-8 h-8 text-gray-500 dark:text-gray-300" />, color: "bg-gray-500/10 border-gray-500/20" },
  { name: "React", icon: <Code2 className="w-8 h-8 text-[#61DAFB]" />, color: "bg-[#61DAFB]/10 border-[#61DAFB]/20" },
  { name: "Node.js", icon: <Server className="w-8 h-8 text-[#339933]" />, color: "bg-[#339933]/10 border-[#339933]/20" },
]

const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: <Layout className="w-5 h-5 text-purple-500" />,
    skills: [
      { name: "React (JSX)", icon: <Braces className="text-blue-400" /> }, // ADDED
      { name: "JavaScript (ES6+)", icon: <Braces className="text-yellow-400" /> },
      { name: "TypeScript", icon: <Braces className="text-blue-500" /> },
      { name: "Tailwind CSS", icon: <Layers className="text-teal-400" /> },
      { name: "Next.js", icon: <Zap className="text-black dark:text-white" /> },
      { name: "HTML5 & CSS3", icon: <Globe className="text-orange-500" /> },
      { name: "Figma", icon: <Box className="text-pink-500" /> },
    ]
  },
  {
    title: "Backend & Architecture",
    icon: <Server className="w-5 h-5 text-green-500" />,
    skills: [
      { name: "Node.js", icon: <Server className="text-green-500" /> }, // ADDED
      { name: "Express.js", icon: <Globe className="text-gray-500" /> }, // ADDED
      { name: "MongoDB (Mongoose)", icon: <Database className="text-green-700" /> }, // ADDED
      { name: "REST API Development & Integration", icon: <Globe className="text-blue-400" /> }, // Consolidated REST API skills
      { name: "Authentication & Authorization (JWT)", icon: <Lock className="text-yellow-500" /> },
      { name: "Role-Based Access Control (RBAC)", icon: <ShieldCheck className="text-red-500" /> }, // ADDED
      { name: "C++ (DSA)", icon: <Cpu className="text-blue-600" /> },
    ]
  },
  {
    title: "Tools",
    icon: <Wrench className="w-5 h-5 text-orange-500" />,
    skills: [
      { name: "Git & GitHub", icon: <GitBranch className="text-red-500" /> },
      { name: "Postman", icon: <Globe className="text-orange-500" /> },
      { name: "Vercel", icon: <Cloud className="text-black dark:text-white" /> },
      { name: "Netlify", icon: <Cloud className="text-teal-400" /> }, // ADDED
      { name: "Render", icon: <Cloud className="text-blue-600" /> }, // ADDED
    ]
  }
];

// --- Components ---

const CoreTechCard = ({ name, icon, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: delay * 0.1 }}
    viewport={{ once: true }}
    // UPDATED: Added evening:bg-[#D1D9CF]
    className={`flex flex-col items-center justify-center p-6 rounded-2xl border backdrop-blur-sm shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${color} bg-white/60 dark:bg-gray-800/60 evening:bg-[#D1D9CF]/60 evening:border-evening-secondary`}
  >
    {/* UPDATED: Icon background for evening */}
    <div className="mb-3 p-3 bg-white dark:bg-gray-900 evening:bg-[#E9F0E6] rounded-full shadow-sm">{icon}</div>
    <span className="font-bold text-gray-800 dark:text-gray-100 evening:text-evening-primary">{name}</span>
  </motion.div>
)

const SkillBadge = ({ name, icon }) => (
  // UPDATED: Badge styling for evening mode
  <div className="flex items-center gap-2 px-3 py-2 bg-white/50 dark:bg-gray-800/50 evening:bg-[#E9F0E6]/50 border border-gray-200 dark:border-gray-700 evening:border-gray-400 rounded-lg hover:bg-white hover:border-blue-300 dark:hover:border-blue-500 evening:hover:bg-[#F5F7F5] transition-colors shadow-sm group">
    <span className="group-hover:scale-110 transition-transform duration-300">{icon}</span>
    <span className="text-sm font-medium text-gray-700 dark:text-gray-200 evening:text-evening-primary">{name}</span>
  </div>
)

const CategoryCard = ({ title, icon, skills, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: delay * 0.2 }}
    viewport={{ once: true }}
    // UPDATED: Added evening:bg-[#D1D9CF]
    className="bg-white/40 dark:bg-gray-900/40 evening:bg-[#D1D9CF]/80 backdrop-blur-md border border-white/60 dark:border-white/10 evening:border-gray-400/50 rounded-3xl p-6 shadow-xl flex flex-col h-full"
  >
    <div className="flex items-center gap-3 mb-6 border-b border-gray-200 dark:border-gray-700 evening:border-gray-400 pb-4">
      {/* UPDATED: Icon box for evening */}
      <div className="p-2 bg-white dark:bg-gray-800 evening:bg-[#E9F0E6] rounded-lg shadow-sm">{icon}</div>
      <h3 className="text-lg font-bold text-gray-900 dark:text-white evening:text-evening-primary">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, idx) => (
        <SkillBadge key={idx} name={skill.name} icon={skill.icon} />
      ))}
    </div>
  </motion.div>
)

export default function Skills() {
  return (
    <section 
      id="skills" 
      className="py-20 md:py-32 relative w-screen -ml-[13%] -mr-[10%]"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/963278/pexels-photo-963278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      
      {/* UPDATED OVERLAY: evening gradient matches your theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-gray-50/90 dark:from-gray-900/95 dark:to-gray-800/95 evening:from-evening-background/90 evening:to-evening-background/95"></div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white evening:text-evening-primary mb-4">
              Technical Arsenal
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 evening:bg-evening-secondary mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400 evening:text-evening-foreground max-w-xl mx-auto font-medium">
              A curated list of tools and technologies I use to build scalable, high-performance applications.
            </p>
          </div>
        </FadeInSection>

        {/* 1. Core Stack Highlights (Top Row) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
          {coreStack.map((tech, idx) => (
            <CoreTechCard key={idx} {...tech} delay={idx} />
          ))}
        </div>

        {/* 2. Detailed Categories (Masonry Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((cat, idx) => (
            <CategoryCard key={idx} {...cat} delay={idx} />
          ))}
        </div>

      </div>
    </section>
  )
}