import React, { useEffect, useRef } from 'react';
import { DISCType, ResultContent } from '../types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { Share2, RefreshCw, Trophy, Star, Zap, UserCheck, Download, MessageCircle } from 'lucide-react';
import { gsap } from 'gsap';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

declare global {
  interface Window {
    Kakao: any;
  }
}

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
    // Kakao SDK Initialization
    if (window.Kakao && !window.Kakao.isInitialized()) {
      // 본인의 카카오 JavaScript 키를 여기에 입력하세요. 키가 없어도 안전하게 건너뜁니다.
      try {
        window.Kakao.init('YOUR_KAKAO_JS_KEY'); 
      } catch (e) {
        console.warn('Kakao SDK initialization failed. Key might be missing.');
      }
    }

    const ctx = gsap.context(() => {
      gsap.from('.result-header', { y: -50, opacity: 0, duration: 1 });
      gsap.from('.result-card', { x: -30, opacity: 0, duration: 0.8, delay: 0.3 });
      gsap.from('.chart-container', { scale: 0.8, opacity: 0, duration: 0.8, delay: 0.5 });
      gsap.from('.extra-info', { y: 30, opacity: 0, stagger: 0.15, duration: 0.6, delay: 0.8 });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleDownloadPDF = async () => {
    const element = document.getElementById('print-target');
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        backgroundColor: '#0a0a0a',
        useCORS: true,
        logging: false,
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`THE_INSIGHT_DISC_${result.base_name.replace(/\s/g, '_')}.pdf`);
    } catch (error) {
      console.error('PDF generation failed:', error);
      alert('PDF 생성 중 오류가 발생했습니다.');
    }
  };

  const handleKakaoShare = () => {
    if (!window.Kakao || !window.Kakao.isInitialized()) {
      alert('카카오 SDK가 준비되지 않았습니다.');
      return;
    }

    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: `나의 DISC 결과: [${result.titles[0]}]`,
        description: `진단 결과: ${result.base_name}. 당신의 행동 DNA를 확인해보세요!`,
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600', // 대표 이미지
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
      buttons: [
        {
          title: '무료 진단하기',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      ],
    });
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-deep-black p-4 md:p-10 pt-32 pb-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Printable Area */}
        <div id="print-target" className="relative p-8 md:p-16 rounded-[60px] border border-white/10 overflow-hidden bg-deep-black shadow-2xl">
          {/* Subtle Watermark Logo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
             <span className="text-[200px] font-black tracking-tighter">INSIGHT</span>
          </div>

          <div className="relative z-10">
            {/* Header Section */}
            <div className="result-header text-center mb-20">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-neon-cyan font-bold text-xs tracking-widest uppercase mb-8">
                <Trophy size={14} className="animate-pulse" /> Official Diagnosis Certificate
              </div>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-white/50 mb-6 uppercase tracking-tighter">The Behavioral DNA Analysis</h1>
              <h2 className="text-5xl md:text-8xl font-display font-black tracking-tighter mb-4" style={{ color: themeColor }}>
                {result.titles[0]}
              </h2>
              <div className="text-lg md:text-2xl text-gray-400 font-medium tracking-wide">성향 분석 명칭: {result.base_name}</div>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-8">
                {/* Summary Card */}
                <div className="result-card p-8 md:p-12 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-3xl relative overflow-hidden group shadow-inner">
                  <div className="absolute top-0 left-0 w-2 h-full" style={{ backgroundColor: themeColor }}></div>
                  <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light mb-12 italic" style={{ wordBreak: 'keep-all' }}>
                    "{result.summaries[0]}"
                  </p>

                  <div className="grid md:grid-cols-2 gap-10 pt-10 border-t border-white/10">
                    <div className="extra-info">
                      <h3 className="flex items-center gap-3 text-neon-cyan font-bold uppercase tracking-[0.2em] text-xs mb-6">
                        <Star size={16} fill="currentColor" /> 핵심 성장 가이드
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
                        <Zap size={16} fill="currentColor" /> 행운의 촉매제
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
                    <h3 className="text-white/40 font-display font-bold text-xs tracking-widest uppercase">성향적 동질감을 가진 인물들</h3>
                  </div>
                  <div className="flex flex-wrap gap-x-8 gap-y-5">
                    {result.famous_people_pool.slice(0, 8).map((person, i) => (
                      <span key={i} className="text-xl md:text-3xl font-display font-bold text-white/90 hover:text-neon-cyan transition-colors cursor-default">
                        {person}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Chart Section */}
              <div className="lg:col-span-5 chart-container p-10 rounded-[40px] bg-black/40 border border-white/10 shadow-2xl">
                <h3 className="text-lg font-display font-bold mb-10 text-center text-white/70 tracking-widest uppercase">Behavioral Spectrum</h3>
                <div className="w-full h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                      <PolarGrid stroke="#333" />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: '#888', fontSize: 13, fontWeight: 'bold' }} />
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

            <div className="mt-20 pt-10 border-t border-white/5 flex justify-between items-center opacity-30">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white">The Insight Personality Lab</span>
              <span className="text-[10px] font-bold text-white tracking-widest">© 2024 WELLNASCORE</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-8 mt-16 items-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <button 
              onClick={handleKakaoShare}
              className="flex items-center gap-3 px-10 py-5 bg-[#FEE500] text-[#3c1e1e] font-black rounded-2xl hover:brightness-105 transition-all w-full sm:w-auto justify-center shadow-lg"
            >
              <MessageCircle size={20} fill="currentColor" /> 카카오톡 공유
            </button>
            <button 
              onClick={handleDownloadPDF}
              className="flex items-center gap-3 px-10 py-5 bg-white text-black font-black rounded-2xl hover:bg-gray-100 transition-all w-full sm:w-auto justify-center shadow-lg"
            >
              <Download size={20} /> PDF 리포트 저장
            </button>
            <button 
              className="flex items-center gap-3 px-10 py-5 bg-neon-cyan text-black font-black rounded-2xl hover:scale-105 transition-all w-full sm:w-auto justify-center shadow-[0_0_30px_rgba(0,243,255,0.4)]"
            >
              <Share2 size={20} /> 링크 복사
            </button>
          </div>

          <button 
            onClick={onReset}
            className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors py-4 px-6 rounded-xl hover:bg-white/5"
          >
            <RefreshCw size={18} />
            처음으로 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;