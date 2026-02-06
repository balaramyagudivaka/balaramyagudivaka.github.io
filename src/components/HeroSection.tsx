import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';
import { useRef } from 'react';

export const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);
  // remove aggressive fade so content stays visible while scrolling

  return (
    <section 
      ref={containerRef}
      className="min-h-screen pt-24 md:pt-28 flex items-start justify-center relative overflow-hidden"
      style={{ paddingBottom: '4.5rem' }}
    >
      {/* Animated background with parallax */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        style={{ y: backgroundY, pointerEvents: 'none' }}
      >
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          style={{ pointerEvents: 'none' }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
          style={{ pointerEvents: 'none' }}
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {/* Additional floating orbs */}
        <motion.div 
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-2xl"
          style={{ pointerEvents: 'none' }}
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      <motion.div 
        className="section-container relative z-10"
        style={{ y: textY }}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo with enhanced animations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
            className="mb-8"
          >
            <div className="relative inline-block group">
              {/* Animated glow ring */}
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 rounded-full blur-md"
                style={{ zIndex: 0 }}
                animate={{ 
                  opacity: [0.25, 0.35, 0.25],
                  scale: [1, 1.03, 1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Secondary glow */}
              <motion.div 
                className="absolute -inset-2 bg-gradient-to-tr from-primary/10 to-accent/8 rounded-full blur-xl"
                style={{ zIndex: 0 }}
                animate={{ 
                  opacity: [0.15, 0.22, 0.15]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Profile image container */}
              <div className="relative overflow-hidden rounded-full" style={{ zIndex: 10 }}>
                <img
                  src={profilePhoto}
                  alt="Bala Ramya Gudivaka"
                  className="relative w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 rounded-full object-cover object-top border-2 border-card/60 shadow-lg transition-all duration-500 group-hover:scale-105"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
              Data Scientist • ML Engineer • Software Engineer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Bala Ramya Gudivaka</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance"
          >
            A Data Science graduate student at{' '}
            <span className="text-foreground font-medium">Stony Brook University</span>{' '}
            with a strong foundation in{' '}
            <span className="text-foreground font-medium">machine learning</span>,{' '}
            <span className="text-foreground font-medium">data analytics</span>, and{' '}
            <span className="text-foreground font-medium">software engineering</span>, 
            driven to solve real-world problems through data.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-box"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border hover:border-primary hover:text-primary"
              asChild
            >
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center gap-6 mb-12"
          >
            {[
              { href: "https://github.com/balaramyagudivaka", Icon: Github },
              { href: "https://www.linkedin.com/in/bala-ramya-gudivaka-54731424b/", Icon: Linkedin },
              { href: "mailto:balaramya1553@gmail.com", Icon: Mail }
            ].map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                target={item.href.startsWith('http') ? "_blank" : undefined}
                rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-foreground hover:text-primary transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <item.Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-muted-foreground cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};