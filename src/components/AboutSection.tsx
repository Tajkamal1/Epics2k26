import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Users, Trophy, Lightbulb, Target, Rocket } from 'lucide-react';



const AboutSection = () => {
  // disable rendering temporarily
  return null;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section>
      {/* original JSX stays untouched */}
    </section>
  );
};

export default AboutSection;

