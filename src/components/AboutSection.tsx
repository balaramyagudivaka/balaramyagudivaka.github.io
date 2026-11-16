import { motion } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, MapPin, Sparkles } from 'lucide-react';
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '@/hooks/useScrollAnimation';

const educationCards = [
  {
    icon: GraduationCap,
    title: 'Stony Brook University',
    subtitle: 'MS in Data Science • Aug 2025 – May 2027',
    detail: 'Stony Brook, NY • Statistical Learning, Big Data Systems, Statistical Computing'
  },
  {
    icon: GraduationCap,
    title: 'SRM University, AP',
    subtitle: 'BTech in CSE, Big Data Analytics • GPA: 3.38/4.00',
    detail: 'Sep 2021 – May 2025 • Andhra Pradesh, India'
  },
  {
    icon: Sparkles,
    title: 'Key Strengths',
    subtitle: 'LLMs • RAG • Fine-Tuning • LLM Evaluation • NLP • Healthcare Data',
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
            Building LLM systems for messy, real-world healthcare data
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
                I build <span className="text-foreground font-medium">LLM systems for messy, real-world healthcare data</span> and 
                make sure they hold up in production. I'm an M.S. Data Science student at Stony Brook University and a{' '}
                <span className="text-foreground font-medium">Graduate Research Assistant at Stony Brook Medicine</span>, working on 
                AI MedRec — a medication-safety platform that uses LLMs to extract medication data from clinical documents.
              </motion.p>
              <motion.p 
                className="text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                There I diagnose inference latency in self-hosted Mistral-7B, evaluate <span className="text-foreground font-medium">vLLM</span> for 
                serving, and build a framework to benchmark extraction accuracy between{' '}
                <span className="text-foreground font-medium">AWS Bedrock</span> and self-hosted models. I also do real-world evidence 
                research on de-identified EHR data (TriNetX / N3C) — cohort construction, propensity score matching, and survival analysis.
              </motion.p>
              <motion.p 
                className="text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Before grad school I spent a year as a <span className="text-foreground font-medium">Software Engineer at CAMPALIN Innovations</span>, 
                building Flask backend services for ML features and improving system performance by 30%. I've also published{' '}
                <span className="text-foreground font-medium">two IEEE papers</span> in NLP and computer vision.
              </motion.p>
              <motion.p 
                className="text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <span className="text-primary font-medium">Open to Summer 2027 internships and full-time AI/ML engineering roles starting May 2027.</span>
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
