import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Heart, Share2, Shuffle, Repeat, SkipBack, SkipForward, ChevronLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { useAudio } from '../contexts/AudioContext';
import type { Track, Memory } from '../data/tracks';

interface TrackDetailProps {
  track: Track;
  memories?: Memory[];
  onBack: () => void;
}

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export const TrackDetail: React.FC<TrackDetailProps> = ({ track, memories = [], onBack }) => {
  const { isPlaying, toggle, next, prev, progress, seek, currentTrack } = useAudio();
  const [isCurrentTrack, setIsCurrentTrack] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  const duration = track.duration || 0;
  const progressPercent = duration > 0 ? (progress / duration) * 100 : 0;

  useEffect(() => {
    setIsCurrentTrack(currentTrack?.id === track.id);
  }, [currentTrack, track.id]);

  const handlePlay = () => {
    if (!isCurrentTrack) {
      window.dispatchEvent(new CustomEvent('play-track', { detail: track }));
    } else {
      toggle();
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressRef.current || duration === 0) return;
    const rect = progressRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percent = clickX / rect.width;
    seek(percent * duration);
  };

  const handlePrev = () => {
    if (progress > 3) {
      seek(0);
    } else {
      prev();
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="space-y-12"
    >
      {/* Back button */}
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-[#dcc0bd] hover:text-white transition-colors"
      >
        <ChevronLeft size={20} />
        <span className="text-sm">Back</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-12">
          {/* Album Art */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#ffb4aa]/10 blur-3xl rounded-full opacity-50" />
            <div 
              className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-2xl transform rotate-1 lg:-rotate-2 hover:rotate-0 transition-transform duration-700"
              style={{ background: track.coverColor || '#2a2a2a' }}
            >
              <img 
                src={`https://picsum.photos/seed/${track.id}-album/800/800`}
                alt={track.title}
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <span className="bg-[#ffb4aa]/20 backdrop-blur-md px-4 py-1 rounded-full text-[#ffb4aa] border border-[#ffb4aa]/30 text-[10px] font-bold tracking-[0.2em] uppercase">
                  Archive No. {track.order || '?'}
                </span>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="space-y-8 bg-[#1b1c1c] p-8 rounded-3xl">
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter">{track.title}</h2>
              <p className="text-xl font-medium text-[#9fcfce] italic opacity-80">
                {track.tags?.join(' · ')} · {track.year || track.releaseDate?.split('-')[0]}
              </p>
            </div>

            {/* Progress */}
            <div className="space-y-3">
              <div 
                ref={progressRef}
                onClick={handleProgressClick}
                className="relative h-2 w-full bg-[#353535] rounded-full cursor-pointer group overflow-hidden"
              >
                <div 
                  className="absolute top-0 left-0 h-full bg-gradient-primary rounded-full transition-all"
                  style={{ width: `${isCurrentTrack ? progressPercent : 0}%` }}
                />
                <div 
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                  style={{ left: isCurrentTrack ? `${progressPercent}%` : '0%', transform: 'translate(-50%, -50%)' }}
                />
              </div>
              <div className="flex justify-between text-[10px] font-bold tracking-widest text-[#dcc0bd] uppercase">
                <span>{isCurrentTrack ? formatTime(progress) : '00:00'}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Playback Controls */}
            <div className="flex items-center justify-center gap-8 md:gap-12">
              <button className="text-[#dcc0bd] hover:text-[#ffb4aa] transition-colors">
                <Shuffle size={24} />
              </button>
              <button 
                onClick={handlePrev}
                className="text-[#e4e2e1] hover:text-[#ffb4aa] transition-colors"
              >
                <SkipBack size={32} />
              </button>
              <button 
                onClick={handlePlay}
                className="w-20 h-20 rounded-full bg-gradient-primary text-[#60130f] shadow-xl shadow-[#ffb4aa]/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center"
              >
                {isCurrentTrack && isPlaying ? (
                  <div className="w-6 h-6 flex items-center justify-center">
                    <div className="playing-bar">
                      <span></span><span></span><span></span><span></span>
                    </div>
                  </div>
                ) : (
                  <Play size={40} fill="currentColor" className="ml-1" />
                )}
              </button>
              <button 
                onClick={next}
                className="text-[#e4e2e1] hover:text-[#ffb4aa] transition-colors"
              >
                <SkipForward size={32} />
              </button>
              <button className="text-[#dcc0bd] hover:text-[#ffb4aa] transition-colors">
                <Repeat size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-5 space-y-10 lg:pl-8">
          {/* Backstory */}
          <div className="space-y-6">
            <div className="inline-block border-l-4 border-[#ffb4a4] pl-4">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ffb4a4]">The Backstory</h3>
            </div>
            <div className="space-y-4 text-[#dcc0bd] leading-relaxed font-light text-lg italic">
              <p>{track.backstory || 'No backstory available for this track yet.'}</p>
            </div>
          </div>

          {/* Archive Specifications */}
          <div className="bg-[#1f2020] p-6 rounded-2xl border-l-2 border-[#ffb4aa]/20">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#ffb4aa] mb-6">Archive Specifications</h4>
            <div className="grid grid-cols-2 gap-y-6">
              <div>
                <span className="block text-[10px] uppercase text-[#dcc0bd]/60 font-bold mb-1">Format</span>
                <span className="text-sm font-medium">{track.format || 'Digital Recording'}</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase text-[#dcc0bd]/60 font-bold mb-1">BPM</span>
                <span className="text-sm font-medium">{track.bpm || '--'}</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase text-[#dcc0bd]/60 font-bold mb-1">Location</span>
                <span className="text-sm font-medium">{track.location || '--'}</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase text-[#dcc0bd]/60 font-bold mb-1">Released</span>
                <span className="text-sm font-medium">{track.releaseDate || '--'}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="flex-1 py-4 bg-[#2a2a2a] hover:bg-[#353535] rounded-xl text-[10px] font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2">
              <Heart size={16} />
              Save to Archive
            </button>
            <button className="flex-1 py-4 bg-[#9fcfce]/10 hover:bg-[#9fcfce]/20 text-[#9fcfce] border border-[#9fcfce]/20 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2">
              <Share2 size={16} />
              Share Track
            </button>
          </div>
        </div>
      </div>

      {/* Related Archives */}
      <section className="space-y-8 pt-8 border-t border-white/5">
        <h3 className="text-2xl font-bold">Related Archives</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {memories.slice(0, 3).map((memory, i) => (
            <div key={i} className="group cursor-pointer bg-[#1b1c1c] hover:bg-[#1f2020] p-4 rounded-2xl transition-all">
              <div className="aspect-video rounded-xl overflow-hidden mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">
                <img src={memory.image} alt={memory.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <p className="text-[10px] font-bold text-[#ffb4a4] uppercase tracking-widest mb-1">{memory.date}</p>
              <h5 className="text-lg font-bold">{memory.title}</h5>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};
