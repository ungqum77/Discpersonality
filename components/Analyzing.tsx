import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, CheckCircle2, Cpu, Database, Binary, FileSearch } from 'lucide-react';
import { DISCType, AgeGroup } from '../SchemaDefinitions';

interface AnalyzingProps {
  scores: Record<DISCType, number>;
  ageGroup: AgeGroup;
}

const Analyzing: React.FC<AnalyzingProps> = ({ scores, ageGroup }) => {
  const [step, setStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const messages = [
    { text: "사용자의 응답 데이터를 전송 중입니다...", icon: <Database size={20} /> },
    { text: "DISC 행동 패턴을 알고리즘으로 분석 중입니다...", icon: <Cpu size={20} /> },
    { text: "가장 유사한 성향 유형을 도출하고 있습니다...", icon: <Binary size={20} /> },
    { text: "분석이 완료되었습니다!", icon: <CheckCircle2 size={20} /> }
  ];

  useEffect(() => {
    if (step < messages.length - 1) {
      const timer = setTimeout(() => {
        setStep(prev => prev + 1);
      }, 900);
      return () => clearTimeout(timer);
    } else {
      const finalTimer = setTimeout(() => {
        setIsCompleted(true);
      }, 600);
      return () => clearTimeout(finalTimer);
    }
  }, [step]);

  const handleResultClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // 점수 데이터를 URL 파라미터로 변환
    const params = new URLSearchParams();
    params.set('d', scores.D.toString());
    params.set('i', scores.I.toString());
    params.set('s', scores.S.toString());
    params.set('c', scores.C.toString());
    params.set('age', ageGroup);
    params.set('view', 'result');

    // window.location.href를 사용한 강제 페이지 이동
    // 이 시점에 애드센스 전면광고(Vignette)가 트리거될 확률이 극대화됩니다.
    window.location.href = `/?${params.toString()}`;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-deep-black px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-neon-cyan/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-md flex flex-col items-center text-center z-10">
        <AnimatePresence mode="wait">
          {!isCompleted ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              className="flex flex-col items-center gap-8"
            >
              <div className="relative">
                <Loader2 size={64} className="text-neon-cyan animate-spin opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <FileSearch size={32} className="text-neon-cyan drop-shadow-[0_0_8px_rgba(0,243,255,0.5)]" />
                  </motion.div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2 text-neon-cyan/80">
                  {messages[step].icon}
                  <span className="text-[10px] font-black tracking-[0.3em] uppercase">Processing Step 0{step + 1}</span>
                </div>
                
                <div className="h-8 flex items-center justify-center">
                  <motion.p
                    key={step}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-lg md:text-xl font-bold text-white tracking-tight break-keep"
                  >
                    {messages[step].text}
                  </motion.p>
                </div>
              </div>

              <div className="w-64 h-1 bg-white/5 rounded-full mt-4 overflow-hidden">
                <motion.div
                  className="h-full bg-neon-cyan"
                  initial={{ width: "0%" }}
                  animate={{ width: `${((step + 1) / messages.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="completed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center w-full"
            >
              <div className="w-20 h-20 rounded-full bg-neon-cyan/10 flex items-center justify-center mb-8 border border-neon-cyan/30 shadow-[0_0_30px_rgba(0,243,255,0.2)]">
                <CheckCircle2 size={40} className="text-neon-cyan" />
              </div>

              <h2 className="text-3xl font-display font-black text-white mb-2 tracking-tighter">분석이 완료되었습니다!</h2>
              <p className="text-gray-500 text-sm mb-12">당신의 행동 DNA 데이터가 완벽하게 해독되었습니다.</p>

              <button
                onClick={handleResultClick}
                className="w-full py-6 bg-neon-cyan text-black font-black rounded-2xl text-xl shadow-[0_0_40px_rgba(0,243,255,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 group"
              >
                <span>📋 결과 리포트 확인하기</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <Cpu size={24} className="group-hover:rotate-12 transition-transform" />
                </motion.div>
              </button>
              
              <p className="mt-6 text-[10px] text-gray-700 font-bold uppercase tracking-widest animate-pulse">
                Click to reveal your personality profile
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Analyzing;