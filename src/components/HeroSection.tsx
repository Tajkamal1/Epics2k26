import { useState, useEffect, memo } from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const HeroSection = () => {
  const [showShield, setShowShield] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showTag, setShowTag] = useState(false);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const eventDate = new Date('2026-02-26T09:00:00');

  useEffect(() => {
    setTimeout(() => setShowShield(true), 200);
    setTimeout(() => setShowTitle(true), 1800);
    setTimeout(() => setShowTag(true), 2800);
  }, []);

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

        {/* SHIELD ANIMATION */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={showShield ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1.2, type: 'spring' }}
          className="flex justify-center mb-6"
        >
          <Shield
            size={120}
            className="text-yellow-400 drop-shadow-[0_0_25px_rgba(255,215,0,0.8)]"
          />
        </motion.div>

        {/* EPICS TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={showTitle ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="font-orbitron text-5xl md:text-8xl font-bold text-gradient-gold glow-gold mb-6"
        >
          EPICS 2K26
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={showTitle ? { opacity: 1 } : {}}
          className="font-orbitron text-lg md:text-xl text-gradient-gold font-semibold mb-6"
        >
          One Day National Level Symposium
        </motion.p>

        {/* TAG STYLE DEPARTMENT LABEL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={showTag ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="
            inline-flex items-center gap-3
            px-6 py-3 mb-8
            rounded-full
            border border-yellow-400/50
            bg-purple-200/20 backdrop-blur-md
          "
        >
          <span className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></span>

          <span className="font-rajdhani text-sm md:text-base font-semibold text-yellow-200 tracking-wide">
            DEPARTMENT OF CSE (CYBER SECURITY)
          </span>
        </motion.div>

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

        {/* HIGHLIGHT TEXT INSTEAD OF REGISTER BUTTON */}
        <motion.div
          animate={{
            textShadow: [
              '0 0 10px rgba(255,215,0,0.4)',
              '0 0 25px rgba(255,215,0,0.9)',
              '0 0 10px rgba(255,215,0,0.4)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="font-orbitron text-2xl text-yellow-300 mb-6"
        >
          REGISTRATION OPEN
        </motion.div>

        {/* TWO BUTTONS */}
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

      </div>
    </section>
  );
};

export default memo(HeroSection);
