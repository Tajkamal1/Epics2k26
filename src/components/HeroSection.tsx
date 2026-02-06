

import { useState, useEffect, memo } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [showContent, setShowContent] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [typingComplete, setTypingComplete] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const fullText = 'EPICS 2K26';
  const subtitle = 'Organized by Department of CSE (Cyber Security)';
  const eventDate = new Date('2026-02-26T09:00:00');

  /* ---------------- Effects ---------------- */
  useEffect(() => {
    const contentTimer = setTimeout(() => setShowContent(true), 100);
    return () => clearTimeout(contentTimer);
  }, []);

  useEffect(() => {
    if (!showContent) return;

    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
        setTypingComplete(true);
      }
    }, 120);

    return () => clearInterval(typingInterval);
  }, [showContent]);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const diff = eventDate.getTime() - now.getTime();

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTechnical = () => {
    document.getElementById('technical-events')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToNonTechnical = () => {
    document.getElementById('non-technical-events')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Grid */}
      <div className="fixed inset-0 bg-background z-0">
        <div className="absolute inset-0 cyber-grid opacity-50" />
      </div>

      {/* --- NAVBAR --- */}
      <div className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-yellow-500/30">
        <div className="container mx-auto px-3 sm:px-6 py-2 flex items-center justify-between">
          
          {/* Left Side: Increased Logo Sizes */}
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src="/MITS_LOGO.png"
              alt="MITS Logo"
              className="h-15 sm:h-20 w-auto object-contain" 
            />
            <img
              src="/MITS_Deemed.png"
              alt="MITS Deemed University"
              className="h-14 sm:h-18 w-auto object-contain"
            />
          </div>

          {/* Right Side: PERFECT CIRCLE SHAPE */}
          <div className="flex items-center">
            <div className="h-14 w-14 sm:h-20 sm:w-20 rounded-full overflow-hidden border border-yellow-500/50">
                <img
                src="/27_years.jpeg"
                alt="27 Years of Excellence"
                className="h-full w-full object-cover"
                />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 px-4 md:px-6 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={showContent ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Title */}
          <h1 className="font-orbitron text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-gradient-gold glow-gold mb-4">
            {typedText}
            {!typingComplete && <span className="text-primary">|</span>}
          </h1>

          {/* Subtitle */}
          <p className="font-rajdhani text-base sm:text-lg md:text-3xl mb-6 text-foreground/70 tracking-widest">
            {subtitle}
          </p>

          <p className="font-orbitron text-lg sm:text-xl mb-6 text-gradient-gold font-semibold">
            One Day National Level Symposium
          </p>

          <p className="text-lg sm:text-2xl text-yellow-300 mb-6">
            February 26, 2026
          </p>

          {/* Timer */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-6 mb-8">
            {[
              { label: 'DAYS', value: timeLeft.days },
              { label: 'HOURS', value: timeLeft.hours },
              { label: 'MINUTES', value: timeLeft.minutes },
              { label: 'SECONDS', value: timeLeft.seconds }
            ].map(item => (
              <div
                key={item.label}
                className="px-3 py-2 sm:px-5 sm:py-4 bg-black/60 rounded-xl border border-yellow-400 shadow-[0_0_20px_rgba(255,215,0,0.25)] min-w-[80px]"
              >
                <div className="text-xl sm:text-3xl font-bold text-yellow-300">
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-xs text-foreground/70 tracking-wider">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Registration Open */}
          <motion.div className="text-xl sm:text-2xl text-yellow-300 mb-6">
            REGISTRATION OPEN
          </motion.div>

          {/* Event Buttons - BOTH MATCHING NOW */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={scrollToTechnical}
              className="px-6 sm:px-10 py-2 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-300 transition-colors"
            >
              Technical Events
            </button>

            <button
              onClick={scrollToNonTechnical}
              className="px-6 sm:px-10 py-2 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-300 transition-colors"
            >
              Non-Technical Events
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(HeroSection);



