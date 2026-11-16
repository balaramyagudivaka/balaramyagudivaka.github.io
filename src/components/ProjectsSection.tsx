import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Brain, MessageSquare, Cpu, Microscope, Globe, Pill, Activity, Server, Eye, Link2, LayoutTemplate, TrendingUp, Lock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation, fadeInUp, staggerContainer, staggerItem } from '@/hooks/useScrollAnimation';

type Category = 'AI / ML' | 'Data' | 'Software Engineering';

type Project = {
  title: string;
  icon: LucideIcon;
  categories: Category[];
  featured?: boolean;
  problem: string;
  description: string;
  outcome: string;
  tech: string[];
  date: string;
  github?: string;
  paper?: string;
  note?: string;
};

const projects: Project[] = [
  {
    title: 'AI MedRec — LLM Medication Extraction Platform',
    icon: Pill,
    categories: ['AI / ML', 'Software Engineering'],
    featured: true,
    problem: 'Extracting structured medication data from messy clinical documents, reliably and fast enough for real-time use',
    description: 'Research platform at Stony Brook Medicine spanning an Android capture app, a Django REST backend, and a FastAPI drug-interaction service. Integrates AWS Bedrock, Google Gemini, and self-hosted Mistral-7B for medication extraction and OCR pipelines.',
    outcome: 'Traced self-hosted LLM latency to per-request model reloads, evaluated vLLM for serving, and built a framework benchmarking Bedrock vs. self-hosted structured-output accuracy',
    tech: ['LLMs', 'AWS Bedrock', 'Gemini', 'Mistral-7B', 'vLLM', 'FastAPI', 'Django REST', 'Android'],
    date: 'May 2026 – Present',
    note: 'Research project · code private',
  },
  {
    title: 'Fine-Tuning Mistral-7B with QLoRA + RAG',
    icon: MessageSquare,
    categories: ['AI / ML'],
    featured: true,
    problem: 'Building a domain-specific LLM assistant on a single free 16 GB GPU',
    description: 'Fine-tuned Mistral-7B-Instruct with QLoRA (4-bit NF4 + LoRA adapters) using a hand-written PyTorch training loop (AdamW, warmup, gradient clipping). Added RAG with MiniLM sentence embeddings and a FAISS index that injects the top-3 passages into the prompt.',
    outcome: 'Trained only 13.6M parameters (0.19%) and cut held-out perplexity from 49.05 to 19.76 (−59.7%)',
    tech: ['Mistral-7B', 'QLoRA / PEFT', 'PyTorch', 'Hugging Face', 'RAG', 'FAISS'],
    date: 'Dec 2025 – Jan 2026',
    github: 'https://github.com/balaramyagudivaka/Finetuning-Mistral-7B-for-Cooking-Assistant-with-RAG',
  },
  {
    title: 'Real-World Evidence Study on EHR Data (TriNetX / N3C)',
    icon: Activity,
    categories: ['Data'],
    featured: true,
    problem: 'Measuring treatment effectiveness for Type 2 diabetes from large-scale, de-identified EHR data',
    description: 'Built patient cohorts from diagnoses, medications, demographics, labs, and outcome definitions. Applied propensity score matching and overlap weighting, checked covariate balance with standardized mean differences, and ran survival analyses in R.',
    outcome: 'Delivered causal-inference-ready cohorts with Cox proportional hazards and Fine–Gray competing-risk models for longitudinal outcomes',
    tech: ['R', 'Causal Inference', 'Propensity Scores', 'Survival Analysis', 'EHR Data'],
    date: 'Apr 2026 – Present',
    note: 'Research project · data access restricted',
  },
  {
    title: 'Global CO₂ Emissions: Drivers, Clusters & Forecasting',
    icon: Globe,
    categories: ['Data', 'AI / ML'],
    featured: true,
    problem: 'Understanding what drives CO₂ emissions across countries and how well they can be forecast',
    description: 'Statistical and ML analysis of ~2,640 country-years (1990–2022). Benchmarked 14 forecasting models on a strict time-based split — linear baselines, Random Forest, XGBoost, MLP, LSTM, TimesFM, PatchTST, and ensembles — plus clustering and panel econometrics.',
    outcome: 'Ridge regression won with test R² = 0.989; found and fixed data leakage, and identified three consistent emission profiles (ARI ≈ 0.7–0.9)',
    tech: ['Python', 'R', 'scikit-learn', 'XGBoost', 'PyTorch', 'TimesFM', 'Clustering'],
    date: 'Spring 2026',
    github: 'https://github.com/balaramyagudivaka/global-co2-emissions-analysis',
  },
  {
    title: 'ML Inference Backend Services',
    icon: Server,
    categories: ['Software Engineering'],
    problem: 'Serving ML features through maintainable, performant backend APIs',
    description: 'Built Python/Flask backend components and REST endpoints for data processing, model inference, and service-to-service communication at CAMPALIN Innovations, with reusable modules for validation, preprocessing, and response handling.',
    outcome: 'Improved overall system performance by 30% by optimizing backend logic and preprocessing workflows',
    tech: ['Python', 'Flask', 'REST APIs', 'ML Inference'],
    date: 'Apr 2024 – May 2025',
    note: 'Industry work · code private',
  },
  {
    title: 'Drug Review Sentiment Analysis with Fine-Tuned BERT',
    icon: Brain,
    categories: ['AI / ML'],
    problem: 'Classifying sentiment in large-scale patient drug reviews',
    description: 'Cleaned and preprocessed large-scale drug review text, then built and benchmarked RNN, LSTM, CNN, and fine-tuned BERT models.',
    outcome: 'Reached 97% classification accuracy; published at IEEE ICCCNT 2024',
    tech: ['BERT', 'Transformers', 'NLP', 'LSTM', 'CNN', 'PyTorch'],
    date: 'Aug 2023 – Dec 2023',
    paper: 'https://ieeexplore.ieee.org/document/10725177',
  },
  {
    title: "Alzheimer's Stage Classification from MRI",
    icon: Microscope,
    categories: ['AI / ML'],
    problem: 'Classifying dementia stages from brain MRI scans',
    description: 'Built and trained ConvNeXt models on 40,000+ MRI images, including preprocessing and feature preparation for the imaging pipeline, and compared models on precision, recall, and F1.',
    outcome: 'Achieved up to 86% accuracy across dementia stages',
    tech: ['ConvNeXt', 'Computer Vision', 'Deep Learning', 'Medical Imaging'],
    date: 'Jan 2025 – May 2025',
  },
  {
    title: 'Object Recognition with Vision Transformers',
    icon: Eye,
    categories: ['AI / ML'],
    problem: 'Comparing Vision Transformers and hybrid CNN–Transformer architectures for object recognition',
    description: 'Studied ViT and hybrid architectures for visual recognition tasks and analyzed where each performs best.',
    outcome: 'Published at IEEE ARIIA 2024 (proceedings 2025)',
    tech: ['Vision Transformers', 'CNNs', 'Computer Vision', 'PyTorch'],
    date: '2024',
    paper: 'https://ieeexplore.ieee.org/abstract/document/11051814',
  },
  {
    title: 'Neural Machine Translation (English → Tamil) from Scratch',
    icon: Cpu,
    categories: ['AI / ML'],
    problem: 'Implementing "Attention Is All You Need" for a low-resource language pair',
    description: 'Built a character-level Transformer encoder–decoder (4 encoder + 4 decoder layers, ~21M parameters) in PyTorch, alongside attention-based seq2seq baselines, trained on a Colab T4 GPU.',
    outcome: 'Working end-to-end translation model with documented architecture and training methodology',
    tech: ['Transformers', 'PyTorch', 'TensorFlow', 'NLP', 'Attention'],
    date: 'Oct 2025 – Nov 2025',
    github: 'https://github.com/balaramyagudivaka/Neural-Machine-Translation-with-Transformers',
  },
  {
    title: 'Blockchain-Based Patient Data Management',
    icon: Link2,
    categories: ['Software Engineering'],
    problem: 'Securing medical records and speeding up bill and insurance-claim processing',
    description: 'Full-stack web system with separate hospital, doctor, and insurance portals (HTML, CSS, PHP), with blockchain integration via Ganache and Truffle smart contracts for tamper-proof records.',
    outcome: 'Tamper-evident record keeping with role-based portals for hospitals, doctors, and insurers',
    tech: ['Truffle', 'Ganache', 'PHP', 'HTML/CSS', 'Smart Contracts'],
    date: 'Academic Project',
    github: 'https://github.com/balaramyagudivaka/Patient-Database-Management-Using-Blockchain',
  },
  {
    title: 'Personal Portfolio with CI/CD',
    icon: LayoutTemplate,
    categories: ['Software Engineering'],
    problem: 'A fast, responsive portfolio that deploys itself',
    description: 'React + TypeScript single-page app built with Vite, Tailwind CSS, shadcn/ui, and Framer Motion, with an EmailJS contact form and a GitHub Actions pipeline that builds and publishes to GitHub Pages on every push.',
    outcome: 'Zero-touch deployments: every commit to main is live within minutes',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'GitHub Actions'],
    date: '2026',
    github: 'https://github.com/balaramyagudivaka/balaramyagudivaka.github.io',
  },
  {
    title: 'Stock Market Analysis & Forecasting',
    icon: TrendingUp,
    categories: ['Data', 'AI / ML'],
    problem: 'Analyzing and forecasting stock prices for large tech companies',
    description: 'Exploratory analysis of trend and seasonality for Google, Microsoft, IBM, and Amazon (2006–2018), followed by GRU-based time-series forecasting in PyTorch.',
    outcome: 'GRU forecasts that track historical price movements on held-out data',
    tech: ['PyTorch', 'GRU', 'Time Series', 'Pandas', 'Plotly'],
    date: 'Academic Project',
    github: 'https://github.com/balaramyagudivaka/Stock-Market-Analysis-and-Forecasting-Deep-Learning',
  },
];

