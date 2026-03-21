import React from 'react';
import type { Memory } from '../data/tracks';

interface MemoriesProps {
  memories: Memory[];
}

export const Memories: React.FC<MemoriesProps> = ({ memories }) => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <h3 className="text-2xl font-bold">Memories</h3>
        <a href="#" className="text-[10px] uppercase tracking-widest font-bold text-[#ffb4aa] hover:opacity-80">
          See Full Log
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {memories.map((memory) => (
          <div 
            key={memory.id}
            className="relative aspect-[16/9] rounded-3xl overflow-hidden group cursor-pointer"
          >
            <img 
              src={memory.image}
              alt={memory.title}
              className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#ffb4a4] mb-1">
                {memory.date}
              </span>
              <h4 className="text-xl font-bold text-white mb-1">{memory.title}</h4>
              <p className="text-sm text-neutral-400 line-clamp-1">{memory.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
