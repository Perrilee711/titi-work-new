import React from 'react';
import { Play, Pause, Heart, ChevronUp, SkipBack, SkipForward } from 'lucide-react';
import { useAudio } from '../contexts/AudioContext';

export const MiniPlayer: React.FC = () => {
  const { currentTrack, isPlaying, toggle, next, prev, progress } = useAudio();

  if (!currentTrack) return null;

  const duration = currentTrack.duration || 0;
  const progressPercent = duration > 0 ? (progress / duration) * 100 : 0;

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed bottom-24 left-4 right-4 z-40 pointer-events-none">
      <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-3 flex items-center justify-between pointer-events-auto shadow-2xl">
        <div className="flex items-center gap-3">
          <div 
            className="w-12 h-12 rounded-xl overflow-hidden bg-[#2a2a2a] shrink-0"
            style={{ background: currentTrack.coverColor || '#2a2a2a' }}
          >
            <img 
              src={`https://picsum.photos/seed/${currentTrack.id}/100/100`}
              alt={currentTrack.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h5 className="text-sm font-bold leading-tight">{currentTrack.title}</h5>
            <p className="text-[10px] text-[#dcc0bd] uppercase tracking-wider font-semibold">
              Titi • {formatTime(duration)}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4 mr-4">
            <button 
              onClick={prev}
              className="text-[#dcc0bd] hover:text-[#ffb4aa] transition-colors"
            >
              <SkipBack size={20} />
            </button>
            <button 
              onClick={toggle}
              className="w-10 h-10 rounded-full bg-[#ffb4aa] text-[#60130f] flex items-center justify-center hover:scale-105 transition-transform"
            >
              {isPlaying ? (
                <Pause size={20} fill="currentColor" />
              ) : (
                <Play size={20} fill="currentColor" className="ml-0.5" />
              )}
            </button>
            <button 
              onClick={next}
              className="text-[#dcc0bd] hover:text-[#ffb4aa] transition-colors"
            >
              <SkipForward size={20} />
            </button>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="hidden sm:block w-24 h-1 bg-[#353535] rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#ffb4aa] rounded-full transition-all"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <button className="text-[#dcc0bd] hover:text-[#ffb4aa] transition-colors">
              <Heart size={20} />
            </button>
            <button className="text-[#dcc0bd] hover:text-white transition-colors">
              <ChevronUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
