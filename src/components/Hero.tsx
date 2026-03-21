import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'motion/react';
import type { Track } from '../data/tracks';

interface HeroProps {
  track: Track;
  onDetails: () => void;
}

export const Hero: React.FC<HeroProps> = ({ track, onDetails }) => {
  const handlePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.dispatchEvent(new CustomEvent('play-track', { detail: track }));
  };

  return (
    <section className="relative w-full rounded-3xl overflow-hidden aspect-[16/10] md:aspect-[21/9] group cursor-pointer">
      <div className="absolute inset-0">
        <div 
          className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 opacity-60"
          style={{ background: `linear-gradient(135deg, ${track.coverColor} 0%, #131313 100%)` }}
        />
        <img 
          src={`https://picsum.photos/seed/${track.id}-hero/1400/800`}
          alt={track.title}
          className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/40 to-transparent" />
      </div>

      <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-4"
        >
          <span className="badge">Featured Track</span>
          <h2 className="text-4xl md:text-7xl font-black leading-none tracking-tighter max-w-2xl">
            {track.title}
          </h2>
          <p className="text-[#dcc0bd] text-lg max-w-md font-light italic">
            {track.tags?.join(' · ')} · {track.releaseDate?.split('-')[0]}
          </p>
        </motion.div>

        <div className="flex items-center gap-4">
          <button 
            onClick={handlePlay}
            className="w-16 h-16 rounded-full bg-gradient-primary text-[#60130f] flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all"
          >
            <Play size={32} fill="currentColor" className="ml-1" />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); onDetails(); }}
            className="px-8 py-4 bg-[#1f2020] rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-[#2a2a2a] transition-colors border border-white/5"
          >
            View Details
          </button>
        </div>
      </div>
    </section>
  );
};
