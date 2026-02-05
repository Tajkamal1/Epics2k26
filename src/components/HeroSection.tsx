import { useState, useEffect, memo } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [showContent, setShowContent] = useState(false);
  const [typedText, setTypedText] = useState('');

  const fullText = "EPICS 2K26";

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const eventDate = new Date('2026-02-26T09:00:00');

  // Typing animation effect
  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;

      if (index === fullText.length) {
        clearInterval(typingInterval);
        setTimeout(() => setShowContent(true), 300);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  // Countdown Timer Logic
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

  const scrollToEvents = () => {
    document.getElementById('events')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="fixed inset-0 bg-background z-0">
        <div className="absolute inset-0 cyber-grid opacity-50" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 text-center">

        {/* MAIN TITLE WITH TYPING EFFECT */}
        <motion.h1
          className="font-orbitron text-5xl md:text-8xl font-bold text-gradient-gold glow-gold mb-6"
        >
          {typedText}
          <span className="animate-pulse">|</span>
        </motion.h1>

        {showContent && (
          <>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-orbitron text-lg md:text-xl text-gradient-gold font-semibold mb-8"
            >
              One Day National Level Symposium
            </motion.p>

            {/* COUNTDOWN TIMER */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {[
                { label: 'DAYS', value: timeLeft.days },
                { label: 'HOURS', value: timeLeft.hours },
                { label: 'MINUTES', value: timeLeft.minutes },
                { label: 'SECONDS', value: timeLeft.seconds }
              ].map(item => (
                <div
                  key={item.label}
                  className="
                    px-4 py-4
                    bg-secondary/60
                    backdrop-blur-md
                    border border-yellow-400/40
                    rounded-xl
                    shadow-[0_0_20px_rgba(255,215,0,0.25)]
                    min-w-[90px]
                  "
                >
                  <div className="font-orbitron text-3xl font-bold text-gradient-gold">
                    {String(item.value).padStart(2, '0')}
                  </div>

                  <div className="font-rajdhani text-xs text-foreground/70 tracking-wider">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* HIGHLIGHT TEXT */}
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
                onClick={scrollToEvents}
                className="
                  px-10 py-3
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
                onClick={scrollToEvents}
                className="
                  px-10 py-3
                  bg-gradient-to-r from-yellow-400 to-yellow-500
                  text-black font-orbitron
                  rounded-full
                  tracking-wide
                "
              >
                Non-Technical Events
              </motion.button>
            </div>
          </>
        )}

      </div>
    </section>
  );
};

export default memo(HeroSection);
