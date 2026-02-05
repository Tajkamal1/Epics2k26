import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Brain, FileText, Image, Briefcase, 
  Film, Map, Camera, Gamepad2 
} from 'lucide-react';
import EventCard from './EventCard';

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
];

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
    title: 'E-Sports',
    description: 'Compete in thrilling gaming tournaments. From strategy games to action-packed battles, prove your gaming prowess.',
    coordinator: 'Mr. Vikram J',
    icon: Gamepad2,
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScfKVctBZP6APiQOXPpqI8dZoyKTBfqZVhT2e5XH1lQZq9t8w/viewform?usp=publish-editor',
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
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-orbitron text-2xl font-bold text-foreground">
                Technical Events
              </h3>
              <p className="font-rajdhani text-muted-foreground">
                Challenge your technical skills
              </p>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent ml-4" />
          </motion.div>

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
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center">
              <Gamepad2 className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="font-orbitron text-2xl font-bold text-foreground">
                Non-Technical Events
              </h3>
              <p className="font-rajdhani text-muted-foreground">
                Fun-filled entertainment awaits
              </p>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent ml-4" />
          </motion.div>

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

