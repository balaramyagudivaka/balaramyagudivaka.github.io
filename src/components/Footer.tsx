import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { href: "https://github.com/balaramyagudivaka", Icon: Github },
  { href: "https://www.linkedin.com/in/bala-ramya-gudivaka-54731424b/", Icon: Linkedin },
  { href: "mailto:balaramyag1523@gmail.com", Icon: Mail }
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="py-8 border-t border-border"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div 
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-xl font-bold gradient-text">BRG</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-sm text-muted-foreground">
              © {currentYear} Bala Ramya Gudivaka
            </span>
          </motion.div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                target={link.href.startsWith('http') ? "_blank" : undefined}
                rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="text-muted-foreground hover:text-primary transition-colors"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <link.Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
