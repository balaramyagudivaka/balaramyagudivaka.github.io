import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, ExternalLink } from 'lucide-react';
import { useScrollAnimation, fadeInUp, fadeInLeft, staggerContainer, staggerItem } from '@/hooks/useScrollAnimation';

const experiences = [
  {
    title: 'Graduate Research Assistant — AI MedRec Project',
    company: 'Stony Brook Medicine',
    period: 'May 2026 – Present',
    achievements: [
      'Contributing to a multi-repo medication-safety research platform (Android capture app, Django REST backend, FastAPI drug-interaction service) integrating AWS Bedrock, Google Gemini, and self-hosted LLMs for medication extraction and OCR pipelines',
      'Diagnosed latency in locally-hosted LLM inference (Hugging Face Transformers / Mistral-7B), identifying per-request model-reload overhead and evaluating vLLM as a serving-engine replacement',
      'Designing a comparative evaluation framework to benchmark structured-output accuracy between AWS Bedrock and self-hosted LLMs for medication data extraction',
      'Collaborating on GPU-accelerated model serving on A100 environments to cut inference latency for real-time medical data processing',
    ],
  },
  {
    title: 'Healthcare Data Researcher — TriNetX / N3C Research',
    company: 'Stony Brook Medicine',
    period: 'Apr 2026 – Present',
    achievements: [
      'Analyzing large-scale, de-identified EHR data to study treatment effectiveness and clinical outcomes in patients with Type 2 diabetes',
      'Building patient cohorts from diagnoses, medications, demographics, lab measurements, and outcome definitions',
      'Applying propensity score matching and overlap weighting, and assessing covariate balance with standardized mean differences',
      'Running survival and competing-risk analyses (Cox proportional hazards, Fine–Gray) in R for longitudinal outcomes',
    ],
  },
  {
    title: 'Research Assistant — Medical Imaging AI',
    company: 'SRM University, AP',
    period: 'Jan 2025 – May 2025',
    achievements: [
      "Built and trained ConvNeXt models to classify Alzheimer's dementia stages across 40,000+ MRI images, achieving up to 86% accuracy",
      'Handled data preprocessing, cleaning, and feature preparation for imaging pipelines',
      'Evaluated and compared models using accuracy, precision, recall, and F1-score',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'CAMPALIN Innovations',
    period: 'Apr 2024 – May 2025',
    achievements: [
      'Developed backend components in Python and Flask supporting application workflows and ML-based features',
      'Built REST API endpoints for data processing, model inference, and service-to-service communication',
      'Designed reusable Python modules for validation, preprocessing, and response handling to improve maintainability',
      'Optimized backend logic and preprocessing workflows, improving overall system performance by 30%',
    ],
  },
  {
    title: 'Research Assistant — NLP for Healthcare',
    company: 'SRM University, AP',
    period: 'Aug 2023 – Dec 2023',
    achievements: [
      'Cleaned and preprocessed large-scale patient drug review text for model training',
      'Built and benchmarked RNN, LSTM, CNN, and fine-tuned BERT models, achieving 97% classification accuracy',
      'Co-authored "Sentimental Analysis on Drug Reviews Using Fine-Tuned Transformers," published at IEEE ICCCNT 2024',
    ],
    researchLinks: [
      {
        title: 'Sentimental Analysis on Drug Reviews',
        url: 'https://ieeexplore.ieee.org/document/10725177',
      },
    ],
  },
  {
    title: 'Data Analyst Intern',
    company: 'APSSDC',
    period: 'Jan 2023 – Jun 2023',
    achievements: [
      'Automated data processing and reporting pipelines using Python and SQL, reducing manual effort by 25%',
      'Optimized analytical scripts using OOP and performance profiling for better runtime efficiency and maintainability',
      'Applied statistical analysis to derive actionable insights supporting data-driven decision-making',
    ],
  },
];

export const ExperienceSection = () => {
  const { ref, isInView } = useScrollAnimation({ margin: "-80px" });

  return (
    <section id="experience" className="py-24 bg-secondary/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Real-world experience driving measurable impact
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Animated timeline line */}
            <motion.div 
              className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary to-primary/50 hidden md:block"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              style={{ originY: 0 }}
            />

            <motion.div 
              className="space-y-8"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title + exp.company}
                  variants={staggerItem}
                  className="relative"
                >
                  {/* Animated timeline dot */}
                  <motion.div 
                    className="absolute left-6 top-6 w-5 h-5 rounded-full bg-primary border-4 border-background hidden md:block"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.5, type: "spring", stiffness: 200 }}
                  />

                  <motion.div 
                    className="glass-card p-6 md:ml-16 hover:border-primary/50 transition-all duration-300 group"
                    whileHover={{ x: 8, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                      <div className="flex items-center gap-3 mb-2 sm:mb-0">
                        <motion.div 
                          className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors md:hidden"
                          whileHover={{ rotate: 5 }}
                        >
                          <Briefcase className="h-4 w-4 text-primary" />
                        </motion.div>
                        <div>
                          <h3 className="font-semibold text-lg">{exp.title}</h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </div>

                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start gap-3 text-muted-foreground"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.2 + i * 0.1 + 0.5 }}
                        >
                          <TrendingUp className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {exp.researchLinks && (
                      <motion.div 
                        className="mt-4 pt-4 border-t border-border"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: index * 0.2 + 0.8 }}
                      >
                        <p className="text-xs text-muted-foreground mb-2">Research Publications:</p>
                        <div className="flex flex-wrap gap-3">
                          {exp.researchLinks.map((link, i) => (
                            <motion.a
                              key={i}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors"
                              whileHover={{ scale: 1.05, x: 3 }}
                            >
                              <ExternalLink className="h-3 w-3" />
                              {link.title}
                            </motion.a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
