import { motion } from "framer-motion"
import { useTheme } from "./ThemeProvider"
import FadeInSection from "./FadeInSection"

const lineOne = "Web Development • UI/UX Design • Backend Architecture • System Design • "
const lineTwo = "MERN Stack • Responsive Frontend • Database Management • API Integration • "

const marqueeVariants = {
  animate: (direction) => ({
    x: direction === "left" ? [0, -1035] : [-1035, 0],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  }),
}

export default function Services() {
  return (
    <section 
      id="services" 
      className="py-24 md:py-32 relative w-screen left-1/2 -translate-x-1/2 min-h-[50vh] flex flex-col justify-center overflow-hidden"
    >
      {/* Background Overlay */}
      <div className="relative z-10 w-full">
        
        {/* Header */}
        <FadeInSection>
          <div className="text-center mb-16 px-4">
            <h2 className="text-xl md:text-2xl font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400 evening:text-evening-primary mb-2">
              What I Do
            </h2>
            <div className="w-12 h-1 bg-gray-900 dark:bg-white evening:bg-evening-secondary mx-auto rounded-full"></div>
          </div>
        </FadeInSection>

        {/* --- Marquee Section --- */}
        <div className="flex flex-col gap-8 md:gap-12 w-full">

          {/* Row 1: Moving Left (Filled Text) */}
          {/* w-full added to ensure the strip goes edge to edge */}
          <div className="w-full relative flex overflow-hidden -rotate-2 bg-white/50 dark:bg-gray-800/50 evening:bg-[#D1D9CF]/50 backdrop-blur-sm py-6 border-y border-gray-200 dark:border-gray-700 evening:border-evening-secondary/30 shadow-sm scale-110">
            <motion.div
              className="flex whitespace-nowrap"
              variants={marqueeVariants}
              animate="animate"
              custom="left"
            >
              {[...Array(6)].map((_, i) => ( // Increased array to 6 to ensure no empty gaps on ultra-wide screens
                <span 
                  key={i} 
                  className="text-6xl md:text-8xl font-black text-gray-900 dark:text-white evening:text-evening-primary mr-16"
                >
                  {lineOne}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Row 2: Moving Right (Outlined Text) */}
          <div className="w-full relative flex overflow-hidden rotate-1 py-4 scale-110">
            <motion.div
              className="flex whitespace-nowrap"
              variants={marqueeVariants}
              animate="animate"
              custom="right"
            >
              {[...Array(6)].map((_, i) => (
                <span 
                  key={i} 
                  className="text-6xl md:text-8xl font-black mr-16 text-transparent bg-clip-text stroke-text evening:text-transparent"
                  style={{
                    WebkitTextStroke: '2px',
                    WebkitTextStrokeColor: 'currentColor', 
                  }}
                >
                  <span className="text-gray-300 dark:text-gray-700 evening:text-evening-primary/30">
                    {lineTwo}
                  </span>
                </span>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}