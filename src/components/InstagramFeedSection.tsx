import React, { useState } from 'react';
import { SayaFormSymbol } from './brand/SayaFormSymbol';
import { SayaFormLogo } from './brand/SayaFormLogo';
import { INSTAGRAM_FEED } from '../data/sayaFormData';
import { InstagramFeedItem } from '../types';
import { Heart, MessageSquare, ExternalLink, Sparkles, Instagram } from 'lucide-react';

export const InstagramFeedSection: React.FC = () => {
  const [activeStoryIndex, setActiveStoryIndex] = useState<number | null>(null);
  const [selectedPost, setSelectedPost] = useState<InstagramFeedItem | null>(null);

  const stories = [
    { title: 'ATHLÈTES', type: 'symbol', highlight: true },
    { title: 'BRANDS', type: 'logo', highlight: false },
    { title: 'VISION', type: 'symbol', highlight: true },
    { title: 'BACKSTAGE', type: 'logo', highlight: false },
    { title: 'TUNNELS', type: 'symbol', highlight: true },
    { title: 'CLUB PRIVÉ', type: 'logo', highlight: false },
  ];

  return (
    <section id="section-feed" className="py-28 bg-[#050B18] relative overflow-hidden border-t border-[#C2927E]/20">
      {/* Background Watermark */}
      <div className="absolute top-1/3 -right-20 pointer-events-none opacity-5">
        <SayaFormSymbol size={500} showRing={true} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#C2927E]/20">
          <div>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-[#C2927E] mb-2 font-semibold">
              <Instagram className="w-3.5 h-3.5" />
              <span>CONTINUITÉ DIGITALE • INSTAGRAM FEED</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold uppercase text-[#FDFCF8] tracking-tight">
              L'UNIVERS{' '}
              <span className="text-rosegold-gradient">
                @SAYAFORM
              </span>
            </h2>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full text-[10px] uppercase tracking-[0.25em] text-[#050B18] bg-rosegold-gradient font-medium hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg"
            >
              <span>Rejoindre @sayaform</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Stories à la Une Highlights Row */}
        <div className="mb-14 pb-6 overflow-x-auto no-scrollbar">
          <div className="text-[10px] uppercase tracking-[0.35em] text-[#C2927E]/80 mb-4 flex items-center gap-2 font-semibold">
            <SayaFormSymbol size={16} showRing={false} />
            <span>Stories à la une officielles (Symboles SAYA FORM)</span>
          </div>

          <div className="flex items-center gap-6 sm:gap-8 min-w-max">
            {stories.map((story, sIdx) => (
              <button
                key={sIdx}
                onClick={() => setActiveStoryIndex(activeStoryIndex === sIdx ? null : sIdx)}
                className="flex flex-col items-center gap-2.5 group focus:outline-none"
              >
                {/* Story Circle Ring */}
                <div
                  className={`p-[2.5px] rounded-full transition-transform duration-300 group-hover:scale-105 ${
                    activeStoryIndex === sIdx
                      ? 'bg-gradient-to-tr from-[#DFC0B5] via-[#C2927E] to-[#8F5542] shadow-[0_0_20px_rgba(194,146,126,0.5)]'
                      : 'bg-[#C2927E]/30 group-hover:bg-[#C2927E]'
                  }`}
                >
                  <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-[#080F1F] flex items-center justify-center p-2 border border-[#050B18]">
                    {story.type === 'symbol' ? (
                      <SayaFormSymbol size={42} showRing={false} />
                    ) : (
                      <SayaFormLogo size={38} monogramOnly={true} />
                    )}
                  </div>
                </div>

                <span className="text-[9px] uppercase tracking-[0.25em] text-[#FDFCF8]/80 group-hover:text-[#C2927E] transition-colors">
                  {story.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* 3x3 Instagram Feed Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {INSTAGRAM_FEED.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPost(item)}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-[#080F1F] border border-[#C2927E]/20 shadow-xl cursor-pointer hover:border-[#C2927E]/80 transition-all duration-500"
            >
              {/* Tile Content depending on type */}
              {item.type === 'image' && item.image && (
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              )}

              {item.type === 'monogram' && (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#080F1F] via-[#050B18] to-[#0A1225] p-8 text-center">
                  <SayaFormLogo size={120} monogramOnly={true} />
                  <span className="editorial-font text-xl text-[#FDFCF8] tracking-[0.25em] mt-4 italic">
                    SAYA FORM
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.3em] text-[#C2927E] mt-1 font-semibold">
                    Monogramme Officiel
                  </span>
                </div>
              )}

              {item.type === 'symbol' && (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#080F1F] via-[#050B18] to-[#0A1225] p-8 text-center">
                  <SayaFormSymbol size={130} showRing={true} />
                  <span className="editorial-font text-lg text-[#DFC0B5] tracking-[0.2em] mt-4 italic">
                    Les Deux Plumes
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.3em] text-[#FDFCF8]/60 mt-1">
                    Signature Stories & Identité
                  </span>
                </div>
              )}

              {item.type === 'quote' && (
                <div className="w-full h-full flex flex-col items-center justify-center bg-[#FDFCF8] text-[#050B18] p-8 text-center">
                  <span className="text-[9px] uppercase tracking-[0.35em] text-[#8F5542] mb-4 font-semibold">
                    Extrait du Manifeste
                  </span>
                  <p className="editorial-font italic text-xl sm:text-2xl text-[#050B18] leading-relaxed">
                    “We do not capture sports. We direct power and presence.”
                  </p>
                  <div className="mt-4 w-12 h-[1.5px] bg-[#C2927E]" />
                </div>
              )}

              {/* Hover Overlay with Instagram details */}
              <div className="absolute inset-0 bg-[#050B18]/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between z-20">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full text-[9px] uppercase tracking-[0.25em] bg-[#C2927E]/20 text-[#DFC0B5] border border-[#C2927E]/30">
                    {item.category}
                  </span>
                  <Instagram className="w-4 h-4 text-[#C2927E]" />
                </div>

                <p className="text-xs text-[#FDFCF8]/90 font-light leading-relaxed line-clamp-3">
                  {item.caption}
                </p>

                <div className="flex items-center justify-between text-xs text-[#C2927E] pt-3 border-t border-[#C2927E]/20">
                  <div className="flex items-center gap-1.5">
                    <Heart className="w-4 h-4 fill-[#C2927E]" />
                    <span className="text-[11px] text-[#FDFCF8]">{item.likes}</span>
                  </div>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#FDFCF8]/70">
                    Afficher
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
