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
  const subtitle = 'Organized by CSE Cyber Security Department';
  const eventDate = new Date('2026-02-26T09:00:00');

  /* ---------------- effects ---------------- */

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
    }, 100);
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

  /* ---------------- handlers ---------------- */

  const handleRegisterClick = () => {
    const section = document.getElementById('events');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  /* ---------------- UI ---------------- */

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 bg-background z-0">
        <div className="absolute inset-0 cyber-grid opacity-50" />
      </div>

      <div className="container relative z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={showContent ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Title */}
          <h1 className="font-orbitron text-6xl md:text-8xl font-bold text-gradient-gold glow-gold mb-4">
            {typedText}
            {!typingComplete && <span className="text-primary">|</span>}
          </h1>

          <p className="font-rajdhani text-xl md:text-3xl text-foreground/70 tracking-widest mb-6">
            {subtitle}
          </p>

          <p className="font-rajdhani text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-6">
            EPICS 2026 welcomes enthusiastic participants nationwide to engage,
            explore, and experience academic and technical excellence.
          </p>

          <p className="font-orbitron text-xl text-gradient-gold font-semibold mb-8">
            One Day National Level Symposium
          </p>

          {/* Countdown Timer with Background */}
          <div className="flex justify-center gap-4 sm:gap-6 mb-12">
            {[
              { label: 'DAYS', value: timeLeft.days },
              { label: 'HOURS', value: timeLeft.hours },
              { label: 'MINUTES', value: timeLeft.minutes },
              { label: 'SECONDS', value: timeLeft.seconds }
            ].map(item => (
              <div
                key={item.label}
                className="
                  px-5 py-4
                  bg-secondary/60
                  backdrop-blur-md
                  border border-primary/40
                  rounded-xl
                  min-w-[90px]
                  shadow-[0_0_20px_rgba(255,215,0,0.25)]
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

          {/* Register Button */}
          <motion.button
            onClick={handleRegisterClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                '0 0 15px rgba(255,215,0,0.4)',
                '0 0 35px rgba(255,215,0,0.8)',
                '0 0 15px rgba(255,215,0,0.4)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="
              px-12 py-4
              font-orbitron text-xl
              bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500
              text-black
              rounded-full
              uppercase
              tracking-widest
              border border-yellow-200
            "
          >
            Register Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(HeroSection);

