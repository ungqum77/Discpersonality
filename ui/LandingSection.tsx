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
        y: 40, 
        duration: 1.2, 
        stagger: 0.15, 
        ease: 'expo.out' 
      });

      // Speed increased: duration changed from 2.8s to 1.8s
      gsap.to('.info-card', {
        y: -12,
        duration: 1.8, 
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: { each: 0.2, from: 'random' }
      });

      gsap.to('.ambient-light', {
        opacity: 0.6,
        scale: 1.1,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const discTypes = [
    { 
      label: '주도형 (D)', 
      desc: '결단력 있고 목표 지향적이며 추진력이 강합니다.',
      icon: <Target size={24} className="text-neon-pink" />, 
      color: 'border-neon-pink/40' 
    },
    { 
      label: '사교형 (I)', 
      desc: '낙천적이며 소통 능력이 좋고 열정적입니다.',
      icon: <Users size={24} className="text-neon-cyan" />, 
      color: 'border-neon-cyan/40' 
    },
    { 
      label: '안정형 (S)', 
      desc: '협조적이며 인내심이 강하고 타인을 배려합니다.',
      icon: <Zap size={24} className="text-neon-purple" />, 
      color: 'border-neon-purple/40' 
    },
    { 
      label: '신중형 (C)', 
      desc: '분석적이며 논리적이고 정확성을 중요시합니다.',
      icon: <ShieldCheck size={24} className="text-yellow-400" />, 
      color: 'border-yellow-400/40' 
    },
  ];

  return (
    <div ref={containerRef} className="relative flex flex-col items-center justify-center px-4 pt-44 pb-32 bg-deep-black min-h-screen overflow-hidden">
      <div className="ambient-light absolute top-[-5%] left-[-5%] w-[60%] h-[60%] bg-neon-cyan/10 blur-[140px] rounded-full pointer-events-none opacity-40"></div>
      <div className="ambient-light absolute bottom-[-5%] right-[-5%] w-[60%] h-[60%] bg-neon-purple/10 blur-[140px] rounded-full pointer-events-none opacity-40"></div>

      <div className="relative z-10 text-center max-w-6xl mx-auto flex flex-col items-center">
        <div className="hero-anim inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-[10px] font-bold uppercase tracking-[0.3em] mb-12">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan"></span>
          </span>
          AGE-OPTIMIZED DIAGNOSIS
        </div>
        
        <h1 className="hero-anim text-6xl md:text-[100px] font-display font-black mb-10 leading-[1.05] tracking-tighter text-white" style={{ wordBreak: 'keep-all' }}>
          <span className="text-neon-cyan neon-glow-cyan drop-shadow-[0_0_25px_rgba(0,243,255,0.9)] inline-block mb-2">
            (DISC)
          </span> <br/>
          질문이 달라야 <br/>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-neon-cyan to-neon-purple">
            결과가 보입니다
          </span>
        </h1>
        
        <p className="hero-anim text-lg md:text-xl text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed font-light px-4 opacity-80" style={{ wordBreak: 'keep-all' }}>
          연령별 맞춤 시나리오를 통해 당신의 행동 DNA를 정밀 분석합니다.<br className="hidden md:block" />
          당신의 연령과 상황에 딱 맞는 질문으로 '진짜 나의 모습'을 발견하세요.
        </p>

        <div className="hero-anim">
          <button
            onClick={onStart}
            className="group relative inline-flex items-center gap-4 px-14 py-7 bg-neon-cyan text-black font-black rounded-2xl hover:scale-105 hover:brightness-110 transition-all duration-300 transform active:scale-95 text-2xl shadow-[0_0_50px_rgba(0,243,255,0.5)]"
          >
            연령별 무료 진단 시작
            <ChevronRight size={28} className="group-hover:translate-x-2 transition-transform" />
            <div className="absolute -inset-1 bg-neon-cyan/25 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-28 max-w-7xl w-full z-10 px-4">
        {discTypes.map((item, i) => (
          <div key={i} className={`info-card p-8 rounded-[40px] bg-white/5 border ${item.color} backdrop-blur-xl flex flex-col items-center gap-5 transition-colors hover:bg-white/10`}>
            <div className="p-4 rounded-2xl bg-white/5 shadow-inner">{item.icon}</div>
            <div className="text-center">
              <span className="block font-display font-black text-base tracking-widest text-white uppercase mb-3">{item.label}</span>
              <p className="text-[11px] text-gray-400 leading-relaxed break-keep max-w-[200px] mx-auto opacity-70">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingSection;