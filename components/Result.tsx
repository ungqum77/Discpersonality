
import React, { useEffect, useRef, useMemo, useState } from 'react';
import { DISCType, ResultContent, AgeGroup, Gender } from '../SchemaDefinitions';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { RefreshCw, Zap, Image as ImageIcon, Calendar, User, CheckCircle2, UserCircle2, Link, Sparkles, BrainCircuit } from 'lucide-react';
import { gsap } from 'gsap';
import html2canvas from 'html2canvas';
import { GoogleGenAI } from "@google/genai";

const TYPE_COLORS: Record<DISCType, string> = {
  D: '#FF2E88', // Neon Pink
  I: '#FFD000', // Neon Yellow
  S: '#00F3FF', // Neon Cyan
  C: '#B23AFF', // Neon Purple
};

const AGE_LABELS: Record<AgeGroup, string> = {
  '10s': '10대', '20s': '20대', '30s': '30대', '40s': '40대', '50s': '50대', '60s': '60대+',
};

const GENDER_LABELS: Record<Gender, string> = {
  'F': '여성', 'M': '남성', 'O': '선택 안 함'
};

interface ResultProps {
  scores: Record<DISCType, number>;
  result: ResultContent;
  onReset: () => void;
  ageGroup: AgeGroup;
  gender: Gender;
}

const Result: React.FC<ResultProps> = ({ scores, result, onReset, ageGroup, gender }) => {
  const printRef = useRef<HTMLDivElement>(null);
  const [aiInsight, setAiInsight] = useState<string>("");
  const [isAiLoading, setIsAiLoading] = useState<boolean>(true);

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
    
    // Fetch AI Insight
    const fetchAiInsight = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const prompt = `너는 전문 DISC 컨설턴트이자 심리 분석가야.
        사용자의 DISC 점수: D:${scores.D}, I:${scores.I}, S:${scores.S}, C:${scores.C} (총 문항: ${totalAnswered})
        사용자 정보: 연령대 ${AGE_LABELS[ageGroup]}, 성별 ${GENDER_LABELS[gender]}
        
        이 데이터를 바탕으로 이 사람의 라이프스타일과 성향을 분석하고, 현재 연령대와 상황에 딱 맞는 '성공과 행복을 위한 커스터마이징 전략'을 한국어로 작성해줘. 
        매우 날카로우면서도 따뜻한 통찰력을 담아 약 250자 내외로 작성해줘. 제목이나 인사말 없이 본론만 바로 시작해.`;

        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: prompt,
          config: {
            temperature: 0.8,
            topP: 0.9,
          }
        });

        if (response.text) {
          setAiInsight(response.text.trim());
        }
      } catch (error) {
        console.error("AI Insight Error:", error);
        setAiInsight("데이터 분석 중 미세한 오류가 발생했습니다. 하지만 당신의 핵심 성향은 이미 충분히 빛나고 있습니다.");
      } finally {
        setIsAiLoading(false);
      }
    };

    fetchAiInsight();
  }, [scores, ageGroup, gender, totalAnswered]);

  const handleCopyLink = async () => {
    const SHARE_URL = 'https://disc.woongth.com';
    try {
      await navigator.clipboard.writeText(SHARE_URL);
      alert("테스트 주소가 복사되었습니다! 친구들에게 공유해보세요.");
    } catch (err) {
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
    const canvas = await html2canvas(printRef.current, { 
      scale: 2, 
      backgroundColor: '#0a0a0a', 
      useCORS: true, 
      logging: false 
    });
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
        style={{ width: '440px', minHeight: '1000px', flexShrink: 0 }}
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
                <User size={10} style={{ color: themeColor }} /> <span>{AGE_LABELS[ageGroup]} / {GENDER_LABELS[gender]}</span>
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

          {/* AI Insight Section */}
          <div className="p-7 rounded-[35px] bg-gradient-to-br from-neon-cyan/5 to-neon-purple/5 border border-white/5 mb-8">
            <h3 className="text-[10px] font-black text-neon-cyan tracking-[0.4em] uppercase mb-4 flex items-center gap-2">
              <Sparkles size={12} className="animate-pulse" /> Deep AI Insight
            </h3>
            {isAiLoading ? (
              <div className="flex flex-col items-center py-4 gap-3">
                <BrainCircuit size={24} className="text-gray-600 animate-spin" />
                <span className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">Brain mapping in progress...</span>
              </div>
            ) : (
              <p className="text-[13px] text-gray-300 leading-relaxed break-keep">
                {aiInsight}
              </p>
            )}
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
