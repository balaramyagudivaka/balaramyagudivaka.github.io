import { motion } from 'framer-motion';
import { Code, Database, Brain, Wrench, BarChart3 } from 'lucide-react';
import { useScrollAnimation, fadeInUp, staggerContainer, staggerItem } from '@/hooks/useScrollAnimation';

const skillCategories = [
  {
    title: 'Programming',
    icon: Code,
    skills: ['Python', 'R', 'SQL', 'C/C++', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Data & ML Libraries',
    icon: Brain,
    skills: ['Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'NLTK', 'spaCy', 'Transformers', 'XGBoost', 'FAISS', 'QLoRA / PEFT'],
  },
  {
    title: 'Frameworks',
    icon: BarChart3,
    skills: ['PyTorch', 'TensorFlow', 'Keras', 'Hugging Face', 'LangChain', 'LlamaIndex', 'Flask', 'FastAPI', 'Django REST'],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    skills: ['AWS Bedrock', 'Google Gemini', 'vLLM', 'Git/GitHub', 'Docker', 'Tableau', 'Power BI', 'Excel'],
  },
  {
    title: 'Databases & Data',
    icon: Database,
    skills: ['Snowflake', 'Databricks', 'ETL Tools', 'EHR Data (TriNetX / N3C)', 'Survival Analysis', 'Propensity Score Matching'],
  },
];

export const SkillsSection = () => {
  const { ref, isInView } = useScrollAnimation({ margin: "-80px" });

  return (
    <section id="skills" className="py-24 bg-secondary/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A comprehensive toolkit for building data-driven solutions
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={staggerItem}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glass-card p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <motion.div 
                  className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <category.icon className="h-5 w-5 text-primary" />
                </motion.div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span 
                    key={skill} 
                    className="skill-badge"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      delay: index * 0.1 + skillIndex * 0.05,
                      duration: 0.3
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
