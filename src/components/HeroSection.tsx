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

  const fullText = '';
  const subtitle = 'Organized by Department of CSE (Cyber Security)';
  const eventDate = new Date('2026-02-26T09:00:00');

  /* ---------------- EFFECTS ---------------- */

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

  /* ---------------- HANDLERS ---------------- */

  const scrollToTechnical = () => {
    document.getElementById('technical-events')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const scrollToNonTechnical = () => {
    document.getElementById('non-technical-events')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  /* ---------------- UI ---------------- */

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >

      {/* ===== SIMPLE HEADER FOR LOGOS ===== */}
      <div className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between flex-wrap gap-2">

          {/* LEFT SIDE LOGO - YOU ADD PATH */}
          <img
            src=""
            alt="Left Logo"
            className="h-10 sm:h-14 w-auto"
          />

          {/* CENTER LOGO - YOU ADD PATH */}
          <img
            src=""
            alt="Center Logo"
            className="h-10 sm:h-12 w-auto"
          />

          {/* RIGHT SIDE LOGO - YOU ADD PATH */}
          <img
            src=""
            alt="Right Logo"
            className="h-10 sm:h-14 w-auto"
          />

        </div>
      </div>

      {/* Background */}
      <div className="fixed inset-0 bg-background z-0">
        <div className="absolute inset-0 cyber-grid opacity-50" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={showContent ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* TITLE WITH TYPING EFFECT */}
          <h1 className="font-orbitron text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-gradient-gold glow-gold mb-4 whitespace-nowrap">
            {typedText}
            {!typingComplete && <span className="text-primary">|</span>}
          </h1>

          {/* Subtitle */}
          <p className="font-rajdhani text-base sm:text-lg md:text-3xl text-foreground/70 tracking-widest mb-4 sm:mb-6">
            {subtitle}
          </p>

          <p className="font-orbitron text-base md:text-xl text-gradient-gold font-semibold mb-8">
            One Day National Level Symposium
          </p>

          {/* EVENT DATE ADDED */}
          <p className="font-orbitron text-lg md:text-xl text-gradient-gold font-semibold mb-6">
            📅 February 26, 2026
          </p>

          {/* COUNTDOWN TIMER */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-6 mb-10 px-2 sm:px-0 mx-2 sm:mx-0">
            {[
              { label: 'DAYS', value: timeLeft.days },
              { label: 'HOURS', value: timeLeft.hours },
              { label: 'MINUTES', value: timeLeft.minutes },
              { label: 'SECONDS', value: timeLeft.seconds }
            ].map(item => (
              <div
                key={item.label}
                className="
                  px-3 py-3 sm:px-5 sm:py-4
                  bg-secondary/60
                  backdrop-blur-md
                  border border-primary/40
                  rounded-xl
                  shadow-[0_0_20px_rgba(255,215,0,0.25)]
                  min-w-[70px] sm:min-w-[80px]
                "
              >
                <div className="font-orbitron text-xl sm:text-3xl font-bold text-gradient-gold">
                  {String(item.value).padStart(2, '0')}
                </div>

                <div className="font-rajdhani text-[10px] sm:text-xs text-foreground/70 tracking-wider">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* REGISTRATION OPEN HIGHLIGHT */}
          <motion.div
            animate={{
              textShadow: [
                '0 0 10px rgba(255,215,0,0.4)',
                '0 0 25px rgba(255,215,0,0.9)',
                '0 0 10px rgba(255,215,0,0.4)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="font-orbitron text-xl sm:text-2xl text-yellow-300 mb-8"
          >
            REGISTRATION OPEN
          </motion.div>

          {/* TWO NAVIGATION BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTechnical}
              className="
                px-6 sm:px-10 py-3
                bg-gradient-to-r from-yellow-400 to-yellow-500
                text-black font-orbitron
                rounded-full
                tracking-wide
              "
            >
              Technical Events
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToNonTechnical}
              className="
                px-6 sm:px-10 py-3
                bg-gradient-to-r from-yellow-400 to-yellow-500
                text-black font-orbitron
                rounded-full
                tracking-wide
              "
            >
              Non-Technical Events
            </motion.button>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
