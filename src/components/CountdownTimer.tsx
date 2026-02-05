import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TimeUnit {
  value: number;
  label: string;
}

const CountdownTimer = () => {
  // Set target date to March 15, 2026
  const targetDate = new Date('2026-03-15T09:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits: TimeUnit[] = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' },
  ];

  return (
    <div className="text-center">
      <h3 className="font-rajdhani text-lg sm:text-xl text-primary/80 mb-6 tracking-widest uppercase">
        Event Starts In
      </h3>
      
      <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            <div className="timer-digit w-20 sm:w-28 md:w-32 h-24 sm:h-32 md:h-36 rounded-xl flex flex-col items-center justify-center relative overflow-hidden">
              {/* Scan line effect */}
              <div className="absolute inset-0 scan-line opacity-50" />
              
              {/* Number display with animation */}
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={unit.value}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-3xl sm:text-5xl md:text-6xl font-bold text-gradient-gold"
                >
                  {String(unit.value).padStart(2, '0')}
                </motion.span>
              </AnimatePresence>
              
              <span className="font-rajdhani text-xs sm:text-sm text-muted-foreground uppercase tracking-widest mt-1">
                {unit.label}
              </span>
              
              {/* Glow effect at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            </div>
            
            {/* Separator dots */}
            {index < timeUnits.length - 1 && (
              <div className="hidden sm:flex absolute -right-3 top-1/2 -translate-y-1/2 flex-col gap-2">
                <motion.span
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-2 h-2 bg-primary rounded-full"
                />
                <motion.span
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-2 h-2 bg-primary rounded-full"
                />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
