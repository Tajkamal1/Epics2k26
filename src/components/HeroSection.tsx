import { useState, useEffect, memo } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [showContent, setShowContent] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [typingComplete, setTypingComplete] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  const fullText = 'EPICS 2K26';
  const subtitle = 'Organized by Department of CSE (Cyber Security)';
  const eventDate = new Date('2026-02-26T09:00:00');

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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="fixed inset-0 bg-background z-0">
        <div className="absolute inset-0 cyber-grid opacity-50" />
      </div>

      {/* --- COMPACT RESPONSIVE NAVBAR --- */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-yellow-500/20">
        <div className="container mx-auto px-4 py-1.5 sm:py-2 flex items-center justify-between gap-4">
          
          {/* Grouped Left Side: MITS Logo + Stretched Deemed Text */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <img
              src="/MITS_LOGO.png"
              alt="MITS Logo"
              className="h-9 sm:h-12 w-auto object-contain flex-shrink-0" 
            />
            {/* STRETCHED DEEMED IMAGE: Responsive width and height */}
            <img
              src="/MITS_Deemed.png"
              alt="MITS Deemed University"
              className="h-8 sm:h-14 w-full max-w-[240px] sm:max-w-[480px] object-contain"
            />
          </div>

          {/* Right Side: 27 Years (Small Circle) */}
          <div className="flex-shrink-0">
            <div className="h-10 w-10 sm:h-14 sm:w-14 rounded-full overflow-hidden border border-yellow-500/40 shadow-[0_0_8px_rgba(255,215,0,0.15)]">
                <img
                  src="/27_years.jpeg"
                  alt="27 Years"
                  className="h-full w-full object-cover"
                />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container relative z-10 px-4 md:px-6 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={showContent ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-orbitron text-4xl sm:text-6xl md:text-8xl font-bold text-gradient-gold glow-gold mb-3">
            {typedText}
            {!typingComplete && <span className="text-yellow-500 animate-pulse">|</span>}
          </h1>

          <p className="font-rajdhani text-sm sm:text-lg md:text-2xl mb-6 text-foreground/70 tracking-widest uppercase">
            {subtitle}
          </p>

          <p className="font-orbitron text-base sm:text-xl mb-4 text-gradient-gold font-semibold">
            One Day National Level Symposium
          </p>

          <p className="text-xl sm:text-3xl font-bold text-yellow-400 mb-8 tracking-widest">
            FEBRUARY 26, 2026
          </p>

          {/* Timer Grid */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-10">
            {[
              { label: 'DAYS', value: timeLeft.days },
              { label: 'HOURS', value: timeLeft.hours },
              { label: 'MINUTES', value: timeLeft.minutes },
              { label: 'SECONDS', value: timeLeft.seconds }
            ].map(item => (
              <div key={item.label} className="w-16 h-16 sm:w-24 sm:h-24 flex flex-col items-center justify-center bg-black/40 rounded-lg border border-yellow-500/30 shadow-[0_0_15px_rgba(255,215,0,0.05)]">
                <div className="text-xl sm:text-3xl font-bold text-yellow-300">
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-[10px] sm:text-xs text-foreground/50">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={scrollToTechnical}
              className="px-8 py-2.5 bg-yellow-400 text-black rounded-full font-bold hover:bg-yellow-300 transition-all text-sm sm:text-base"
            >
              TECHNICAL EVENTS
            </button>
            <button
              onClick={scrollToNonTechnical}
              className="px-8 py-2.5 bg-yellow-400 text-black rounded-full font-bold hover:bg-yellow-300 transition-all text-sm sm:text-base"
            >
              NON-TECHNICAL EVENTS
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
