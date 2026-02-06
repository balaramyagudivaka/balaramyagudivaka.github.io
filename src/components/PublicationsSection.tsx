import { motion } from 'framer-motion';
import { FileText, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation, fadeInUp, staggerContainer, staggerItem } from '@/hooks/useScrollAnimation';

const publications = [
  {
    title: 'Sentimental Analysis on Drug Reviews Using Fined Tuned Transformers',
    venue: '2024 15th International Conference on Computing Communication and Networking Technologies (ICCCNT)',
    publisher: 'IEEE',
    year: '2024',
    link: 'https://ieeexplore.ieee.org/document/10725177',
  },
  {
    title: 'Decoding Visual Complexity: Object Recognition through Vision Transformers and Hybrid Architectures',
    venue: '2024 International Conference on Augmented Reality, Intelligent Systems, and Industrial Automation (ARIIA)',
    publisher: 'IEEE',
    year: '2024',
    link: 'https://ieeexplore.ieee.org/abstract/document/11051814',
  },
  {
    title: 'Alzheimer\'s Disease Detection Using Multi-Modal Deep Learning Approaches',
    venue: 'CVMI, IEEE 2025',
    publisher: 'IEEE',
    year: '2025',
    status: 'Accepted',
    link: 'https://drive.google.com/file/d/1aaRyS6KCYR36nmZFDUuLTC-dOBehF3Vr/view',
  },
];

export const PublicationsSection = () => {
  const { ref, isInView } = useScrollAnimation({ margin: "-80px" });

  return (
    <section id="publications" className="py-24" ref={ref}>
      <div className="section-container">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Research <span className="gradient-text">Publications</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Peer-reviewed contributions to the field of AI and ML
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto space-y-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {publications.map((pub, index) => (
            <motion.div
              key={pub.title}
              variants={staggerItem}
              whileHover={{ x: 8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glass-card p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <FileText className="h-5 w-5 text-primary" />
                </motion.div>
                <div className="flex-grow">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {pub.title}
                    </h3>
                    {pub.status && (
                      <motion.span 
                        className="px-2 py-0.5 text-xs font-medium bg-accent/20 text-accent rounded-full flex-shrink-0"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                      >
                        {pub.status}
                      </motion.span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm mt-2">{pub.venue}</p>
                  <div className="flex items-center gap-4 mt-3">
                    <span className="text-xs text-muted-foreground">
                      {pub.publisher} • {pub.year}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:text-primary/80 p-0 h-auto"
                      asChild
                    >
                      <motion.a 
                        href={pub.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, x: 3 }}
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        View Paper
                      </motion.a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
