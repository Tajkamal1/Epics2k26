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
    document.getElementById('technical-events')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const scrollToNonTechnical = () => {
    document.getElementById('non-technical-events')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ===== TOP NAVBAR WITH LOGOS ===== */}
      <div className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-yellow-500/30">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">

          {/* LEFT SIDE LOGOS */}
          <div className="flex items-center gap-4">
            <img
              src="/images/mits-gear-logo.png"
              alt="MITS Logo"
              className="h-14 w-auto"
            />

            <img
              src="/images/mits-text-logo.png"
              alt="MITS Deemed University"
              className="h-12 w-auto"
            />
          </div>

          {/* RIGHT SIDE 27 YEARS LOGO */}
          <div>
            <img
              src="/images/mits-27years-logo.png"
              alt="27 Years of Excellence"
              className="h-16 w-auto"
            />
          </div>

        </div>
      </div>

      {/* Background */}
      <div className="fixed inset-0 bg-black z-0">
        <div className="absolute inset-0 opacity-50" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 text-center mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={showContent ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* TITLE */}
          <h1 className="font-orbitron text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-yellow-400 mb-4 whitespace-nowrap">
            {typedText}
            {!typingComplete && <span className="text-yellow-300">|</span>}
          </h1>

          {/* Subtitle */}
          <p className="font-rajdhani text-lg md:text-3xl text-gray-300 tracking-widest mb-3">
            {subtitle}
          </p>

          {/* EVENT DATE */}
          <p className="font-orbitron text-xl md:text-2xl text-yellow-300 font-semibold mb-4">
            📅 February 26, 2026
          </p>

          <p className="font-orbitron text-lg md:text-xl text-yellow-400 font-semibold mb-8">
            One Day National Level Symposium
          </p>

          {/* COUNTDOWN TIMER */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-10">
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
                  bg-gray-900/60
                  backdrop-blur-md
                  border border-yellow-500/40
                  rounded-xl
                  min-w-[90px]
                "
              >
                <div className="font-orbitron text-2xl sm:text-3xl font-bold text-yellow-400">
                  {String(item.value).padStart(2, '0')}
                </div>

                <div className="font-rajdhani text-xs text-gray-300 tracking-wider">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* REGISTRATION OPEN */}
          <motion.div
            animate={{
              textShadow: [
                '0 0 10px rgba(255,215,0,0.4)',
                '0 0 25px rgba(255,215,0,0.9)',
                '0 0 10px rgba(255,215,0,0.4)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="font-orbitron text-2xl text-yellow-300 mb-8"
          >
            REGISTRATION OPEN
          </motion.div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTechnical}
              className="
                px-10 py-3
                bg-gradient-to-r from-yellow-400 to-yellow-500
                text-black font-orbitron
                rounded-full
              "
            >
              Technical Events
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToNonTechnical}
              className="
                px-10 py-3
                bg-gradient-to-r from-yellow-400 to-yellow-500
                text-black font-orbitron
                rounded-full
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
