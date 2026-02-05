import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Shield, 
  Users,
  GraduationCap
} from 'lucide-react';

const teamMembers = [
  {
    name: 'SVS Ganga Devi',
    position: 'HOD Cybersecurity',
    department: 'Department Head',
    description: 'Leading the Cybersecurity Department with expertise in network security and threat analysis.',
    icon: Shield,
    color: 'primary'
  },
  {
    name: 'Dr. Sachikanth Dash',
    position: 'Faculty Coordinator',
    description: 'Overseeing faculty involvement and academic coordination for the event.',
    icon: Users,
    color: 'accent'
  },
  {
    name: 'Mr. Roni Das',
    position: 'Faculty Coordinator',
    description: 'Managing faculty participation and academic oversight for the event.',
    icon: Users,
    color: 'accent'
  },

  {
    name: 'M Diwakar',
    position: 'Student Coordinator',
    description: 'Contact: 7207058526',
    icon: GraduationCap,
    color: 'primary'
  },
  {
    name: 'K. Priya',
    position: 'Student Coordinator',
    description: 'Contact: +91 98595 11999',
    icon: GraduationCap,
    color: 'secondary'
  }
];

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const groupedMembers = {
    'HOD Cybersecurity': teamMembers.filter(member => member.position === 'HOD Cybersecurity'),
    'Faculty Coordinators': teamMembers.filter(member => member.position === 'Faculty Coordinator'),
    'Student Coordinators': teamMembers.filter(member => member.position === 'Student Coordinator')
  };

  return (
  <section id="team" className="relative py-24 sm:py-32 overflow-hidden" ref={ref}>
    <div className="container relative z-10 px-6">
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 sm:mb-20"
      >
        <span className="font-rajdhani text-primary tracking-widest uppercase text-sm mb-4 block">
          Meet Our Team
        </span>
        
        <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-gold glow-gold mb-6">
          Behind the Success
        </h2>
        
        <p className="max-w-2xl mx-auto font-rajdhani text-lg text-foreground/70">
          The dedicated team that makes the event possible through expertise and collaboration.
        </p>
      </motion.div>

      {/* HOD Section */}
      <div className="mb-20">
        <h3 className="font-orbitron text-2xl font-bold text-primary mb-8 text-center">
          HOD Cybersecurity
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {groupedMembers['HOD Cybersecurity'].map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="card-cyber p-6 rounded-xl border border-primary/20 bg-secondary/30 text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 flex items-center justify-center">
                <member.icon className="w-7 h-7 text-primary" />
              </div>

              <h4 className="font-space text-xl font-bold text-foreground">
                {member.name}
              </h4>

              <p className="font-rajdhani text-sm text-primary/80">
                {member.position}
              </p>

              <p className="font-rajdhani text-sm text-muted-foreground mt-1">
                {member.department}
              </p>

              <p className="font-rajdhani text-sm text-foreground/70 mt-3">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Faculty Coordinators */}
      <div className="mb-20">
        <h3 className="font-orbitron text-2xl font-bold text-primary mb-8 text-center">
          Faculty Coordinators
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {groupedMembers['Faculty Coordinators'].map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="card-cyber p-6 rounded-xl border border-primary/20 bg-secondary/30 text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 flex items-center justify-center">
                <member.icon className="w-7 h-7 text-primary" />
              </div>

              <h4 className="font-space text-xl font-bold text-foreground">
                {member.name}
              </h4>

              <p className="font-rajdhani text-sm text-primary/80">
                {member.position}
              </p>
              
              <p className="font-rajdhani text-sm text-foreground/70 mt-3">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Student Coordinators */}
      <div>
        <h3 className="font-orbitron text-2xl font-bold text-primary mb-8 text-center">
          Student Coordinators
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {groupedMembers['Student Coordinators'].map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="card-cyber p-6 rounded-xl border border-primary/20 bg-secondary/30 text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 flex items-center justify-center">
                <member.icon className="w-7 h-7 text-primary" />
              </div>

              <h4 className="font-space text-xl font-bold text-foreground">
                {member.name}
              </h4>

              <p className="font-rajdhani text-sm text-primary/80">
                {member.position}
              </p>

              <p className="font-rajdhani text-sm text-foreground/70 mt-3">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  </section>
);
};

export default TeamSection;



