import React, { useState, useEffect } from 'react';
import { PlayCircle } from 'lucide-react';
import type { Track } from '../data/tracks';

interface TrackListProps {
  tracks: Track[];
  onTrackClick: (track: Track) => void;
}

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export const TrackList: React.FC<TrackListProps> = ({ tracks, onTrackClick }) => {
  const [currentId, setCurrentId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleStateChange = (e: Event) => {
      const { track, isPlaying: playing } = (e as CustomEvent<any>).detail;
      setCurrentId(track?.id || null);
      setIsPlaying(playing);
    };
    window.addEventListener('audio-state-change', handleStateChange);
    return () => window.removeEventListener('audio-state-change', handleStateChange);
  }, []);

  const handlePlay = (track: Track, e: React.MouseEvent) => {
    e.stopPropagation();
    window.dispatchEvent(new CustomEvent('play-track', { detail: track }));
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <h3 className="text-2xl font-bold">All Tracks</h3>
        <span className="text-[10px] uppercase tracking-widest font-bold text-[#dcc0bd]">
          {tracks.length} Archived Items
        </span>
      </div>

      <div className="space-y-2">
        {tracks.map((track, index) => {
          const isCurrent = track.id === currentId;
          return (
            <div 
              key={track.id}
              onClick={() => onTrackClick(track)}
              className="group flex items-center gap-6 p-4 rounded-2xl hover:bg-[#1b1c1c] transition-all cursor-pointer"
            >
              <span className={`w-6 text-lg font-bold transition-colors ${isCurrent ? 'text-[#ffb4aa]' : 'text-[#dcc0bd] group-hover:text-[#ffb4aa]'}`}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <div 
                className="w-14 h-14 rounded-xl overflow-hidden bg-[#2a2a2a] shrink-0"
                style={{ background: track.coverColor || '#2a2a2a' }}
              >
                <img 
                  src={`https://picsum.photos/seed/${track.id}/100/100`}
                  alt={track.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-grow min-w-0">
                <h4 className={`font-bold group-hover:text-[#ffb4aa] transition-colors ${isCurrent ? 'text-[#ffb4aa]' : ''}`}>
                  {track.title}
                </h4>
                <p className="text-sm text-[#dcc0bd]">
                  Titi · {formatTime(track.duration)}
                </p>
              </div>
              <button 
                onClick={(e) => handlePlay(track, e)}
                className="opacity-0 group-hover:opacity-100 text-[#ffb4aa] transition-all hover:scale-110"
              >
                {isCurrent && isPlaying ? (
                  <div className="playing-bar">
                    <span></span><span></span><span></span><span></span>
                  </div>
                ) : (
                  <PlayCircle size={24} />
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
