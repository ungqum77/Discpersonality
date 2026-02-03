import React, { useEffect, useRef, useMemo } from 'react';
import { DISCType, ResultContent, AgeGroup } from '../SchemaDefinitions';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { RefreshCw, Zap, Image as ImageIcon, Calendar, User, CheckCircle2, UserCircle2, Link } from 'lucide-react';
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

  const totalAnswered = useMemo(() => Object.values(scores).reduce((a: number, b: number) => a + b, 0), [scores]);

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

  const chartData = useMemo(() => [
    { subject: 'D', value: scores.D },
    { subject: 'I', value: scores.I },
    { subject: 'S', value: scores.S },
    { subject: 'C', value: scores.C },
  ], [scores]);

  useEffect(() => {
    gsap.from('.fade-in', { y: 20, opacity: 0, stagger: 0.1, duration: 0.6, ease: 'power2.out' });
  }, []);

  const handleCopyLink = async () => {
    const SHARE_URL = 'https://disc.woongth.com';
    try {
      await navigator.clipboard.writeText(SHARE_URL);
      alert("테스트 주소가 복사되었습니다! 친구들에게 공유해보세요.");
    } catch (err) {
      console.error('Clipboard write failed:', err);
      // Fallback for some environments
      const textArea = document.createElement("textarea");
      textArea.value = SHARE_URL;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        alert("테스트 주소가 복사되었습니다! 친구들에게 공유해보세요.");
      } catch (e) {
        alert("주소 복사에 실패했습니다. URL을 직접 복사해주세요.");
      }
      document.body.removeChild(textArea);
    }
  };

  const handleSaveAsImage = async () => {
    if (!printRef.current) return;
    const originalStyle = printRef.current.style.cssText;
    printRef.current.style.width = '440px';
    printRef.current.style.height = 'auto';
    const canvas = await html2canvas(printRef.current, { 
      scale: 3, 
      backgroundColor: '#0a0a0a', 
      useCORS: true, 
      logging: false 
    });
    printRef.current.style.cssText = originalStyle;
    const link = document.createElement('a');
    link.download = `THE_INSIGHT_${result.titles[0]}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <div className="min-h-screen bg-deep-black p-4 md:p-10 pt-28 pb-32 flex flex-col items-center overflow-x-hidden">
      <div 
        id="capture-card"
        ref={printRef}
        className="relative bg-deep-black border border-white/10 rounded-[50px] shadow-[0_0_80px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col"
        style={{ width: '440px', minHeight: '840px', flexShrink: 0 }}
      >
        <div className="absolute top-0 left-0 w-full h-3" style={{ backgroundColor: themeColor }}></div>
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] blur-[150px] opacity-[0.2] rounded-full" style={{ backgroundColor: themeColor }}></div>
        
        <div className="relative z-10 flex flex-col h-full px-10 py-12 flex-grow">
          <div className="flex justify-between items-center mb-8 opacity-60">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-white leading-none uppercase">
                <Calendar size={10} style={{ color: themeColor }} /> <span>{currentDate}</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-white leading-none uppercase">
                <User size={10} style={{ color: themeColor }} /> <span>연령 : {AGE_LABELS[ageGroup]}</span>
              </div>
            </div>
            <span className="text-[12px] font-black tracking-[0.3em] uppercase italic text-neon-cyan">INSIGHT LAB</span>
          </div>

          <div className="mb-8">
            <h1 className="text-[34px] font-display font-black leading-[1.1] tracking-tighter mb-3 break-keep" style={{ color: themeColor }}>
              {result.titles[0]}
            </h1>
            <p className="text-[11px] text-gray-400 font-black uppercase tracking-[0.3em] border-l-4 pl-3" style={{ borderColor: themeColor }}>
              {result.base_name}
            </p>
          </div>

          <div className="relative h-[220px] mb-8 flex items-center justify-center bg-white/[0.02] rounded-[40px] border border-white/5">
            <div className="absolute inset-0 p-4">
               <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
                  <PolarGrid stroke="#333" strokeWidth={1} />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#777', fontSize: 14, fontWeight: '900' }} />
                  <Radar name="DISC" dataKey="value" stroke={themeColor} fill={themeColor} fillOpacity={0.4} strokeWidth={3} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3 mb-8">
            {(['D', 'I', 'S', 'C'] as DISCType[]).map(type => {
              const percentage = totalAnswered > 0 ? Math.round((scores[type] / totalAnswered) * 100) : 0;
              return (
                <div key={type} className="flex flex-col items-center py-4 rounded-[25px] bg-white/5 border border-white/5 shadow-lg">
                  <span className="text-[10px] font-black mb-1" style={{ color: TYPE_COLORS[type] }}>{type}</span>
                  <span className="text-xl font-display font-black text-white leading-none">{percentage}%</span>
                  <span className="text-[8px] text-gray-600 mt-1 font-bold">{scores[type]}개</span>
                </div>
              );
            })}
          </div>

          <div className="p-7 rounded-[35px] bg-white/5 border border-white/10 backdrop-blur-3xl mb-8 shadow-xl">
            <p className="text-[15px] text-gray-200 leading-relaxed italic break-keep font-medium" style={{ wordBreak: 'keep-all' }}>
              "{result.summaries[0]}"
            </p>
          </div>

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

            <div className="pt-6 border-t border-white/10 space-y-4">
               <div className="flex justify-between items-center px-2">
                  <div className="flex items-center gap-2 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                    <CheckCircle2 size={12} className="text-neon-cyan" /> {totalAnswered}문항 분석 완료
                  </div>
                  <div className="flex items-center gap-1.5 text-[9px] font-black text-neon-cyan tracking-widest uppercase">
                    <UserCircle2 size={10} /> Similar Personas
                  </div>
               </div>
               <div className="flex flex-wrap gap-2 justify-end px-2">
                 {famousPeople.map((p, i) => (
                   <span key={i} className="text-[10px] text-white font-black px-2.5 py-1.5 bg-white/5 border border-white/5 rounded-xl whitespace-nowrap">#{p}</span>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[440px] space-y-4 mt-12 fade-in">
        <button 
          onClick={handleCopyLink} 
          className="w-full flex items-center justify-center gap-3 py-6 bg-blue-600 text-white font-black rounded-[30px] hover:scale-[1.02] active:scale-95 transition-all shadow-xl text-lg group"
        >
          <Link size={24} className="group-active:scale-110 transition-transform" /> 🔗 친구에게 테스트 공유하기
        </button>
        
        <div className="grid grid-cols-2 gap-4">
          <button onClick={handleSaveAsImage} className="flex items-center justify-center gap-3 py-5 bg-white text-black font-black rounded-[25px] hover:scale-105 active:scale-95 transition-all shadow-lg text-base">
            <ImageIcon size={20} /> 결과 저장
          </button>
          <button onClick={onReset} className="flex items-center justify-center gap-3 py-5 bg-white/5 border border-white/10 text-white font-black rounded-[25px] hover:bg-white/10 active:scale-95 transition-all text-base shadow-xl">
            <RefreshCw size={20} /> 다시 하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;