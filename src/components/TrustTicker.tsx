import React from 'react';

export const TrustTicker: React.FC = () => {
  const tickerItems = [
    { label: 'LBS Institute of Technology for Women', sub: 'Poojapura, Trivandrum' },
    { label: 'Google Solutions Hackathon', sub: 'Tech Fest Project' },
    { label: 'Ideathon 2nd Prize Winner', sub: 'IoT Public Assist' },
    { label: 'MySQL & Relational DBMS', sub: '3NF Schemas & CRUD' },
    { label: 'Python & Web Engineering', sub: 'HTML / CSS / JS' },
    { label: 'Java OOP Architecture', sub: 'Encapsulation & Design' },
    { label: 'Carmel Girls Higher Secondary', sub: 'Academic Foundation' },
  ];

  return (
    <section className="sm:px-6 z-10 max-w-7xl mx-auto px-4 py-6">
      {/* Trusted / Core Tech Bar from User Component */}
      <div className="border-gradient sm:rounded-[24px] sm:p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-neutral-900/40 rounded-[20px] p-3 backdrop-blur">
        <div className="flex items-center gap-2 text-xs text-neutral-300 shrink-0 pr-2">
          <span className="inline-flex h-2 w-2 rounded-full bg-orange-400/80 animate-pulse"></span>
          <span className="font-medium text-neutral-200">Engineering Focus & Credentials</span>
        </div>

        <div className="w-full flex-1 overflow-hidden">
          <div className="overflow-hidden relative">
            <div
              style={{
                maskImage:
                  'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
                WebkitMaskImage:
                  'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
              }}
            >
              <div className="flex gap-6 will-change-transform animate-marquee">
                {/* First loop set */}
                <div className="flex gap-6 shrink-0 items-center">
                  {tickerItems.map((item, idx) => (
                    <div
                      key={`ticker-1-${idx}`}
                      className="inline-flex items-center gap-2.5 px-4 py-2 bg-neutral-800/50 border border-neutral-700/40 rounded-xl text-xs text-neutral-300 backdrop-blur whitespace-nowrap"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                      <span className="font-semibold text-white">{item.label}</span>
                      <span className="text-[11px] text-neutral-400 font-mono">({item.sub})</span>
                    </div>
                  ))}
                </div>

                {/* Duplicate set for seamless looping */}
                <div className="flex gap-6 shrink-0 items-center">
                  {tickerItems.map((item, idx) => (
                    <div
                      key={`ticker-2-${idx}`}
                      className="inline-flex items-center gap-2.5 px-4 py-2 bg-neutral-800/50 border border-neutral-700/40 rounded-xl text-xs text-neutral-300 backdrop-blur whitespace-nowrap"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                      <span className="font-semibold text-white">{item.label}</span>
                      <span className="text-[11px] text-neutral-400 font-mono">({item.sub})</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
