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
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Grid Layer */}
      <div className="fixed inset-0 bg-background z-0">
        <div className="absolute inset-0 cyber-grid opacity-40" />
      </div>

      {/* --- REFINED NAVBAR --- */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/85 backdrop-blur-lg border-b border-yellow-500/30">
        <div className="container mx-auto px-4 h-16 sm:h-24 flex items-center justify-between">
          
          {/* Left Side Logos */}
          <div className="flex items-center gap-3 sm:gap-6">
            <img
              src="/MITS_LOGO.png"
              alt="MITS Logo"
              className="h-10 sm:h-16 w-auto object-contain"
            />
            <div className="h-8 sm:h-12 w-[1px] bg-yellow-500/30 hidden xs:block" />
            <img
              src="/MITS_Deemed.png"
              alt="MITS Deemed University"
              className="h-8 sm:h-14 w-auto object-contain"
            />
          </div>

          {/* Right Side Logo - MADE CIRCULAR HERE */}
          <div className="flex items-center">
            <div className="h-12 w-12 sm:h-20 sm:w-20 rounded-full border-2 border-yellow-500/50 overflow-hidden shadow-[0_0_15px_rgba(255,215,0,0.3)]">
              <img
                src="/27_years.jpeg"
                alt="27 Years of Excellence"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container relative z-10 px-4 md:px-6 text-center mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={showContent ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Title */}
          <h1 className="font-orbitron text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gradient-gold glow-gold mb-6">
            {typedText}
            {!typingComplete && <span className="animate-pulse text-yellow-500">|</span>}
          </h1>

          {/* Subtitle */}
          <p className="font-rajdhani text-sm sm:text-lg md:text-2xl mb-4 text-foreground/80 tracking-[0.2em] uppercase">
            {subtitle}
          </p>

          <p className="font-orbitron text-lg sm:text-xl mb-2 text-gradient-gold font-semibold">
            One Day National Level Symposium
          </p>

          <p className="text-xl sm:text-3xl font-bold text-yellow-400 mb-10 tracking-widest">
            FEBRUARY 26, 2026
          </p>

          {/* Timer Grid */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-12">
            {[
              { label: 'DAYS', value: timeLeft.days },
              { label: 'HOURS', value: timeLeft.hours },
              { label: 'MINUTES', value: timeLeft.minutes },
              { label: 'SECONDS', value: timeLeft.seconds }
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center justify-center
                  w-20 h-20 sm:w-28 sm:h-28
                  bg-black/40 backdrop-blur-sm
                  rounded-lg border border-yellow-500/50
                  shadow-[0_0_15px_rgba(255,215,0,0.15)]"
              >
                <span className="text-2xl sm:text-4xl font-bold text-yellow-400">
                  {String(item.value).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs text-foreground/60 tracking-tighter">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-xl sm:text-2xl text-yellow-300 font-bold mb-8 tracking-widest"
          >
            REGISTRATION OPEN
          </motion.div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
            <button
              onClick={scrollToTechnical}
              className="px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-black rounded-sm font-bold uppercase transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(255,215,0,0.3)]"
            >
              Technical Events
            </button>

            <button
              onClick={scrollToNonTechnical}
              className="px-8 py-3 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black rounded-sm font-bold uppercase transition-all duration-300 transform hover:scale-105"
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
