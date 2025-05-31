'use client';

import ScrollLink from './ScrollLink';

const HeroCTA = () => {
  return (
    <div className="flex justify-center py-8">
      <ScrollLink
        targetId="ranking"
        className="bg-[#00C853] hover:bg-[#00B848] text-white text-xl font-medium px-8 py-4 rounded-full shadow-lg flex items-center gap-2 transition-all transform hover:scale-105"
      >
        Confira a análise remédios para emagrecer
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </ScrollLink>
    </div>
  );
};

export default HeroCTA; 