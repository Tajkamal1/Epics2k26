import { motion } from 'framer-motion';
import { Shield, Mail, Phone, MapPin, Code, Heart, Github, Linkedin, Crown } from 'lucide-react';

const Footer = () => {
  const developers = [
    {
      name: 'G.Tajkamal',
      role: 'Web Developer',
      main: true,
      github: 'https://github.com/Tajkamal1',
      linkedin: 'https://www.linkedin.com/in/gagguturu-tajkamal-18191b2b6',
      email: 'gagguturutajkamal06@gmail.com'
    },
    {
      name: 'Gandhodi Mouresh',
      role: 'Web Developer',
      main: false,
      github: 'https://github.com/mouresh',
      linkedin: 'https://www.linkedin.com/in/gandhodi-mouresh',
      email: 'mourishroyal@gmail.com'
    },
    {
      name: 'Kiran Kumar Reddy',
      role: 'Web Developer',
      main: false,
      github: 'https://github.com/Leesec01',
      linkedin: 'https://www.linkedin.com/in/kiransavireddy/',
      email: 'kiransavireddy@gmail.com'
    }
  ];

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
                  Department of CSE(Cyber Security) 
                </p>
              </div>
            </div>
            
            <p className="font-rajdhani text-foreground/70 leading-relaxed mb-6">
              A premier technical symposium showcasing innovation, creativity, 
              and excellence in the field of cyber security and technology.
            </p>
            
            <div className="space-y-3">
              <a 
                href="mailto:epics2k26@mits.ac.in" 
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="font-space text-sm">epics2k26@mits.ac.in</span>
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
                <span className="font-space text-sm">
                  Madanapalle, Anagallu, Madanapalle Institute of Technology and Science - 517325
                </span>
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
              {developers.map((developer) => (
                <div 
                  key={developer.name}
                  className="card-cyber rounded-xl p-4 bg-secondary/30 border border-primary/20"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 flex items-center justify-center relative">
                      <Code className="w-5 h-5 text-primary" />
                      {developer.main && (
                        <Crown className="w-4 h-4 text-yellow-400 absolute -top-1 -right-1" title="Main Developer" />
                      )}
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

                  <div className="flex gap-3 mt-3">
                    <a 
                      href={developer.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      title="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a 
                      href={developer.linkedin} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      title="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href={`mailto:${developer.email}`} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      title="Email"
                    >
                      <Mail className="w-5 h-5" />
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
            
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

