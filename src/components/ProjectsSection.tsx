import { motion } from 'framer-motion';
import { ExternalLink, Github, Brain, MessageSquare, Cpu, Microscope, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation, fadeInUp, staggerContainer, staggerItem, scaleIn } from '@/hooks/useScrollAnimation';

const projects = [
  {
    title: 'Fine-Tuning Mistral-7B for Cooking Assistant with RAG',
    icon: MessageSquare,
    problem: 'Building a domain-specific LLM assistant under limited GPU resources',
    description: 'Fine-tuned Mistral-7B-Instruct using QLoRA (LoRA + 4-bit quantization) with custom PyTorch training loop. Implemented RAG using Sentence-BERT and FAISS for improved response grounding, packaged as a containerized RAG application.',
    outcome: 'Reduced validation perplexity from 49 to 2.36, demonstrating strong domain adaptation',
    tech: ['Mistral-7B', 'QLoRA', 'PyTorch', 'RAG', 'FAISS', 'Sentence-BERT'],
    date: 'Dec 2025 – Jan 2026',
    github: 'https://github.com/balaramyagudivaka/Finetuning-Mistral-7B-for-Cooking-Assistant-with-RAG',
  },
  {
    title: 'Global CO₂ Emissions: Drivers, Clusters & Forecasting',
    icon: Globe,
    problem: 'Understanding what drives CO₂ emissions across countries and how well they can be forecast',
    description: 'Statistical and ML analysis of ~2,640 country-years (1990–2022) from Our World in Data. Benchmarked 14 forecasting models on a strict time-based split — linear baselines, Random Forest, XGBoost, MLP, LSTM, TimesFM, PatchTST, and ensembles — plus clustering and panel econometrics.',
    outcome: 'Ridge regression won with test R² = 0.989; found and fixed data leakage, and identified three consistent emission profiles (ARI ≈ 0.7–0.9)',
    tech: ['R', 'Python', 'scikit-learn', 'XGBoost', 'PyTorch', 'TimesFM', 'Clustering'],
    date: 'Spring 2026 · AMS 597',
    github: 'https://github.com/balaramyagudivaka/global-co2-emissions-analysis',
  },
  {
    title: 'Neural Machine Translation with Transformers',
    icon: Cpu,
    problem: 'Building machine translation from scratch using transformer architecture',
    description: 'Created a custom Transformer Encoder-Decoder architecture with 100M parameters. Efficiently utilized Google Colab\'s T4 GPU for training and evaluation.',
    outcome: 'Achieved BLEU score of 6, documented methodology for technical communication',
    tech: ['Transformers', 'PyTorch', 'NLP', 'Encoder-Decoder', 'Google Colab'],
    date: 'Oct 2025 – Nov 2025',
    github: 'https://github.com/balaramyagudivaka/Neural-Machine-Translation-with-Transformers',
  },
  {
    title: 'Patient Database Management Using Blockchain',
    icon: Brain,
    problem: 'Securing sensitive patient data with decentralized technology',
    description: 'Developed a blockchain-based system for secure patient database management, ensuring data integrity, privacy, and transparent access control for healthcare providers.',
    outcome: 'Created a secure, tamper-proof patient data management solution',
    tech: ['Blockchain', 'Smart Contracts', 'Healthcare IT', 'Security', 'Database'],
    date: 'Academic Project',
    github: 'https://github.com/balaramyagudivaka/Patient-Database-Management-Using-Blockchain',
  },
  {
    title: 'Stock Market Analysis and Forecasting with Deep Learning',
    icon: Microscope,
    problem: 'Predicting stock market trends using advanced neural networks',
    description: 'Built deep learning models for stock market analysis and forecasting. Implemented time series analysis techniques to predict market movements.',
    outcome: 'Developed accurate forecasting models for stock market prediction',
    tech: ['Deep Learning', 'Time Series', 'LSTM', 'Python', 'Data Analysis'],
    date: 'Academic Project',
    github: 'https://github.com/balaramyagudivaka/Stock-Market-Analysis-and-Forecasting-Deep-Learning',
  },
];

export const ProjectsSection = () => {
  const { ref, isInView } = useScrollAnimation({ margin: "-80px" });

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="section-container">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Hands-on experience building ML systems and research solutions
          </p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glass-card p-6 hover:border-primary/50 transition-all duration-300 group flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <project.icon className="h-5 w-5 text-primary" />
                  </motion.div>
                </div>
                <motion.span 
                  className="text-xs text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {project.date}
                </motion.span>
              </div>

              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-primary/80 font-medium mb-3">
                {project.problem}
              </p>

              <p className="text-muted-foreground text-sm mb-4 flex-grow">
                {project.description}
              </p>

              <motion.div 
                className="p-3 rounded-lg bg-primary/5 border border-primary/10 mb-4"
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-sm">
                  <span className="text-primary font-medium">Outcome:</span>{' '}
                  <span className="text-foreground">{project.outcome}</span>
                </p>
              </motion.div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    className="px-2 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.1 + techIndex * 0.03 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <div className="flex gap-3 mt-auto">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-border hover:border-primary hover:text-primary"
                  asChild
                >
                  <motion.a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </motion.a>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
