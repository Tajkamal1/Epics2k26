import { motion } from 'framer-motion';
import { Shield, Mail, Phone, MapPin, Code, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="relative py-16 sm:py-20 overflow-hidden">
      <div className="container relative z-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {/* Department Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <img src="/logo.png" alt="EPICS 2026 Logo" className="w-10 h-10 object-contain" />
              </div>
              <div>
                <h3 className="font-orbitron text-xl font-bold text-gradient-gold">
                  EPICS 2026
                </h3>
                <p className="font-rajdhani text-sm text-muted-foreground">
                  Cyber Security Department
                </p>
              </div>
            </div>
            
            <p className="font-rajdhani text-foreground/70 leading-relaxed mb-6">
              A premier technical symposium showcasing innovation, creativity, 
              and excellence in the field of cyber security and technology.
            </p>
            
            <div className="space-y-3">
              <a 
                href="mailto:diwakarvp@gmail.com" 
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="font-space text-sm">diwakarvp@gmail.com</span>
              </a>
              <a 
                href="tel:7207058526" 
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-space text-sm">7207058526</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span className="font-space text-sm">Madanapalle, Anagallu, Madanapalle Institute of Technology and Science - 517325</span>
              </div>
            </div>
          </motion.div>



          {/* Developer Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-orbitron text-lg font-semibold text-foreground mb-6">
              Website Developers
            </h4>
            
            <div className="space-y-4">
              {[
                {
                  name: 'G.Tajkamal',
                  role: 'Web Developer',
                  github: 'https://github.com/Tajkamal1',
                  linkedin: 'https://www.linkedin.com/in/gagguturu-tajkamal-18191b2b6',
                  email: 'gagguturutajkamal06@gmail.com'
                },
                {
                  name: 'Gandhodi Mouresh',
                  role: 'Web Developer',
                  github: 'https://github.com/mouresh',
                  linkedin: 'https://www.linkedin.com/in/gandhodi-mouresh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
                  email: 'mourishroyal@gmail.com'
                },
                {
                  name: 'Kiran Kumar Reddy',
                  role: 'Web Developer',
                  github: 'https://github.com/Leesec01',
                  linkedin: 'https://www.linkedin.com/in/kiransavireddy/',
                  email: 'kiransavireddy@gmail.com'
                }
              ].map((developer, index) => (
                <div 
                  key={developer.name}
                  className="card-cyber rounded-xl p-4 bg-secondary/30 border border-primary/20"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 flex items-center justify-center">
                      <Code className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-space font-medium text-foreground">
                        {developer.name}
                      </p>
                      <p className="font-rajdhani text-xs text-primary/80">
                        {developer.role}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mt-3">
                    <a 
                      href={developer.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${developer.name} GitHub profile`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                    </a>
                    <a 
                      href={developer.linkedin} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${developer.name} LinkedIn profile`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                    <a 
                      href={`mailto:${developer.email}`} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`Email ${developer.name}`}
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-primary/10"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="font-rajdhani text-sm text-muted-foreground">
              © 2026 EPICS - Cyber Security Department. All rights reserved.
            </p>
            
            <p className="font-rajdhani text-sm text-muted-foreground flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-primary animate-pulse" /> for innovation
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
