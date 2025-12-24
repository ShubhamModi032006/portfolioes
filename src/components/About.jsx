import { motion } from "framer-motion"
import { Code2, Globe, Layout, Server, Gamepad2, FileText, Database } from "lucide-react"
import { Button } from "./ui/Button"
import { useNavigate } from "react-router-dom"
import FadeInSection from "./FadeInSection"

export default function About() {
  const navigate = useNavigate();

  const handleResumeClick = (e) => {
    e.preventDefault();
    navigate('/resume');
  };

  // Animation variants for the Bento Grid items (Cascading effect)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center py-20 relative bg-background text-foreground transition-colors">
      
      <div className="container mx-auto px-4 z-10">
        
        {/* --- Header Section --- */}
        <FadeInSection duration={0.3}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white evening:text-evening-primary mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 evening:bg-evening-secondary mx-auto rounded-full"></div>
            <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-400 evening:text-evening-foreground max-w-2xl mx-auto">
              More than just code—I build digital experiences. Here is a glimpse into my technical world.
            </p>
          </div>
        </FadeInSection>

        {/* --- Bento Grid Layout --- */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >

          {/* 1. Main Bio Card (Spans 2 columns) */}
          <motion.div 
            variants={itemVariants} 
            className="md:col-span-2 p-8 bg-white/40 dark:bg-gray-900/40 backdrop-blur-md border border-white/40 dark:border-white/10 rounded-3xl shadow-xl hover:shadow-2xl  transition-all duration-300"
          >
            <div className="flex items-start gap-5">
              <div className="p-3 bg-zinc-300 dark:bg-blue-900/30 rounded-2xl hidden sm:block">
                <Code2 className="w-8 h-8 text-black dark:text-stone-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">The Developer Journey</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  I'm a Full Stack Developer with a passion for building robust web applications. 
                  My journey started with simple scripts and evolved into architecting complex **MERN stack** solutions like 
                  <span className="text-blue-600 dark:text-blue-400 font-semibold"> FinCtrl</span>.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I don't just write code; I solve problems. Whether it's optimizing backend queries or creating pixel-perfect user interfaces, 
                  I treat every project as a piece of art.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 2. Stats Highlight Card */}
          <motion.div 
            variants={itemVariants} 
            className="p-8 bg-white/40 dark:bg-gray-900/40 backdrop-blur-md border border-white/60 dark:border-white/10 rounded-3xl shadow-xl flex flex-col justify-center items-center text-center hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
              <Globe className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-5xl font-bold text-gray-900 dark:text-white mb-1">#3</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">Full-Stack Projects</p>
          </motion.div>

          {/* 3. Tech Stack: Frontend */}
          <motion.div 
            variants={itemVariants} 
            className="p-8 bg-white/40 dark:bg-gray-900/40 backdrop-blur-md border border-white/60 dark:border-white/10 rounded-3xl shadow-xl hover:border-purple-300 dark:hover:border-purple-700 transition-colors group"
          >
            <div className="mb-4 p-3 bg-purple-100 dark:bg-purple-900/30 w-fit rounded-xl group-hover:scale-110 transition-transform">
              <Layout className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Frontend Engineering</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Creating responsive, interactive experiences.</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-medium px-2.5 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-md border border-purple-100 dark:border-purple-800">React.js</span>
              <span className="text-xs font-medium px-2.5 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-md border border-purple-100 dark:border-purple-800">Tailwind</span>
              <span className="text-xs font-medium px-2.5 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-md border border-purple-100 dark:border-purple-800">Next.js</span>
            </div>
          </motion.div>

          {/* 4. Tech Stack: Backend */}
          <motion.div 
            variants={itemVariants} 
            className="p-8 bg-white/40 dark:bg-gray-900/40 backdrop-blur-md border border-white/60 dark:border-white/10 rounded-3xl shadow-xl hover:border-orange-300 dark:hover:border-orange-700 transition-colors group"
          >
             <div className="mb-4 p-3 bg-orange-100 dark:bg-orange-900/30 w-fit rounded-xl group-hover:scale-110 transition-transform">
              <Server className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Backend Architecture</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Scalable APIs and database management.</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-medium px-2.5 py-1 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 rounded-md border border-orange-100 dark:border-orange-800">Node.js</span>
              <span className="text-xs font-medium px-2.5 py-1 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 rounded-md border border-orange-100 dark:border-orange-800">MongoDB</span>
              <span className="text-xs font-medium px-2.5 py-1 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 rounded-md border border-orange-100 dark:border-orange-800">Express</span>
            </div>
          </motion.div>

          {/* 5. Creative / Games */}
          <motion.div 
            variants={itemVariants} 
            className="p-8 bg-white/40 dark:bg-gray-900/40 backdrop-blur-md border border-white/60 dark:border-white/10 rounded-3xl shadow-xl hover:border-pink-300 dark:hover:border-pink-700 transition-colors group"
          >
             <div className="mb-4 p-3 bg-pink-100 dark:bg-pink-900/30 w-fit rounded-xl group-hover:scale-110 transition-transform">
              <Gamepad2 className="w-6 h-6 text-pink-600 dark:text-pink-400" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Creative & Games</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Pushing logic limits to create games and interactive web clones using  modern web standards.
            </p>
          </motion.div>

        </motion.div>

        {/* --- Resume Button --- */}
        <FadeInSection delay={0.4}>
          <div className="flex justify-center">
            <Button 
              onClick={handleResumeClick}
              className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 evening:bg-evening-primary evening:hover:bg-evening-secondary text-white rounded-full px-8 py-4 text-base font-semibold shadow-lg shadow-gray-900/20 transition-all hover:scale-105 flex items-center gap-2"
            >
              View Full Resume <FileText className="w-4 h-4" />
            </Button>
          </div>
        </FadeInSection>

      </div>
    </section>
  )
}