import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer
      id="site-footer"
      className="py-8 sm:py-10 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto border-t border-[#27272a] text-xs font-mono text-[#71717a] relative z-10"
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
        {/* Left */}
        <div id="footer-left-identity" className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#fafafa]/80 shrink-0" aria-hidden="true" />
          <span className="text-[#a1a1aa]">
            {PERSONAL_INFO.name} — {PERSONAL_INFO.title}
          </span>
        </div>

        {/* Right */}
        <div id="footer-right-copyright" className="text-center sm:text-right">
          <span>Bengaluru, India • © 2026</span>
        </div>
      </div>
    </footer>
  );
};
