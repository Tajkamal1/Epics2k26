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
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSequWKxGlUIpEu28IpfHHlJfJM-iMN6KqC6OacHo_3LkMBEbQ/viewform?usp=publish-editor',
  },
  {
    title: 'Paper Presentation',
    description: 'Present your research papers on cutting-edge topics in cyber security, AI, blockchain, and more. Showcase your academic excellence.',
    coordinator: 'Meghana - +91 76708 69707',
    icon: FileText,
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc-lTZs2wyme66h1gty_uRyjLgxaqebNKMpxVusPbSD6CAqHg/viewform?usp=sharing&ouid=109325010433421728227',
  },
  {
    title: 'Poster Presentation',
    description: 'Visualize your ideas through creative posters. Communicate complex security concepts in an engaging and innovative format.',
    coordinator: 'Ramya - +91 83097 48619',
    icon: Image,
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSda0r2mH-7iqLQiCjcHAnvRfebD18I9mwYRReplfNnBupnczg/viewform?usp=publish-editor',
  },
  {
    title: 'Project Expo',
    description: 'Demonstrate your innovative projects and prototypes. From security tools to IoT solutions, bring your ideas to life.',
    coordinator: 'Deva Sai Nandhini - +91 93921 94979',
    icon: Briefcase,
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScPDQp7ieDtpwPAbj4to7DUbhH4K3bzrVBkz9IBkR97Awe4SQ/viewform?usp=publish-editor',
  },
  {
    title: 'Bug Fixers',
    description: 'Put your debugging skills to the test. Identify, analyze, and fix errors in code within the given time. A true challenge for coding enthusiasts.',
    coordinator: 'A Roopa - +91 90321 28995',
    icon: Bug,
    registerUrl: 'https://docs.google.com/forms',
  },
];

const nonTechnicalEvents = [
  {
    title: 'Cut & Capture',
    description: 'Identify movies, decode dialogues, and prove your cinematic knowledge. A fun-filled event for movie enthusiasts.',
    coordinator: 'Rupesh - +91 91776 08098',
    icon: Film,
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScGWcaIjonK__eEBRoWNMRKHSij73vy6VFgeWA7bamK39TTbg/viewform?usp=publish-editor',
  },
  {
    title: 'Mystery Trail',
    description: 'Embark on an exciting adventure across the campus. Solve clues, crack codes, and race to find the hidden treasure.',
    coordinator: 'Deepak Agarwal - +91 94947 61210',
    icon: Map,
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfMlXl2_136aFzSMmCLePDI9sIcImow-rE4tNyqOnzyLkJYZA/viewform?usp=publish-editor',
  },
  {
    title: 'Reels & Photo',
    description: 'Showcase your photography and videography skills. Capture moments, create reels, and let your creativity shine.',
    coordinator: 'C Harshit - +91 79819 24992',
    icon: Camera,
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdg1cq9-eugDtGEZM66qrM53ToTaJ2EpueHokkLzxeyOEO9pQ/viewform?usp=publish-editor',
  },
  {
    title: 'E-Sports',
    description: 'Compete in thrilling gaming tournaments. From strategy games to action-packed battles, prove your gaming prowess.',
    coordinator: 'G Jagan - +91 80190 01049',
    icon: Gamepad2,
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScfKVctBZP6APiQOXPpqI8dZoyKTBfqZVhT2e5XH1lQZq9t8w/viewform?usp=publish-editor',
  },
  {
    title: 'Chill & Thril',
    description: 'Fun filled entertainment event packed with exciting games and activities to refresh your mood.',
    coordinator: 'Akhil - +91 81212 42095',
    icon: Star,
    registerUrl: 'https://docs.google.com/forms',
  },

  // ---- NEWLY ADDED EVENTS ----

  {
    title: 'Free Fire',
    description: 'Show your battle royale skills and dominate the arena in the ultimate Free Fire gaming competition.',
    coordinator: 'SaiNath - +91 93478 63704, Uday Kiran - +91 93928 85747',
    icon: Gamepad2,
    registerUrl: 'https://docs.google.com/forms',
  },
  {
    title: 'PUBG',
    description: 'Join the intense PUBG tournament and prove your squad is the best among all competitors.',
    coordinator: 'Sivaraj Kumar - +91 86395 16459',
    icon: Gamepad2,
    registerUrl: 'https://docs.google.com/forms',
  },
  {
    title: 'Ludo',
    description: 'A classic board game competition with fun twists and exciting rounds. Strategy is the key!',
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
            From brain-teasing technical challenges to fun-filled entertainment, 
            EPICS 2026 offers something for everyone.
          </p>
        </motion.div>

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
