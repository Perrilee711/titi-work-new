import { createContext, useContext, useState, useRef, useEffect, type ReactNode } from 'react';

export interface Track {
  id: string;
  title: string;
  artist: string;
  date: string;
  duration: number;
  description: string;
  vibe: string[];
  src: string;
  coverColor: string;
  featured?: boolean;
  order?: number;
  timelineLink?: string;
  noteLink?: string;
}

interface AudioContextType {
  currentTrack: Track | null;
  isPlaying: boolean;
  progress: number;
  volume: number;
  playlist: Track[];
  play: (track: Track) => void;
  toggle: () => void;
  next: () => void;
  prev: () => void;
  seek: (time: number) => void;
  setVolume: (v: number) => void;
}

const AudioContext = createContext<AudioContextType | null>(null);

export function AudioProvider({ children }: { children: ReactNode }) {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolumeState] = useState(0.8);
  const [playlist, setPlaylist] = useState<Track[]>([]);

  const howlRef = useRef<any>(null);
  const isPlayingRef = useRef(false);
  const playlistRef = useRef<Track[]>([]);
  const currentTrackRef = useRef<Track | null>(null);

  useEffect(() => {
    playlistRef.current = playlist;
  }, [playlist]);

  useEffect(() => {
    currentTrackRef.current = currentTrack;
  }, [currentTrack]);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent('audio-state-change', {
      detail: { track: currentTrack, isPlaying }
    }));
  }, [currentTrack, isPlaying]);

  const updateProgress = () => {
    if (howlRef.current && isPlayingRef.current) {
      const seek = howlRef.current.seek() || 0;
      setProgress(seek);
      requestAnimationFrame(updateProgress);
    }
  };

  const play = (track: Track) => {
    if (howlRef.current) {
      howlRef.current.unload();
      howlRef.current = null;
    }

    const Howl = (window as any).Howl;
    if (!Howl) {
      console.error('Howler not loaded');
      return;
    }

    setPlaylist(prev => {
      if (!prev.find(t => t.id === track.id)) {
        return [...prev, track];
      }
      return prev;
    });

    try {
      const sound = new Howl({
        src: [track.src],
        html5: true,
        volume: volume,
        preload: true,
        onplay: () => {
          setIsPlaying(true);
          isPlayingRef.current = true;
          requestAnimationFrame(updateProgress);
        },
        onpause: () => {
          setIsPlaying(false);
          isPlayingRef.current = false;
        },
        onend: () => {
          const currentPlaylist = playlistRef.current;
          const idx = currentPlaylist.findIndex(t => t.id === track.id);
          if (idx < currentPlaylist.length - 1) {
            play(currentPlaylist[idx + 1]);
          } else {
            setIsPlaying(false);
            isPlayingRef.current = false;
            setProgress(0);
          }
        },
        onloaderror: (_id: number, error: any) => {
          console.error('Load error:', error);
        },
        onplayerror: (_id: number, error: any) => {
          console.error('Play error:', error);
        },
      });

      howlRef.current = sound;
      setCurrentTrack(track);
      currentTrackRef.current = track;
      sound.play();
    } catch (err) {
      console.error('Error:', err);
    }
  };

  const toggle = () => {
    if (!howlRef.current) return;
    if (isPlayingRef.current) {
      howlRef.current.pause();
    } else {
      howlRef.current.play();
    }
  };

  const next = () => {
    const track = currentTrackRef.current;
    if (!track || playlistRef.current.length === 0) return;
    const idx = playlistRef.current.findIndex(t => t.id === track.id);
    if (idx < playlistRef.current.length - 1) {
      play(playlistRef.current[idx + 1]);
    }
  };

  const prev = () => {
    const track = currentTrackRef.current;
    if (!track || playlistRef.current.length === 0) return;
    if (progress > 3) {
      howlRef.current?.seek(0);
      setProgress(0);
    } else {
      const idx = playlistRef.current.findIndex(t => t.id === track.id);
      if (idx > 0) {
        play(playlistRef.current[idx - 1]);
      }
    }
  };

  const seek = (time: number) => {
    if (howlRef.current) {
      howlRef.current.seek(time);
      setProgress(time);
    }
  };

  const setVolume = (v: number) => {
    setVolumeState(v);
    if (howlRef.current) {
      howlRef.current.volume(v);
    }
  };

  useEffect(() => {
    if (!(window as any).Howl) {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js';
      document.head.appendChild(script);
    }

    const handlePlayTrack = (e: Event) => {
      const track = (e as CustomEvent<any>).detail;
      play(track);
    };

    window.addEventListener('play-track', handlePlayTrack);

    return () => {
      window.removeEventListener('play-track', handlePlayTrack);
      if (howlRef.current) {
        howlRef.current.unload();
      }
    };
  }, []);

  return (
    <AudioContext.Provider value={{
      currentTrack, isPlaying, progress, volume, playlist,
      play, toggle, next, prev, seek, setVolume
    }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const ctx = useContext(AudioContext);
  if (!ctx) {
    return {
      currentTrack: null,
      isPlaying: false,
      progress: 0,
      volume: 0.8,
      playlist: [],
      play: () => {},
      toggle: () => {},
      next: () => {},
      prev: () => {},
      seek: () => {},
      setVolume: () => {},
    };
  }
  return ctx;
}
