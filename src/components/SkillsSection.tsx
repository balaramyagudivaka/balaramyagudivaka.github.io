import { motion } from 'framer-motion';
import { Code, Database, Brain, Wrench, BarChart3, Cloud, Server } from 'lucide-react';
import { useScrollAnimation, fadeInUp, staggerContainer, staggerItem } from '@/hooks/useScrollAnimation';

const skillCategories = [
  {
    title: 'AI / ML & LLMs',
    icon: Brain,
    skills: ['PyTorch', 'TensorFlow', 'Keras', 'Hugging Face Transformers', 'QLoRA / PEFT', 'RAG', 'FAISS', 'LangChain', 'LlamaIndex', 'vLLM', 'LLM Evaluation', 'NLP', 'Computer Vision'],
  },
  {
    title: 'Data Science & Statistics',
    icon: BarChart3,
    skills: ['Pandas', 'NumPy', 'scikit-learn', 'XGBoost', 'Statistical Modeling', 'Causal Inference', 'Propensity Score Matching', 'Survival Analysis', 'Time Series', 'NLTK', 'spaCy'],
  },
  {
    title: 'Software Engineering',
    icon: Server,
    skills: ['Flask', 'FastAPI', 'Django REST', 'REST APIs', 'React', 'TypeScript', 'Git / GitHub', 'GitHub Actions (CI/CD)', 'Docker', 'OOP', 'Testing & Profiling'],
  },
  {
    title: 'Programming Languages',
    icon: Code,
    skills: ['Python', 'R', 'SQL', 'C/C++', 'JavaScript', 'TypeScript', 'HTML/CSS'],
  },
  {
    title: 'Cloud & Data Platforms',
    icon: Cloud,
    skills: ['AWS Bedrock', 'Google Cloud (GCP)', 'Google Gemini API', 'Snowflake', 'Databricks', 'ETL Pipelines', 'EHR Data (TriNetX / N3C)'],
  },
  {
    title: 'Visualization & Tools',
    icon: Wrench,
    skills: ['Tableau', 'Power BI', 'Matplotlib', 'Seaborn', 'Plotly', 'Jupyter', 'Google Colab', 'Excel', 'VS Code'],
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
            Tools I use across AI/ML, data science, and software engineering
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
