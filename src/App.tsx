import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { BottomNav } from './components/BottomNav';
import { MiniPlayer } from './components/MiniPlayer';
import { Hero } from './components/Hero';
import { TrackList } from './components/TrackList';
import { Memories } from './components/Memories';
import { TrackDetail } from './components/TrackDetail';
import { AudioProvider } from './contexts/AudioContext';
import { motion, AnimatePresence } from 'motion/react';
import { TRACKS, MEMORIES, getFeaturedTracks, getAllTracks } from './data/tracks';
import type { Track } from './data/tracks';

function AppContent() {
  const [activeTab, setActiveTab] = useState('featured');
  const [showDetail, setShowDetail] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);

  const featuredTracks = getFeaturedTracks();
  const allTracks = getAllTracks();
  const heroTrack = featuredTracks[0] || allTracks[0];

  const handleShowDetails = (track: Track) => {
    setSelectedTrack(track);
    setShowDetail(true);
  };

  return (
    <div className="min-h-screen pb-40">
      <TopBar />
      
      <main className="max-w-7xl mx-auto px-6 pt-24 space-y-16">
        <AnimatePresence mode="wait">
          {showDetail && selectedTrack ? (
            <motion.div
              key="detail"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <TrackDetail 
                track={selectedTrack} 
                memories={MEMORIES}
                onBack={() => setShowDetail(false)} 
              />
            </motion.div>
          ) : (
            <motion.div 
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="space-y-16"
            >
              {/* Hero */}
              {heroTrack && (
                <Hero 
                  track={heroTrack} 
                  onDetails={() => handleShowDetails(heroTrack)} 
                />
              )}
              
              {/* Tab Content */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left / Main Column */}
                {(activeTab === 'featured' || activeTab === 'tracks') && (
                  <div className={activeTab === 'featured' ? 'lg:col-span-7' : 'lg:col-span-12'}>
                    <TrackList 
                      tracks={allTracks} 
                      onTrackClick={handleShowDetails}
                    />
                  </div>
                )}
                
                {/* Right / Sidebar */}
                {(activeTab === 'featured' || activeTab === 'memories') && (
                  <div className={activeTab === 'featured' ? 'lg:col-span-5' : 'lg:col-span-12'}>
                    <Memories memories={MEMORIES} />
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <MiniPlayer />
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default function App() {
  return (
    <AudioProvider>
      <AppContent />
    </AudioProvider>
  );
}
