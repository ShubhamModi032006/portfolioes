import { motion } from "framer-motion"
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
      className="py-24 md:py-32 relative w-screen left-1/2 -translate-x-1/2 min-h-[50vh] flex flex-col justify-center overflow-hidden bg-background text-foreground transition-colors"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90 pointer-events-none"></div>

      <div className="relative z-10 w-full">
        
        {/* Header */}
        <FadeInSection>
          <div className="text-center mb-16 px-4">
            <h2 className="text-xl md:text-2xl font-bold tracking-widest uppercase text-primary mb-2">
              What I Do
            </h2>
            <div className="w-12 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
        </FadeInSection>

        {/* --- Marquee Section --- */}
        <div className="flex flex-col gap-8 md:gap-12 w-full">

          {/* Row 1: Moving Left (Filled Text) */}
          <div className="w-full relative flex overflow-hidden -rotate-2 bg-card/70 backdrop-blur-sm py-6 border-y border-border/60 shadow-sm scale-110">
            <motion.div
              className="flex whitespace-nowrap"
              variants={marqueeVariants}
              animate="animate"
              custom="left"
            >
              {[...Array(6)].map((_, i) => (
                <span 
                  key={i} 
                  className="text-6xl md:text-8xl font-black text-primary mr-16"
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
                  className="text-6xl md:text-8xl font-black mr-16 bg-clip-text stroke-text"
                  style={{
                    WebkitTextStroke: '2px',
                    WebkitTextStrokeColor: 'currentColor', 
                  }}
                >
                  <span className="text-muted-foreground/50">
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