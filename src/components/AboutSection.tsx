import { motion } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, MapPin, Sparkles } from 'lucide-react';
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '@/hooks/useScrollAnimation';

const educationCards = [
  {
    icon: GraduationCap,
    title: 'Stony Brook University',
    subtitle: 'MS in Data Science • Expected Aug 2027',
    detail: 'Stony Brook, NY'
  },
  {
    icon: GraduationCap,
    title: 'SRM University, AP',
    subtitle: 'BTech in CSE, Big Data Analytics • GPA: 3.38/4.00',
    detail: 'Sep 2021 – May 2025'
  },
  {
    icon: Sparkles,
    title: 'Key Strengths',
    subtitle: 'Deep Learning • NLP • Transformers • MLOps • Research',
    detail: null
  }
];

export const AboutSection = () => {
  const { ref, isInView } = useScrollAnimation({ margin: "-80px" });

  return (
    <section id="about" className="py-24" ref={ref}>
      <div className="section-container">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A passionate technologist driven by data and innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInLeft}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="space-y-6">
              <motion.p 
                className="text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                I'm a <span className="text-foreground font-medium">Data Science graduate student</span> at 
                Stony Brook University with a strong foundation in Computer Science and Big Data Analytics 
                from SRM University.
              </motion.p>
              <motion.p 
                className="text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                My expertise spans building <span className="text-foreground font-medium">production-ready ML pipelines</span>, 
                developing <span className="text-foreground font-medium">deep learning models</span> for complex problems, 
                and creating <span className="text-foreground font-medium">data-driven solutions</span> that deliver measurable impact.
              </motion.p>
              <motion.p 
                className="text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                I've published <span className="text-foreground font-medium">IEEE research papers</span>, 
                built transformer architectures from scratch, and optimized data pipelines to reduce 
                processing time by 30%. I thrive at the intersection of research and practical application.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="space-y-6"
          >
            {educationCards.map((card, index) => (
              <motion.div
                key={card.title}
                variants={staggerItem}
                whileHover={{ scale: 1.02, x: 8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass-card p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="p-3 rounded-lg bg-primary/10"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <card.icon className="h-6 w-6 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{card.title}</h3>
                    <p className="text-muted-foreground text-sm">{card.subtitle}</p>
                    {card.detail && (
                      <p className="text-muted-foreground text-xs mt-1">{card.detail}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
