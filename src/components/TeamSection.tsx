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
    name: 'M Diwakar',
    position: 'Student Coordinator',
    department: 'Student Coordination',
    description: 'Contact: 7207058526',
    icon: GraduationCap,
    color: 'primary'
  },
  {
    name: 'K. Priya',
    position: 'Student Coordinator',
    department: 'Student Coordination',
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
          <h3 className="text-2xl font-bold mb-6">HOD Cybersecurity</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {groupedMembers['HOD Cybersecurity'].map((member, index) => (
              <div key={index} className="p-6 border rounded-xl text-center">
                <h4 className="text-xl font-bold">{member.name}</h4>
                <p className="text-sm">{member.position}</p>
                <p className="text-sm">{member.department}</p>
                <p className="text-sm mt-2">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Faculty Coordinators */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-6">Faculty Coordinators</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {groupedMembers['Faculty Coordinators'].map((member, index) => (
              <div key={index} className="p-6 border rounded-xl text-center">
                <h4 className="text-xl font-bold">{member.name}</h4>
                <p className="text-sm">{member.position}</p>
                <p className="text-sm">{member.department}</p>
                <p className="text-sm mt-2">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Student Coordinators */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Student Coordinators</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {groupedMembers['Student Coordinators'].map((member, index) => (
              <div key={index} className="p-6 border rounded-xl text-center">
                <h4 className="text-xl font-bold">{member.name}</h4>
                <p className="text-sm">{member.position}</p>
                <p className="text-sm">{member.department}</p>
                <p className="text-sm mt-2">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
