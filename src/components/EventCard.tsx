import { motion } from 'framer-motion';
import { LucideIcon, ExternalLink } from 'lucide-react';

interface EventCardProps {
  title: string;
  description: string;
  coordinator: string;
  icon: LucideIcon;
  category: 'technical' | 'non-technical';
  registerUrl: string;
  index: number;
}

const EventCard = ({ title, description, coordinator, icon: Icon, category, registerUrl, index }: EventCardProps) => {
  const handleRegister = () => {
    window.open(registerUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-50px' }}
      className="group relative h-full"
    >
      <div 
        className="card-cyber rounded-2xl p-6 sm:p-8 h-full flex flex-col transition-all duration-500 hover:-translate-y-3 cursor-pointer"
        onClick={handleRegister}
      >
        <div className="absolute -top-3 right-6">
          <span className={`
            font-rajdhani text-xs uppercase tracking-wider px-3 py-1 rounded-full
            ${category === 'technical' 
              ? 'bg-primary/20 text-primary border border-primary/30' 
              : 'bg-accent/20 text-accent border border-accent/30'
            }
          `}>
            {category}
          </span>
        </div>

        {/* Icon Container */}
        <div className="relative mb-6">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/30 group-hover:border-primary transition-all group-hover:shadow-[0_0_30px_hsl(45_93%_47%/0.3)]"
          >
            <Icon className="w-8 h-8 text-primary" />
          </motion.div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 blur-2xl bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="font-orbitron text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-gradient-gold transition-all">
            {title}
          </h3>
          
          <p className="font-rajdhani text-muted-foreground leading-relaxed mb-4">
            {description}
          </p>
          
          {/* Coordinator Info */}
          <div className="pt-4 border-t border-primary/10">
            <span className="font-rajdhani text-sm text-primary/70">Coordinator</span>
            <p className="font-space text-foreground/90">{coordinator}</p>
          </div>
        </div>

        {/* Register Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={(e) => {
            e.stopPropagation();
            handleRegister();
          }}
          className="btn-cyber mt-6 w-full py-3 rounded-xl flex items-center justify-center gap-2 text-sm"
        >
          Register Now
          <ExternalLink className="w-4 h-4" />
        </motion.button>

        {/* Hover Border Effect */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/50 transition-colors pointer-events-none" />
        
        {/* Corner Decorations */}
        <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-primary/0 group-hover:border-primary/50 rounded-tl-2xl transition-colors pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-primary/0 group-hover:border-primary/50 rounded-br-2xl transition-colors pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default EventCard;
