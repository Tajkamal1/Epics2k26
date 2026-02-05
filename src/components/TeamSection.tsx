import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Shield, 
  Code, 
  GraduationCap, 
  Users,
  User
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
    department: 'Faculty Coordination',
    description: 'Overseeing faculty involvement and academic coordination for the event.',
    icon: Users,
    color: 'accent'
  },
  {
    name: 'Mr. Roni Das',
    position: 'Faculty Coordinator',
    department: 'Faculty Coordination',
    description: 'Managing faculty participation and academic oversight for the event.',
    icon: Users,
    color: 'accent'
  },

  {
    name: 'Ankit Sharma',
    position: 'Lead Developer',
    department: 'Web Development',
    description: 'Architecting the event platform and ensuring seamless user experience.',
    icon: Code,
    color: 'accent'
  },
  {
    name: 'Priya Nair',
    position: 'Frontend Developer',
    department: 'UI/UX Design',
    description: 'Creating stunning interfaces and interactive components for the platform.',
    icon: Code,
    color: 'primary'
  },
  {
    name: 'Rahul Verma',
    position: 'Backend Developer',
    department: 'System Architecture',
    description: 'Building robust backend systems and API integrations.',
    icon: Code,
    color: 'secondary'
  },
  {
    name: 'Sneha Reddy',
    position: 'Student Coordinator',
    department: 'Event Operations',
    description: 'Coordinating student participation and managing event day operations.',
    icon: GraduationCap,
    color: 'accent'
  },
  {
    name: 'Arjun Patel',
    position: 'Student Coordinator',
    department: 'Marketing & Outreach',
    description: 'Promoting the event and engaging with participants across campuses.',
    icon: GraduationCap,
    color: 'primary'
  },
  {
    name: 'Meera Krishnan',
    position: 'Student Coordinator',
    department: 'Technical Support',
    description: 'Providing technical assistance during events and managing equipment.',
    icon: GraduationCap,
    color: 'secondary'
  }
];

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Group members by position category
  const groupedMembers = {
    'HOD Cybersecurity': teamMembers.filter(member => member.position === 'HOD Cybersecurity'),
    'Faculty Coordinators': teamMembers.filter(member => member.position === 'Faculty Coordinator'),
    'Event Coordinators': teamMembers.filter(member => member.position.includes('Developer')),
    'Student Coordinators': teamMembers.filter(member => member.position === 'Student Coordinator')
  };

  return (
    <section id="team" className="relative py-24 sm:py-32 overflow-hidden" ref={ref}>
      <div className="container relative z-10 px-6">
        {/* Section Header */}
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
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-32 h-0.5 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mb-8"
          />
          
          <p className="max-w-2xl mx-auto font-rajdhani text-lg text-foreground/70">
            The dedicated team that makes EPICS 2026 possible through expertise, 
            collaboration, and innovation.
          </p>
        </motion.div>

        {/* HOD Cybersecurity */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-orbitron text-2xl font-bold text-foreground">
                HOD Cybersecurity
              </h3>
              <p className="font-rajdhani text-muted-foreground">
                Leadership and Vision
              </p>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent ml-4" />
          </motion.div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center w-full max-w-6xl">
              {groupedMembers['HOD Cybersecurity'].map((member, index) => (
                <motion.div
                  key={`${member.name}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-secondary/30 border border-primary/20 rounded-xl p-6 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 max-w-xs w-full mx-auto"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary/30 flex items-center justify-center mb-4">
                      <member.icon className="w-10 h-10 text-primary" />
                    </div>
                    <h4 className="font-orbitron text-xl font-bold text-foreground mb-1">
                      {member.name}
                    </h4>
                    <p className="font-rajdhani text-primary text-sm font-semibold mb-1">
                      {member.position}
                    </p>
                    <p className="font-rajdhani text-muted-foreground text-xs mb-2">
                      {member.department}
                    </p>
                    <p className="font-rajdhani text-foreground/70 text-sm">
                      {member.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Faculty Coordinators */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center">
              <Users className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="font-orbitron text-2xl font-bold text-foreground">
                Faculty Coordinators
              </h3>
              <p className="font-rajdhani text-muted-foreground">
                Academic Oversight
              </p>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent ml-4" />
          </motion.div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center w-full max-w-6xl">
              {groupedMembers['Faculty Coordinators'].map((member, index) => (
                <motion.div
                  key={`${member.name}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  className="bg-secondary/30 border border-primary/20 rounded-xl p-6 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 max-w-xs w-full mx-auto"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 border-2 border-accent/30 flex items-center justify-center mb-4">
                      <member.icon className="w-10 h-10 text-accent" />
                    </div>
                    <h4 className="font-orbitron text-xl font-bold text-foreground mb-1">
                      {member.name}
                    </h4>
                    <p className="font-rajdhani text-accent text-sm font-semibold mb-1">
                      {member.position}
                    </p>
                    <p className="font-rajdhani text-muted-foreground text-xs mb-2">
                      {member.department}
                    </p>
                    <p className="font-rajdhani text-foreground/70 text-sm">
                      {member.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>


        {/* Event Coordinators */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center">
              <Code className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="font-orbitron text-2xl font-bold text-foreground">
                Event Coordinators
              </h3>
              <p className="font-rajdhani text-muted-foreground">
                Event Management
              </p>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent ml-4" />
          </motion.div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center w-full max-w-6xl">
              {groupedMembers['Event Coordinators'].map((member, index) => (
                <motion.div
                  key={`${member.name}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                  className="bg-secondary/30 border border-primary/20 rounded-xl p-6 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 max-w-xs w-full mx-auto"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 border-2 border-accent/30 flex items-center justify-center mb-4">
                      <member.icon className="w-10 h-10 text-accent" />
                    </div>
                    <h4 className="font-orbitron text-xl font-bold text-foreground mb-1">
                      {member.name}
                    </h4>
                    <p className="font-rajdhani text-accent text-sm font-semibold mb-1">
                      {member.position}
                    </p>
                    <p className="font-rajdhani text-muted-foreground text-xs mb-2">
                      {member.department}
                    </p>
                    <p className="font-rajdhani text-foreground/70 text-sm">
                      {member.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Student Coordinators */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-orbitron text-2xl font-bold text-foreground">
                Student Coordinators
              </h3>
              <p className="font-rajdhani text-muted-foreground">
                On-ground Support
              </p>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent ml-4" />
          </motion.div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center w-full max-w-6xl">
              {groupedMembers['Student Coordinators'].map((member, index) => (
                <motion.div
                  key={`${member.name}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                  className="bg-secondary/30 border border-primary/20 rounded-xl p-6 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 max-w-xs w-full mx-auto"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary/30 flex items-center justify-center mb-4">
                      <member.icon className="w-10 h-10 text-primary" />
                    </div>
                    <h4 className="font-orbitron text-xl font-bold text-foreground mb-1">
                      {member.name}
                    </h4>
                    <p className="font-rajdhani text-primary text-sm font-semibold mb-1">
                      {member.position}
                    </p>
                    <p className="font-rajdhani text-muted-foreground text-xs mb-2">
                      {member.department}
                    </p>
                    <p className="font-rajdhani text-foreground/70 text-sm">
                      {member.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;