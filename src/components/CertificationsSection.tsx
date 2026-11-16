import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { useScrollAnimation, fadeInUp, staggerContainer, staggerItem } from '@/hooks/useScrollAnimation';

const certifications = [
  { title: 'Google Cloud Professional Data Engineer Cert Prep', issuer: 'LinkedIn Learning', date: 'Feb 2026', skills: ['Data Engineering', 'Google Cloud (GCP)'] },
  { title: 'Introduction to Career Skills in Data Analytics', issuer: 'LinkedIn Learning', date: null, skills: ['Data Analytics', 'Tech Career Skills'] },
  { title: 'AI Fundamentals with IBM SkillsBuild', issuer: 'Cisco Networking Academy', date: 'Sep 2025', skills: ['AI & Data Science'] },
  { title: 'Introduction to Data Science', issuer: 'Cisco Networking Academy', date: 'Sep 2025', skills: ['Data Science'] },
  { title: 'What Is Generative AI', issuer: 'LinkedIn Learning', date: 'Oct 2024', skills: ['Generative AI'] },
  { title: '21st Century Employability Skills Program – Advanced', issuer: 'APSSDC · Wadhwani Foundation', date: 'Mar 2024', skills: ['Professional Skills'] },
  { title: 'Data Analysis Using Python', issuer: 'APSSDC', date: 'Aug 2023', skills: ['Python', 'Data Analysis'] },
  { title: 'Machine Learning with Python', issuer: 'CAMPALIN Innovations', date: 'May 2023', skills: ['Machine Learning', 'Python'] },
];

export const CertificationsSection = () => {
  const { ref, isInView } = useScrollAnimation({ margin: "-80px" });

  return (
    <section id="certifications" className="py-24 bg-secondary/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Licenses & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Continuous learning across data, cloud, and AI
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glass-card p-5 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold group-hover:text-primary transition-colors">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {cert.issuer}{cert.date ? ` • ${cert.date}` : ''}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {cert.skills.map((skill) => (
                      <span key={skill} className="px-2 py-0.5 text-xs rounded-full bg-secondary text-muted-foreground">
                        {skill}
                      </span>
                    ))}
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
