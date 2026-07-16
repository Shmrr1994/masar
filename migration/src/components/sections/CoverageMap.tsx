import React, { useState } from "react";
import { MapPin, Navigation, Compass, Radio } from "lucide-react";
import { CITIES, CityInfo } from "../../lib/data";
import { motion, AnimatePresence } from "motion/react";

export default function CoverageMap() {
  const [selectedCity, setSelectedCity] = useState<CityInfo>(CITIES[0]);

  return (
    <section id="coverage" className="py-24 bg-[#0B0F17] relative overflow-hidden border-t border-white/5">
      {/* Visual grids & blobs */}
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
      <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-brand-green-light/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-green font-bold text-sm uppercase tracking-wider bg-brand-green-light px-4 py-1.5 rounded-full inline-block mb-4">
            التغطية الجغرافية
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight mb-4 leading-tight">
            نغطي كافة مدن ومناطق المملكة العربية السعودية
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-normal">
            اضغط على أي مدينة على الخريطة لعرض تفاصيل التغطية وحجم أسطول القادة النشطين حالياً.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left panel: Info display (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="sleek-card rounded-2xl p-6 md:p-8 space-y-6 shadow-sm">
              <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-500 block leading-none mb-1">المنطقة النشطة</span>
                  <h3 className="text-xl font-bold font-heading text-white leading-none">
                    {selectedCity.name}
                  </h3>
                </div>
              </div>

              {/* City Description */}
              <p className="text-slate-400 text-sm leading-relaxed">
                {selectedCity.description}
              </p>

              {/* Stats Box */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#0D1321]/60 border border-white/5 p-4 rounded-xl flex flex-col items-center justify-center text-center">
                  <span className="text-3xl font-extrabold text-brand-green font-heading mb-1 drop-shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                    {selectedCity.activeDrivers}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">سائق نشط الآن</span>
                </div>
                
                <div className="bg-[#0D1321]/60 border border-white/5 p-4 rounded-xl flex flex-col items-center justify-center text-center">
                  <span className="text-sm font-bold text-emerald-400 bg-emerald-950/50 border border-emerald-900/40 px-2.5 py-1 rounded-full mb-1">
                    متاح فوري
                  </span>
                  <span className="text-xs text-slate-400 font-medium">زمن الاستجابة &lt; 15 د</span>
                </div>
              </div>

              {/* Indicator signal */}
              <div className="bg-slate-950 border border-white/5 text-slate-300 p-4 rounded-xl flex items-center gap-3">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-medium text-slate-300">
                  يتم الآن تتبع شحنات نشطة في {selectedCity.name} في الوقت الفعلي.
                </span>
              </div>
            </div>

            {/* Quick selectors for cities */}
            <div className="grid grid-cols-3 gap-2">
              {CITIES.map((city) => (
                <button
                  key={city.id}
                  onClick={() => setSelectedCity(city)}
                  className={`py-2 px-3 rounded-xl border text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer text-center ${
                    selectedCity.id === city.id
                      ? "bg-brand-green border-brand-green text-white shadow-md shadow-emerald-950/10"
                      : "bg-[#111827]/40 hover:bg-[#161F30]/60 border-white/5 text-slate-300"
                  }`}
                >
                  {city.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right panel: Premium stylized SVG Saudi Arabia Map (Col 7) */}
          <div className="lg:col-span-7 flex justify-center relative">
            <div className="relative w-full max-w-[550px] aspect-[4/3] bg-[#0D1321]/40 rounded-3xl border border-white/5 shadow-inner flex items-center justify-center p-6 select-none overflow-hidden">
              
              {/* Compass or map elements inside map background */}
              <div className="absolute top-4 right-4 flex items-center gap-2 text-[10px] text-slate-500 font-mono">
                <Navigation className="w-3.5 h-3.5 text-slate-500" />
                <span>KSA LOGISTICS COVERAGE MAP</span>
              </div>

              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-[10px] text-slate-500 font-mono">
                <Radio className="w-3.5 h-3.5 text-brand-green animate-pulse" />
                <span>إشارة الاتصال بالأقمار الصناعية ممتازة</span>
              </div>

              {/* Styled Vector SVG of Saudi Arabia (simplified artistic projection) */}
              <svg
                id="ksa-vector-svg"
                viewBox="0 0 500 375"
                className="w-full h-full text-slate-800 hover:text-slate-800/90 transition-colors duration-300"
                style={{ filter: "drop-shadow(0 10px 15px rgba(16, 185, 129, 0.02))" }}
              >
                {/* Simplified Path representing Saudi Outline */}
                <path
                  d="M 120,80 
                     C 140,75 180,60 210,50 
                     C 230,45 280,30 310,35 
                     C 325,38 340,55 350,60 
                     C 380,75 420,110 440,130 
                     C 460,150 480,170 470,185 
                     C 460,200 420,205 390,215 
                     C 370,220 340,240 310,260 
                     C 280,280 250,310 230,335 
                     C 225,340 210,355 200,345 
                     C 190,335 185,315 170,300 
                     C 160,290 130,270 120,255 
                     C 110,240 105,210 100,195 
                     C 95,180 80,165 85,150 
                     C 90,135 110,120 120,80 Z"
                  fill="#111827"
                  stroke="#1E293B"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />

                {/* Internal borders/texture paths for aesthetic depth */}
                <path
                  d="M 180,180 C 220,190 280,160 330,200"
                  fill="none"
                  stroke="#162035"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <path
                  d="M 280,100 C 310,140 260,220 230,280"
                  fill="none"
                  stroke="#162035"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
              </svg>

              {/* Glowing Interactive Pins over Map */}
              {CITIES.map((city) => {
                const isSelected = selectedCity.id === city.id;
                return (
                  <button
                    key={city.id}
                    onClick={() => setSelectedCity(city)}
                    className="absolute cursor-pointer group focus:outline-none z-20"
                    style={{
                      left: `${city.x}%`,
                      top: `${city.y}%`,
                    }}
                  >
                    <div className="relative flex items-center justify-center">
                      {/* Interactive ring animations */}
                      <span className={`absolute inline-flex rounded-full bg-emerald-500 opacity-60 transition-all duration-300 ${
                        isSelected ? "h-8 w-8 animate-ping" : "h-6 w-6 group-hover:animate-ping"
                      }`} />
                      
                      {/* Core Indicator Dot */}
                      <span className={`relative rounded-full border-2 border-[#0D1321] shadow-md transition-all duration-300 ${
                        isSelected 
                          ? "h-4.5 w-4.5 bg-brand-green scale-110" 
                          : "h-3.5 w-3.5 bg-emerald-500 group-hover:bg-brand-green scale-100"
                      }`} />

                      {/* Floating tooltip indicating city name */}
                      <div className={`absolute bottom-6 px-2.5 py-1 rounded-lg border text-[10px] font-bold shadow-md pointer-events-none transition-all duration-200 whitespace-nowrap ${
                        isSelected
                          ? "bg-slate-900 border-white/10 text-white scale-100 translate-y-0"
                          : "bg-[#0B0F17] border-white/5 text-slate-200 scale-90 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0"
                      }`}>
                        {city.name}
                      </div>
                    </div>
                  </button>
                );
              })}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
