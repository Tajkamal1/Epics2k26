import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Brain, FileText, Image, Briefcase, 
  Film, Map, Camera, Gamepad2, Bug, Star
} from 'lucide-react';
import EventCard from './EventCard';

// -------- TECHNICAL EVENTS --------
const technicalEvents = [
  {
    title: 'Mind Flayer',
    description: 'Test your knowledge in cybersecurity, programming, and emerging technologies. Battle against the best minds in this intense quiz competition.',
    coordinator: 'Dr. Arun Kumar',
    icon: Brain,
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSequWKxGlUIpEu28IpfHHlJfJM-iMN6KqC6OacHo_3LkMBEbQ/viewform?usp=publish-editor',
  },
  {
    title: 'Paper Presentation',
    description: 'Present your research papers on cutting-edge topics in cyber security, AI, blockchain, and more. Showcase your academic excellence.',
    coordinator: 'Prof. Priya Sharma',
    icon: FileText,
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc-lTZs2wyme66h1gty_uRyjLgxaqebNKMpxVusPbSD6CAqHg/viewform?usp=sharing&ouid=109325010433421728227',
  },
  {
    title: 'Poster Presentation',
    description: 'Visualize your ideas through creative posters. Communicate complex security concepts in an engaging and innovative format.',
    coordinator: 'Ms. Deepika R',
    icon: Image,
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSda0r2mH-7iqLQiCjcHAnvRfebD18I9mwYRReplfNnBupnczg/viewform?usp=publish-editor',
  },
  {
    title: 'Project Expo',
    description: 'Demonstrate your innovative projects and prototypes. From security tools to IoT solutions, bring your ideas to life.',
    coordinator: 'Mr. Rajesh V',
    icon: Briefcase,
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScPDQp7ieDtpwPAbj4to7DUbhH4K3bzrVBkz9IBkR97Awe4SQ/viewform?usp=publish-editor',
  },
  {
    title: 'Bug Fixers',
    description: 'Debug and fix errors within the given time. Test your problem-solving and programming skills.',
    coordinator: 'A Roopa',
    icon: Bug,
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfBugFixersForm/viewform?usp=publish-editor',
  },
];

// -------- NON-TECHNICAL EVENTS --------
const nonTechnicalEvents = [
  {
    title: 'Cut & Capture',
    description: 'Identify movies, decode dialogues, and prove your cinematic knowledge. A fun-filled event for movie enthusiasts.',
    coordinator: 'Ms. Kavitha S',
    icon: Film,
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScGWcaIjonK__eEBRoWNMRKHSij73vy6VFgeWA7bamK39TTbg/viewform?usp=publish-editor',
  },
  {
    title: 'Mystery Trail',
    description: 'Embark on an exciting adventure across the campus. Solve clues, crack codes, and race to find the hidden treasure.',
    coordinator: 'Mr. Suresh M',
    icon: Map,
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfMlXl2_136aFzSMmCLePDI9sIcImow-rE4tNyqOnzyLkJYZA/viewform?usp=publish-editor',
  },
  {
    title: 'Reels & Photo',
    description: 'Showcase your photography and videography skills. Capture moments, create reels, and let your creativity shine.',
    coordinator: 'Ms. Anitha K',
    icon: Camera,
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdg1cq9-eugDtGEZM66qrM53ToTaJ2EpueHokkLzxeyOEO9pQ/viewform?usp=publish-editor',
  },
  {
    title: 'Chill & Thril',
    description: 'Fun filled event with exciting games and activities to enjoy and relax.',
    coordinator: 'Akhil',
    icon: Star,
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfChillThrilForm/viewform?usp=publish-editor',
  },
];

// -------- E-SPORTS EVENTS --------
const eSportsEvents = [
  {
    title: 'Free Fire',
    description: 'Battle it out in the ultimate Free Fire tournament.',
    coordinator: 'SaiNath & Uday Kiran',
    icon: Gamepad2,
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScfFreeFireForm/viewform?usp=publish-editor',
  },
  {
    title: 'PUBG',
    description: 'Compete in intense PUBG matches and prove your squad.',
    coordinator: 'Sivaraj Kumar',
    icon: Gamepad2,
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScPUBGForm/viewform?usp=publish-editor',
  },
  {
    title: 'Ludo',
    description: 'A fun and strategic Ludo competition.',
    coordinator: 'Shafiulla',
    icon: Gamepad2,
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScLudoForm/viewform?usp=publish-editor',
  },
];

const EventsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="events" className="relative py-24 sm:py-32 overflow-hidden" ref={ref}>
      <div className="container relative z-10 px-6">
        {/* Section Header */}
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
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-32 h-0.5 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mb-8"
          />
          
          <p className="max-w-2xl mx-auto font-rajdhani text-lg text-foreground/70">
            From brain-teasing technical challenges to fun-filled entertainment, 
            EPICS 2026 offers something for everyone.
          </p>
        </motion.div>

        {/* Technical Events */}
        <div className="mb-20">
          <h3 className="font-orbitron text-2xl font-bold mb-6">Technical Events</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalEvents.map((event, index) => (
              <EventCard key={event.title} {...event} category="technical" index={index} />
            ))}
          </div>
        </div>

        {/* Non-Technical Events */}
        <div className="mb-20">
          <h3 className="font-orbitron text-2xl font-bold mb-6">Non-Technical Events</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {nonTechnicalEvents.map((event, index) => (
              <EventCard key={event.title} {...event} category="non-technical" index={index + 4} />
            ))}
          </div>
        </div>

        {/* E-Sports Events */}
        <div>
          <h3 className="font-orbitron text-2xl font-bold mb-6">E-Sports</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {eSportsEvents.map((event, index) => (
              <EventCard key={event.title} {...event} category="non-technical" index={index + 8} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
