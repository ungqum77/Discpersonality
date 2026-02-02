
import React, { useEffect, useRef } from 'react';
import { DISCType, ResultContent } from '../types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { Share2, RefreshCw, Trophy, Star, Zap, UserCheck } from 'lucide-react';
import { gsap } from 'gsap';

interface ResultProps {
  scores: Record<DISCType, number>;
  result: ResultContent;
  onReset: () => void;
}

const Result: React.FC<ResultProps> = ({ scores, result, onReset }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const themeColor = result.color || "#00f3ff";

  const chartData = [
    { subject: '주도(D)', A: scores.D },
    { subject: '사교(I)', A: scores.I },
    { subject: '안정(S)', A: scores.S },
    { subject: '신중(C)', A: scores.C },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.result-header', { y: -50, opacity: 0, duration: 1 });
      gsap.from('.result-card', { x: -30, opacity: 0, duration: 0.8, delay: 0.3 });
      gsap.from('.chart-container', { scale: 0.8, opacity: 0, duration: 0.8, delay: 0.5 });
      gsap.from('.extra-info', { y: 30, opacity: 0, stagger: 0.15, duration: 0.6, delay: 0.8 });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleShare = async () => {
    const shareUrl = window.location.href;
    const text = `나의 DISC 결과는 [${result.titles[0]}]! 당신의 행동 DNA도 확인해보세요.`;
    if (navigator.share) {
      try { await navigator.share({ title: 'THE INSIGHT DISC', text, url: shareUrl }); } 
      catch (e) { navigator.clipboard.writeText(shareUrl); alert("링크가 복사되었습니다."); }
    } else {
      navigator.clipboard.writeText(shareUrl); alert("링크가 복사되었습니다.");
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-deep-black p-4 md:p-10 pt-32 pb-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="result-header text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-neon-cyan font-bold text-xs tracking-widest uppercase mb-8">
            <Trophy size={14} className="animate-pulse" /> Final Diagnosis Report
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white/50 mb-6 uppercase tracking-tighter">Your Behavioral DNA</h1>
          <h2 className="text-5xl md:text-8xl font-display font-black tracking-tighter" style={{ color: themeColor }}>
            {result.titles[0]}
          </h2>
          <div className="text-lg md:text-2xl text-gray-400 mt-6 font-medium tracking-wide">({result.base_name})</div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-8">
            {/* Summary Card */}
            <div className="result-card p-8 md:p-12 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-3xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full" style={{ backgroundColor: themeColor }}></div>
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light mb-12 italic" style={{ wordBreak: 'keep-all' }}>
                "{result.summaries[0]}"
              </p>

              <div className="grid md:grid-cols-2 gap-10 pt-10 border-t border-white/10">
                <div className="extra-info">
                  <h3 className="flex items-center gap-3 text-neon-cyan font-bold uppercase tracking-[0.2em] text-xs mb-6">
                    <Star size={16} fill="currentColor" /> 핵심 성장 조언
                  </h3>
                  <ul className="space-y-4">
                    {result.advice_list.slice(0, 3).map((advice, i) => (
                      <li key={i} className="flex gap-4 text-gray-400 text-sm leading-snug">
                        <span className="text-neon-cyan font-bold">0{i+1}.</span>
                        {advice}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="extra-info">
                  <h3 className="flex items-center gap-3 text-neon-purple font-bold uppercase tracking-[0.2em] text-xs mb-6">
                    <Zap size={16} fill="currentColor" /> 행운의 에너지 아이템
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {result.lucky_items.map((item, i) => (
                      <span key={i} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-xs font-bold">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Famous People Section */}
            <div className="extra-info p-10 rounded-[30px] bg-gradient-to-br from-white/5 to-transparent border border-white/5">
              <div className="flex items-center gap-3 mb-8">
                <UserCheck size={18} className="text-neon-cyan" />
                <h3 className="text-white/40 font-display font-bold text-xs tracking-widest uppercase">당신과 행동 방식이 닮은 인물</h3>
              </div>
              <div className="flex flex-wrap gap-x-8 gap-y-5">
                {result.famous_people_pool.slice(0, 10).map((person, i) => (
                  <span key={i} className="text-xl md:text-3xl font-display font-bold text-white hover:text-neon-cyan transition-colors cursor-default">
                    {person}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Chart Section */}
          <div className="lg:col-span-5 chart-container p-10 rounded-[40px] bg-black/40 border border-white/10 sticky top-32">
            <h3 className="text-lg font-display font-bold mb-10 text-center text-white/70 tracking-widest">BEHAVIORAL SPECTRUM</h3>
            <div className="w-full h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                  <PolarGrid stroke="#222" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#666', fontSize: 13, fontWeight: 'bold' }} />
                  <Radar
                    name="SCORE"
                    dataKey="A"
                    stroke={themeColor}
                    fill={themeColor}
                    fillOpacity={0.6}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-10">
              {chartData.map((d, i) => (
                <div key={i} className="flex flex-col p-4 rounded-2xl bg-white/5 border border-white/5 text-center">
                  <span className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">{d.subject}</span>
                  <span className="text-3xl font-display font-black text-white">{d.A}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-24 relative z-30">
          <button 
            onClick={handleShare}
            className="flex items-center gap-3 px-14 py-6 bg-neon-cyan text-black font-black rounded-2xl hover:scale-105 transition-all w-full sm:w-auto justify-center shadow-[0_0_50px_rgba(0,243,255,0.3)]"
          >
            <Share2 size={20} /> 결과 리포트 공유하기
          </button>
          <button 
            onClick={onReset}
            className="flex items-center gap-3 px-14 py-6 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all w-full sm:w-auto justify-center"
          >
            <RefreshCw size={20} /> 새로운 연령대로 다시 시작
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
