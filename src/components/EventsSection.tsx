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
    description: 'Test your knowledge in cybersecurity, programming, and emerging technologies.',
    coordinator: 'Rohini - +91 89772 90071',
    icon: Brain,
    registerUrl: 'https://docs.google.com/forms',
  },
  {
    title: 'Paper Presentation',
    description: 'Present your research papers on cutting-edge topics.',
    coordinator: 'Meghana - +91 76708 69707',
    icon: FileText,
    registerUrl: 'https://docs.google.com/forms',
  },
  {
    title: 'Poster Presentation',
    description: 'Show your ideas through creative posters.',
    coordinator: 'Ramya - +91 83097 48619',
    icon: Image,
    registerUrl: 'https://docs.google.com/forms',
  },
  {
    title: 'Project Expo',
    description: 'Showcase your innovative projects and prototypes.',
    coordinator: 'Deva Sai Nandhini - +91 93921 94979',
    icon: Briefcase,
    registerUrl: 'https://docs.google.com/forms',
  },
  {
    title: 'Bug Fixers',
    description: 'Debug and fix errors within the given time.',
    coordinator: 'A Roopa - +91 90321 28995',
    icon: Bug,
    registerUrl: 'https://docs.google.com/forms',
  },
];

const nonTechnicalEvents = [
  {
    title: 'Cut & Capture',
    description: 'Identify movies and decode dialogues.',
    coordinator: 'Rupesh - +91 91776 08098',
    icon: Film,
    registerUrl: 'https://docs.google.com/forms',
  },
  {
    title: 'Mystery Trail',
    description: 'Solve clues and puzzles in a treasure hunt.',
    coordinator: 'Deepak Agarwal - +91 94947 61210',
    icon: Map,
    registerUrl: 'https://docs.google.com/forms',
  },
  {
    title: 'Reels & Photo',
    description: 'Show your creativity through photography and reels.',
    coordinator: 'C Harshit - +91 79819 24992',
    icon: Camera,
    registerUrl: 'https://docs.google.com/forms',
  },
  {
    title: 'Chill & Thril',
    description: 'Fun filled event with exciting games.',
    coordinator: 'Akhil - +91 81212 42095',
    icon: Star,
    registerUrl: 'https://docs.google.com/forms',
  },
];

const eSportsEvents = [
  {
    title: 'Free Fire',
    description: 'Battle it out in Free Fire.',
    coordinator: 'SaiNath - 9347863704 , Uday Kiran - 9392885747',
    icon: Gamepad2,
    registerUrl: 'https://docs.google.com/forms',
  },
  {
    title: 'PUBG',
    description: 'Compete in PUBG tournament.',
    coordinator: 'Sivaraj Kumar - 8639516459',
    icon: Gamepad2,
    registerUrl: 'https://docs.google.com/forms',
  },
  {
    title: 'Ludo',
    description: 'Strategic Ludo competition.',
    coordinator: 'Shafiulla - 7997218818',
    icon: Gamepad2,
    registerUrl: 'https://docs.google.com/forms',
  },
];

const EventsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative py-24" ref={ref}>
      <div className="container px-6">

        {/* TECHNICAL EVENTS */}
        <div id="technical-events" className="mb-20">
          <h3 className="text-2xl font-bold mb-6">
            Technical Events
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalEvents.map(event => (
              <EventCard key={event.title} {...event} />
            ))}
          </div>
        </div>

        {/* NON TECHNICAL EVENTS */}
        <div id="nontechnical-events" className="mb-20">
          <h3 className="text-2xl font-bold mb-6">
            Non-Technical Events
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {nonTechnicalEvents.map(event => (
              <EventCard key={event.title} {...event} />
            ))}
          </div>
        </div>

        {/* E-SPORTS SECTION */}
        <div>
          <h3 className="text-2xl font-bold mb-6">
            E-Sports
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {eSportsEvents.map(event => (
              <EventCard key={event.title} {...event} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default EventsSection;
