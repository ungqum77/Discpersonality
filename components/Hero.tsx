
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronRight, Zap, Target, Users, Search } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // 요소들이 처음부터 보이지 않게 세팅 (CSS opacity: 0과 별개로 GSAP 제어)
      gsap.set([titleRef.current, textRef.current, buttonRef.current, '.info-card'], { 
        opacity: 0, 
        y: 30 
      });

      tl.to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
      })
      .to(textRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
      }, '-=0.6')
      .to(buttonRef.current, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: 'back.out(1.7)',
      }, '-=0.4')
      .to('.info-card', {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
      }, '-=0.3');

      // 부유 애니메이션 (플로팅 효과)
      gsap.to('.info-card', {
        y: '+=10',
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: { each: 0.2, from: 'random' }
      });

      // 뱃지 글로우 효과
      gsap.to('.badge-glow', {
        opacity: 0.4,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative flex flex-col items-center justify-center px-4 pt-40 pb-32 bg-deep-black min-h-screen overflow-hidden">
      {/* 배경 장식 요소 - z-index 최하단 배치 */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-neon-cyan/20 blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-neon-purple/20 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-20 text-center max-w-5xl mx-auto flex flex-col items-center">
        {/* 상단 뱃지 */}
        <div className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-neon-cyan text-xs font-bold uppercase tracking-widest mb-12 group cursor-default overflow-hidden">
          <div className="badge-glow absolute inset-0 bg-neon-cyan/20 opacity-0 blur-md"></div>
          <Zap size={14} className="fill-neon-cyan relative z-10 animate-pulse" />
          <span className="relative z-10">AGE-ADAPTIVE DISC SOLUTION</span>
        </div>
        
        <h1 ref={titleRef} className="text-5xl md:text-8xl font-display font-bold mb-10 leading-[1.1] tracking-tight text-white" style={{ wordBreak: 'keep-all' }}>
          질문이 달라야 <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-blue-400 to-neon-purple neon-glow-cyan">결과가 보입니다</span>
        </h1>
        
        <p ref={textRef} className="text-lg md:text-xl text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed font-light px-4" style={{ wordBreak: 'keep-all' }}>
          10대부터 60대까지, 세대별 라이프스타일 문항으로 설계된 정밀 DISC.<br className="hidden md:block" />
          당신의 연령과 상황에 딱 맞는 시나리오로 '진짜 나의 모습'을 분석해 드립니다.
        </p>

        {/* 메인 버튼 섹션 - z-index 50으로 최상단 노출 보장 */}
        <div className="flex flex-col items-center gap-6 relative z-50">
          <button
            ref={buttonRef}
            onClick={onStart}
            className="group relative inline-flex items-center gap-4 px-16 py-7 bg-neon-cyan text-black font-black rounded-2xl hover:scale-105 transition-all duration-500 transform active:scale-95 text-2xl shadow-[0_0_50px_rgba(0,243,255,0.6)] border-none"
          >
            <span className="relative z-10">지금 무료 진단 받기</span>
            <ChevronRight size={28} className="group-hover:translate-x-2 transition-transform relative z-10" />
            
            {/* 버튼 내부 광원 효과 */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
            <div className="absolute -inset-4 bg-neon-cyan/30 blur-2xl group-hover:bg-neon-cyan/50 transition-all rounded-2xl -z-10"></div>
          </button>
          
          <div className="flex flex-col items-center mt-4">
            <span className="text-[10px] text-gray-500 font-bold tracking-[0.4em] uppercase mb-2">Scroll to Explore Types</span>
            <div className="w-px h-12 bg-gradient-to-b from-neon-cyan/50 to-transparent animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* 타입 카드 섹션 */}
      <div ref={cardsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-32 max-w-6xl w-full z-10 px-4">
        {[
          { label: '주도형 (D)', color: 'border-neon-pink', icon: <Target className="text-neon-pink" /> },
          { label: '사교형 (I)', color: 'border-neon-cyan', icon: <Users className="text-neon-cyan" /> },
          { label: '안정형 (S)', color: 'border-neon-purple', icon: <Zap className="text-neon-purple" /> },
          { label: '신중형 (C)', color: 'border-yellow-400', icon: <Search className="text-yellow-400" /> },
        ].map((item, i) => (
          <div key={i} className={`info-card p-6 md:p-8 rounded-3xl bg-white/5 border ${item.color} backdrop-blur-md transition-transform hover:scale-105 cursor-default flex flex-col items-center text-center`}>
            <div className="mb-6 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">{item.icon}</div>
            <h3 className="font-display font-bold text-lg md:text-xl text-white">{item.label}</h3>
            <div className="h-1 w-12 bg-current mt-4 opacity-30"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
