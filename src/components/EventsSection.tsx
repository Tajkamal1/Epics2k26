import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Brain, FileText, Image, Briefcase, 
  Film, Map, Camera, Gamepad2, Bug, Star
} from 'lucide-react';
import EventCard from './EventCard';

const technicalEvents = [
  {
    title: 'Mind Flayer',
    description: 'Test your knowledge in cybersecurity, programming, and emerging technologies. Battle against the best minds in this intense quiz competition.',
    coordinator: 'Rohini - +91 89772 90071',
    icon: Brain,
    registerUrl: 'https://docs.google.com/forms',
  },
  {
    title: 'Paper Presentation',
    description: 'Present your research papers on cutting-edge topics in cyber security, AI, blockchain, and more.',
    coordinator: 'Meghana - +91 76708 69707',
    icon: FileText,
    registerUrl: 'https://docs.google.com/forms',
  },
  {
    title: 'Poster Presentation',
    description: 'Visualize your ideas through creative posters and innovative concepts.',
    coordinator: 'Ramya - +91 83097 48619',
    icon: Image,
    registerUrl: 'https://docs.google.com/forms',
  },
  {
    title: 'Project Expo',
    description: 'Showcase your innovative projects and prototypes to the audience.',
    coordinator: 'Deva Sai Nandhini - +91 93921 94979',
    icon: Briefcase,
    registerUrl: 'https://docs.google.com/forms',
  },
  {
    title: 'Bug Fixers',
    description: 'Identify and debug errors in code within the given time.',
    coordinator: 'A Roopa - +91 90321 28995',
    icon: Bug,
    registerUrl: 'https://docs.google.com/forms',
  },
];

const nonTechnicalEvents = [
  {
    title: 'Cut & Capture',
    description: 'Identify movies, decode dialogues, and prove your cinematic knowledge.',
    coordinator: 'Rupesh - +91 91776 08098',
    icon: Film,
    registerUrl: 'https://docs.google.com/forms',
  },
  {
    title: 'Mystery Trail',
    description: 'Solve clues and puzzles across the campus in a fun treasure hunt.',
    coordinator: 'Deepak Agarwal - +91 94947 61210',
    icon: Map,
    registerUrl: 'https://docs.google.com/forms',
  },
  {
    title: 'Reels & Photo',
    description: 'Show your creativity through photography and reel making.',
    coordinator: 'C Harshit - +91 79819 24992',
    icon: Camera,
    registerUrl: 'https://docs.google.com/forms',
  },
  {
    title: 'Chill & Thril',
    description: 'Fun filled entertainment event with exciting games and activities.',
    coordinator: 'Akhil - +91 81212 42095',
    icon: Star,
    registerUrl: 'https://docs.google.com/forms',
  },

  // --------- E-SPORTS EVENTS AS SEPARATE CARDS (AT LAST) ---------

  {
    title: 'Free Fire',
    description: 'Join the ultimate Free Fire battle and prove your squad is the best among all teams.',
    coordinator: 'SaiNath - +91 93478 63704 , Uday Kiran - +91 93928 85747',
    icon: Gamepad2,
    registerUrl: 'https://docs.google.com/forms',
  },

  {
    title: 'PUBG',
    description: 'Compete in intense PUBG matches and showcase your survival and strategy skills.',
    coordinator: 'Sivaraj Kumar - +91 86395 16459',
    icon: Gamepad2,
    registerUrl: 'https://docs.google.com/forms',
  },

  {
    title: 'Ludo',
    description: 'A fun and strategic Ludo competition. Roll the dice and win exciting prizes!',
    coordinator: 'Shafiulla - +91 79972 18818',
    icon: Gamepad2,
    registerUrl: 'https://docs.google.com/forms',
  },
];

const EventsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="events" className="relative py-24 sm:py-32 overflow-hidden" ref={ref}>
      <div className="container relative z-10 px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="font-rajdhani text-primary tracking-widest uppercase text-sm mb-4 block">
            Explore & Participate
          </span>
          
          <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-gold glow-gold mb-6">
            Event Lineup
          </h2>

          <p className="max-w-2xl mx-auto font-rajdhani text-lg text-foreground/70">
            From technical brilliance to unlimited fun,  
            EPICS 2026 offers something for everyone.
          </p>
        </motion.div>

        {/* Technical Events */}
        <div className="mb-20">
          <h3 className="font-orbitron text-2xl font-bold mb-6">
            Technical Events
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalEvents.map((event, index) => (
              <EventCard
                key={event.title}
                {...event}
                category="technical"
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Non-Technical Events */}
        <div>
          <h3 className="font-orbitron text-2xl font-bold mb-6">
            Non-Technical Events
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {nonTechnicalEvents.map((event, index) => (
              <EventCard
                key={event.title}
                {...event}
                category="non-technical"
                index={index + 4}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default EventsSection;
