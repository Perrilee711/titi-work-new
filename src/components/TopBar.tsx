import React from 'react';
import { Menu } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 glass-panel z-50 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button className="text-[#ffb4aa] hover:opacity-80 transition-opacity">
          <Menu size={24} />
        </button>
        <h1 className="text-xl font-black uppercase tracking-tighter text-[#ffb4aa]">
          Sonic Archive
        </h1>
      </div>
      
      <div className="flex items-center gap-6">
        <nav className="hidden md:flex gap-8">
          {['Featured', 'Tracks', 'Memories'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#dcc0bd] hover:text-[#ffb4aa] transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
        
        <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10 bg-[#2a2a2a]">
          <div className="w-full h-full flex items-center justify-center text-xs">
            👤
          </div>
        </div>
      </div>
    </header>
  );
};
