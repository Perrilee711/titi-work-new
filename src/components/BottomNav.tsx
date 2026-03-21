import React from 'react';
import { Sparkles, Music2, BookOpen } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'featured', label: 'Featured', icon: Sparkles },
    { id: 'tracks', label: 'Tracks', icon: Music2 },
    { id: 'memories', label: 'Memories', icon: BookOpen },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-20 glass-panel z-50 flex justify-around items-center px-4 pb-4">
      {tabs.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => setActiveTab(id)}
          className={`flex flex-col items-center gap-1 px-6 py-2 rounded-xl transition-all ${
            activeTab === id 
              ? 'text-[#ffb4aa] bg-[#ffb4aa]/10' 
              : 'text-[#dcc0bd] hover:bg-white/5'
          }`}
        >
          <Icon size={20} fill={activeTab === id ? 'currentColor' : 'none'} />
          <span className="text-[10px] uppercase tracking-widest font-bold">{label}</span>
        </button>
      ))}
    </nav>
  );
};
