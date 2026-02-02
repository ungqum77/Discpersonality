
import React, { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { DISCType, ResultContent } from '../SchemaDefinitions';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { RefreshCcw, Share2, Trophy, Zap, Star, UserCheck } from 'lucide-react';

interface Props { scores: Record<DISCType, number>; result: ResultContent; onReset: () => void; }

const InsightReport: React.FC<Props> = ({ scores, result, onReset }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Randomly select content pieces once when component mounts or result changes
  const displayContent = useMemo(() => {
    // Add comma to generic <T,> to avoid ambiguity with JSX tags in .tsx files
    const randomPick = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
    // Add comma to generic <T,> to avoid ambiguity with JSX tags in .tsx files
    const shuffle = <T,>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5);
    
    return {
      title: randomPick(result.titles),
      summary: randomPick(result.summaries),
      advice: randomPick(result.advice_list),
      luckyItem: randomPick(result.lucky_items),
      famousPeople: shuffle(result.famous_people_pool).slice(0, 8)
    };
  }, [result]);

  const chartData = [
    { subject: 'D (주도)', A: scores.D },
    { subject: 'I (사교)', A: scores.I },
    { subject: 'S (안정)', A: scores.S },
    { subject: 'C (신중)', A: scores.C },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.report-item', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.1,
        ease: 'expo.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-deep-black p-6 pt-32 pb-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="report-item inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-neon-cyan text-[10px] font-black tracking-[0.3em] uppercase mb-8">
            <Trophy size={14} className="animate-pulse" /> Final Analysis Report
          </div>
          <h1 className="report-item text-5xl md:text-8xl font-display font-black text-white mb-6 leading-tight tracking-tighter">
            {displayContent.title}
          </h1>
          <div className="report-item text-xl text-gray-400 font-bold tracking-widest uppercase opacity-60">({result.base_name})</div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          <div className="space-y-8">
            <div className="report-item p-10 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-3xl relative overflow-hidden">
               <div className="absolute top-0 left-0 w-1.5 h-full bg-neon-cyan"></div>
               <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light italic break-keep" style={{ wordBreak: 'keep-all' }}>
                "{displayContent.summary}"
               </p>
            </div>

            <div className="report-item grid md:grid-cols-2 gap-6">
               <div className="p-8 rounded-3xl bg-white/5 border border-white/5">
                 <h3 className="flex items-center gap-2 text-neon-purple font-black text-[10px] uppercase tracking-widest mb-6">
                   <Star size={14} fill="currentColor" /> 핵심 성장 조언
                 </h3>
                 <p className="text-sm text-gray-400 leading-relaxed">{displayContent.advice}</p>
               </div>
               <div className="p-8 rounded-3xl bg-white/5 border border-white/5">
                 <h3 className="flex items-center gap-2 text-yellow-400 font-black text-[10px] uppercase tracking-widest mb-6">
                   <Zap size={14} fill="currentColor" /> 에너지 아이템
                 </h3>
                 <span className="px-4 py-2 rounded-xl bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs font-black">
                   {displayContent.luckyItem}
                 </span>
               </div>
            </div>

            <div className="report-item p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/5">
              <h3 className="flex items-center gap-3 text-gray-500 font-display font-bold text-[10px] tracking-widest uppercase mb-8">
                <UserCheck size={16} /> 당신과 닮은 인물들
              </h3>
              <div className="flex flex-wrap gap-x-6 gap-y-4">
                {displayContent.famousPeople.map((person, i) => (
                  <span key={i} className="text-xl md:text-2xl font-display font-black text-white/80 hover:text-neon-cyan transition-colors cursor-default">
                    {person}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="report-item p-10 rounded-[40px] bg-black/40 border border-white/10 sticky top-32 h-[500px]">
            <h3 className="text-xs font-display font-bold mb-10 text-center text-gray-500 tracking-[0.4em] uppercase">Behavioral Spectrum</h3>
            <div className="w-full h-full max-h-[350px]">
              <ResponsiveContainer>
                <RadarChart data={chartData}>
                  <PolarGrid stroke="#222" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#666', fontSize: 12, fontWeight: 'bold' }} />
                  <Radar dataKey="A" stroke="#00f3ff" fill="#00f3ff" fillOpacity={0.5} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="report-item flex flex-col sm:flex-row gap-5 justify-center">
          <button onClick={onReset} className="flex items-center justify-center gap-3 px-14 py-6 bg-neon-cyan text-black rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-[0_0_40px_rgba(0,243,255,0.4)]">
            <RefreshCcw size={24} />
            다시 시작하기
          </button>
          <button className="flex items-center justify-center gap-3 px-14 py-6 bg-white/5 border border-white/10 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all text-white">
            <Share2 size={24} />
            결과 공유하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsightReport;
