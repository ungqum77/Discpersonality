import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronRight, Target, Users, Zap, ShieldCheck } from 'lucide-react';

interface HeroProps { onStart: () => void; }

const LandingSection: React.FC<HeroProps> = ({ onStart }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-anim', { 
        opacity: 0, 
        y: 30, 
        duration: 1.0, 
        stagger: 0.1, 
        ease: 'expo.out' 
      });

      gsap.to('.info-card', {
        y: -10,
        duration: 2, 
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: { each: 0.2, from: 'random' }
      });

      gsap.to('.ambient-light', {
        opacity: 0.4,
        scale: 1.05,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const discTypes = [
    { label: '주도형 (D)', desc: '결단력, 추진력', icon: <Target size={20} className="text-neon-pink" />, color: 'border-neon-pink/40' },
    { label: '사교형 (I)', desc: '낙천적, 소통', icon: <Users size={20} className="text-neon-cyan" />, color: 'border-neon-cyan/40' },
    { label: '안정형 (S)', desc: '협조적, 배려', icon: <Zap size={20} className="text-neon-purple" />, color: 'border-neon-purple/40' },
    { label: '신중형 (C)', desc: '분석적, 논리', icon: <ShieldCheck size={20} className="text-yellow-400" />, color: 'border-yellow-400/40' },
  ];

  return (
    <div ref={containerRef} className="relative flex flex-col items-center justify-center px-4 pt-28 pb-10 bg-deep-black min-h-screen overflow-hidden">
      <div className="ambient-light absolute top-[-10%] left-[-10%] w-[80%] h-[80%] bg-neon-cyan/10 blur-[120px] rounded-full pointer-events-none opacity-30"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
        <div className="hero-anim inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-[9px] font-bold uppercase tracking-[0.2em] mb-6">
          AGE-OPTIMIZED DISC
        </div>
        
        <h1 className="hero-anim text-4xl md:text-8xl font-display font-black mb-6 leading-tight tracking-tighter text-white" style={{ wordBreak: 'keep-all' }}>
          <span className="text-neon-cyan drop-shadow-[0_0_15px_#00f3ff]">DISC</span> <br className="md:hidden"/>
          질문이 달라야 <br/>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-neon-purple">결과가 보입니다</span>
        </h1>
        
        <p className="hero-anim text-sm md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light px-4 opacity-80" style={{ wordBreak: 'keep-all' }}>
          당신의 연령과 상황에 딱 맞는 <br className="md:hidden"/> 맞춤 질문으로 '진짜 나의 모습'을 발견하세요.
        </p>

        <div className="hero-anim w-full px-6 md:px-0">
          <button
            onClick={onStart}
            className="group relative w-full md:w-auto inline-flex flex-col md:flex-row items-center justify-center gap-1 md:gap-4 px-10 py-5 md:py-6 bg-neon-cyan text-black font-black rounded-2xl hover:scale-105 transition-all duration-300 transform active:scale-95 text-xl md:text-2xl shadow-[0_0_30px_rgba(0,243,255,0.4)]"
          >
            <div className="flex flex-col leading-tight">
              <span>연령별 무료 진단</span>
              <span className="text-sm md:text-2xl">시작</span>
            </div>
            <ChevronRight size={24} className="hidden md:block group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-12 max-w-5xl w-full z-10 px-2">
        {discTypes.map((item, i) => (
          <div key={i} className={`info-card p-4 md:p-6 rounded-3xl bg-white/5 border ${item.color} backdrop-blur-xl flex flex-col items-center gap-3`}>
            <div className="p-2 rounded-xl bg-white/5">{item.icon}</div>
            <div className="text-center">
              <span className="block font-display font-black text-[10px] md:text-xs tracking-widest text-white uppercase">{item.label}</span>
              <p className="hidden md:block text-[10px] text-gray-500 mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingSection;