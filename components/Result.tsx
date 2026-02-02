import React, { useEffect, useRef, useState, useMemo } from 'react';
import { DISCType, ResultContent, AgeGroup } from '../SchemaDefinitions';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { RefreshCw, Zap, Image as ImageIcon, Calendar, User, Star, UserCheck } from 'lucide-react';
import { gsap } from 'gsap';
import html2canvas from 'html2canvas';

const TYPE_COLORS: Record<DISCType, string> = {
  D: '#FF2E88', // Neon Pink
  I: '#FFD000', // Neon Yellow
  S: '#00F3FF', // Neon Cyan
  C: '#B23AFF', // Neon Purple
};

const AGE_LABELS: Record<AgeGroup, string> = {
  '10s': '10대', '20s': '20대', '30s': '30대', '40s': '40대', '50s': '50대', '60s': '60대+',
};

interface ResultProps {
  scores: Record<DISCType, number>;
  result: ResultContent;
  onReset: () => void;
  ageGroup: AgeGroup;
}

const Result: React.FC<ResultProps> = ({ scores, result, onReset, ageGroup }) => {
  const printRef = useRef<HTMLDivElement>(null);

  const highestType = useMemo(() => {
    return (Object.entries(scores) as [DISCType, number][]).reduce((a, b) => a[1] > b[1] ? a : b)[0];
  }, [scores]);

  const themeColor = TYPE_COLORS[highestType];
  const currentDate = useMemo(() => new Intl.DateTimeFormat('ko-KR', { 
    year: 'numeric', month: 'long', day: 'numeric'
  }).format(new Date()), []);

  const famousPeople = useMemo(() => {
    return [...result.famous_people_pool].sort(() => 0.5 - Math.random()).slice(0, 3);
  }, [result.famous_people_pool]);

  // 그래프의 4개 면을 채우기 위한 정밀 데이터 구조
  // 각 Radar가 독립적으로 동작하며 서로 겹쳐질 때 블렌딩 효과가 발생함
  const chartData = useMemo(() => [
    { subject: 'D', d: scores.D, i: 0, s: 0, c: 0 },
    { subject: 'I', d: 0, i: scores.I, s: 0, c: 0 },
    { subject: 'S', d: 0, i: 0, s: scores.S, c: 0 },
    { subject: 'C', d: 0, i: 0, s: 0, c: scores.C },
  ], [scores]);

  useEffect(() => {
    gsap.from('.fade-in', { y: 20, opacity: 0, stagger: 0.1, duration: 0.6, ease: 'power2.out' });
  }, []);

  const handleSaveAsImage = async () => {
    if (!printRef.current) return;
    
    // 캡처 전용 스타일 강제 적용
    const originalStyle = printRef.current.style.cssText;
    printRef.current.style.width = '440px';
    printRef.current.style.height = '840px';
    
    const canvas = await html2canvas(printRef.current, { 
      scale: 3, 
      backgroundColor: '#0a0a0a', 
      useCORS: true,
      logging: false,
      allowTaint: true,
    });
    
    printRef.current.style.cssText = originalStyle; // 스타일 복구
    
    const link = document.createElement('a');
    link.download = `THE_INSIGHT_${result.titles[0]}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <div className="min-h-screen bg-deep-black p-4 md:p-10 pt-28 pb-32 flex flex-col items-center overflow-x-hidden">
      
      {/* 9:16 Profile Card - px 기반 고정 레이아웃으로 캡처 시 밀림 방지 */}
      <div 
        id="capture-card"
        ref={printRef}
        className="relative bg-deep-black border border-white/10 rounded-[50px] shadow-[0_0_80px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col"
        style={{ width: '440px', minHeight: '840px', flexShrink: 0 }}
      >
        {/* 상단 테마색 바 */}
        <div className="absolute top-0 left-0 w-full h-3" style={{ backgroundColor: themeColor }}></div>
        {/* 은은한 배경 광원 */}
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] blur-[150px] opacity-[0.2] rounded-full" style={{ backgroundColor: themeColor }}></div>
        
        <div className="relative z-10 flex flex-col h-full px-10 py-12 flex-grow">
          {/* Metadata Header */}
          <div className="flex justify-between items-center mb-8 opacity-60">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-white leading-none uppercase">
                <Calendar size={10} className="shrink-0" style={{ color: themeColor }} /> <span>{currentDate}</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-white leading-none uppercase">
                <User size={10} className="shrink-0" style={{ color: themeColor }} /> <span>연령 : {AGE_LABELS[ageGroup]}</span>
              </div>
            </div>
            <span className="text-[12px] font-black tracking-[0.3em] uppercase italic text-neon-cyan">INSIGHT LAB</span>
          </div>

          {/* Title Section */}
          <div className="mb-8">
            <h1 className="text-[34px] font-display font-black leading-[1.1] tracking-tighter mb-3 break-keep" style={{ color: themeColor }}>
              {result.titles[0]}
            </h1>
            <p className="text-[11px] text-gray-400 font-black uppercase tracking-[0.3em] border-l-4 pl-3" style={{ borderColor: themeColor }}>
              {result.base_name}
            </p>
          </div>

          {/* Artistic Radar Chart - 4개의 Radar 레이어 */}
          <div className="relative h-[220px] mb-8 flex items-center justify-center bg-white/[0.02] rounded-[40px] border border-white/5">
            <div className="absolute inset-0 p-4">
               <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="75%" data={chartData}>
                  <PolarGrid stroke="#333" strokeWidth={1} />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#777', fontSize: 14, fontWeight: '900' }} />
                  
                  {/* 각 유형별 독립적인 면 생성 (블렌딩 효과) */}
                  <Radar name="D" dataKey="d" stroke={TYPE_COLORS.D} fill={TYPE_COLORS.D} fillOpacity={0.5} strokeWidth={2} />
                  <Radar name="I" dataKey="i" stroke={TYPE_COLORS.I} fill={TYPE_COLORS.I} fillOpacity={0.5} strokeWidth={2} />
                  <Radar name="S" dataKey="s" stroke={TYPE_COLORS.S} fill={TYPE_COLORS.S} fillOpacity={0.5} strokeWidth={2} />
                  <Radar name="C" dataKey="c" stroke={TYPE_COLORS.C} fill={TYPE_COLORS.C} fillOpacity={0.5} strokeWidth={2} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Score Badges - Grid 레이아웃 고정 */}
          <div className="grid grid-cols-4 gap-3 mb-8">
            {(['D', 'I', 'S', 'C'] as DISCType[]).map(type => (
              <div key={type} className="flex flex-col items-center py-4 rounded-[25px] bg-white/5 border border-white/5 shadow-lg">
                <span className="text-[11px] font-black mb-1" style={{ color: TYPE_COLORS[type] }}>{type}</span>
                <span className="text-2xl font-display font-black text-white leading-none">{scores[type]}</span>
              </div>
            ))}
          </div>

          {/* Summary - 고정된 폰트 크기와 줄간격 */}
          <div className="p-7 rounded-[35px] bg-white/5 border border-white/10 backdrop-blur-3xl mb-8 shadow-xl">
            <p className="text-[15px] text-gray-200 leading-relaxed italic break-keep font-medium" style={{ wordBreak: 'keep-all' }}>
              "{result.summaries[0]}"
            </p>
          </div>

          {/* Items & Soulmates */}
          <div className="space-y-6 mt-auto">
            <div>
              <h3 className="text-[10px] font-black text-neon-purple tracking-[0.4em] uppercase mb-3 flex items-center gap-2">
                <Zap size={12} fill="currentColor" /> ENERGY BOOST ITEM
              </h3>
              <div className="flex flex-wrap gap-2">
                {result.lucky_items.map((item, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] text-white font-black">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-2 text-center">
               {famousPeople.map((p, i) => (
                 <div key={i} className="flex flex-col items-center gap-1">
                   <div className="text-[9px] text-gray-500 uppercase font-black tracking-widest">Soulmate</div>
                   <div className="text-[12px] text-white font-black truncate w-full">{p}</div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Control Area (이미지에 포함되지 않음) */}
      <div className="w-full max-w-[440px] space-y-6 mt-12 fade-in">
        <div className="grid grid-cols-2 gap-5">
          <button 
            onClick={handleSaveAsImage} 
            className="flex items-center justify-center gap-3 py-6 bg-white text-black font-black rounded-[30px] hover:scale-105 active:scale-95 transition-all shadow-[0_20px_50px_rgba(255,255,255,0.2)] text-lg"
          >
            <ImageIcon size={24} /> 결과 저장
          </button>
          <button 
            onClick={onReset} 
            className="flex items-center justify-center gap-3 py-6 bg-white/5 border border-white/10 text-white font-black rounded-[30px] hover:bg-white/10 active:scale-95 transition-all text-lg shadow-xl"
          >
            <RefreshCw size={24} /> 다시 하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;