const filters: ('All' | Category)[] = ['All', 'AI / ML', 'Data', 'Software Engineering'];

export const ProjectsSection = () => {
  const { ref, isInView } = useScrollAnimation({ margin: "-80px" });
  const [filter, setFilter] = useState<'All' | Category>('All');

  const visible = filter === 'All' ? projects : projects.filter((p) => p.categories.includes(filter));

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="section-container">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto">
            LLM systems, data science, and software engineering — from research to production
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10" role="tablist" aria-label="Filter projects">
          {filters.map((f) => {
            const count = f === 'All' ? projects.length : projects.filter((p) => p.categories.includes(f)).length;
            const active = filter === f;
            return (
              <button
                key={f}
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                  active
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-secondary/50 text-muted-foreground border-border hover:border-primary hover:text-primary'
                }`}
              >
                {f} <span className="opacity-70">({count})</span>
              </button>
            );
          })}
        </div>

        <motion.div
          key={filter}
          className="grid lg:grid-cols-2 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {visible.map((project) => (
            <motion.div
              key={project.title}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glass-card p-6 hover:border-primary/50 transition-all duration-300 group flex flex-col"
            >
              <div className="flex items-start justify-between mb-4 gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <project.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.featured && (
                      <span className="px-2 py-0.5 text-[11px] font-semibold rounded-full bg-primary/15 text-primary border border-primary/30">
                        Featured
                      </span>
                    )}
                    {project.categories.map((c) => (
                      <span key={c} className="px-2 py-0.5 text-[11px] font-medium rounded-full bg-secondary text-muted-foreground">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{project.date}</span>
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

              <div className="p-3 rounded-lg bg-primary/5 border border-primary/10 mb-4">
                <p className="text-sm">
                  <span className="text-primary font-medium">Outcome:</span>{' '}
                  <span className="text-foreground">{project.outcome}</span>
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 mt-auto">
                {project.github && (
                  <Button variant="outline" size="sm" className="border-border hover:border-primary hover:text-primary" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                )}
                {project.paper && (
                  <Button variant="outline" size="sm" className="border-border hover:border-primary hover:text-primary" asChild>
                    <a href={project.paper} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Read Paper
                    </a>
                  </Button>
                )}
                {project.note && (
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Lock className="h-3.5 w-3.5" />
                    {project.note}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
