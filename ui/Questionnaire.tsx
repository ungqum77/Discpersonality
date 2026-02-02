import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Question, DISCType } from '../SchemaDefinitions';
import { ChevronLeft, ChevronRight, ChevronsRight, Check, Undo2 } from 'lucide-react';

interface Props { 
  questions: Question[]; 
  onFinish: (scores: Record<DISCType, number>) => void; 
  onBackToMode: () => void;
}

const Questionnaire: React.FC<Props> = ({ questions, onFinish, onBackToMode }) => {
  const [idx, setIdx] = useState(0);
  const [maxIdx, setMaxIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, DISCType>>({});

  const handleSelect = (type: DISCType) => {
    const newAnswers = { ...answers, [idx]: type };
    setAnswers(newAnswers);

    if (idx === maxIdx) {
      if (idx < questions.length - 1) {
        setIdx(prev => prev + 1);
        setMaxIdx(prev => prev + 1);
      } else {
        const finalScores: Record<DISCType, number> = { D: 0, I: 0, S: 0, C: 0 };
        Object.values(newAnswers).forEach(t => finalScores[t]++);
        onFinish(finalScores);
      }
    } else {
      setIdx(prev => prev + 1);
    }
  };

  const q = questions[idx];
  const progress = ((maxIdx + 1) / questions.length) * 100;
  const canGoPrev = idx > 0 && idx > maxIdx - 4;

  if (!q) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-start md:justify-center p-4 bg-deep-black relative pt-32 pb-20">
      <div className="w-full max-w-3xl z-10">
        <div className="mb-12 flex flex-col gap-6">
          <div className="flex justify-between items-center">
             <div className="flex flex-col">
               <span className="text-[10px] font-black tracking-widest text-neon-cyan uppercase mb-1">Diagnostic Progress</span>
               <div className="flex items-center gap-2">
                 <span className="text-2xl font-display font-black text-white">Q.{idx + 1}</span>
                 <span className="text-gray-500 font-bold">/ {questions.length}</span>
               </div>
             </div>
             
             <div className="flex gap-3">
               {idx < maxIdx && (
                 <button 
                   onClick={() => setIdx(maxIdx)}
                   className="flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan text-xs font-black hover:bg-neon-cyan/20 transition-all"
                 >
                   현재 문항으로 점프 <ChevronsRight size={14} />
                 </button>
               )}
             </div>
          </div>
          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden shadow-inner">
            <motion.div 
              className="h-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink shadow-[0_0_20px_rgba(0,243,255,0.6)]" 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
            className="min-h-[420px]"
          >
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-12 text-white leading-tight break-keep" style={{ wordBreak: 'keep-all' }}>{q.question}</h2>
            <div className="grid gap-4">
              {q.options.map((opt, i) => {
                const isSelected = answers[idx] === opt.type;
                return (
                  <button 
                    key={i} 
                    onClick={() => handleSelect(opt.type)} 
                    className={`group p-6 text-left rounded-[30px] border transition-all duration-300 flex items-center gap-5 ${
                      isSelected 
                      ? 'bg-neon-cyan/10 border-neon-cyan shadow-[0_0_25px_rgba(0,243,255,0.15)] scale-[1.02]' 
                      : 'bg-white/5 border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center text-sm font-black transition-all ${
                      isSelected ? 'bg-neon-cyan text-black border-neon-cyan shadow-[0_0_15px_#00f3ff]' : 'bg-white/5 border-white/10 text-gray-500'
                    }`}>
                      {isSelected ? <Check size={20} /> : String.fromCharCode(65 + i)}
                    </div>
                    <span className={`text-lg md:text-xl transition-colors ${isSelected ? 'text-white font-bold' : 'text-gray-400'}`}>
                      {opt.text}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-14 pt-8 border-t border-white/5 flex justify-between items-center relative">
          <button
            disabled={!canGoPrev}
            onClick={() => setIdx(prev => prev - 1)}
            className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-black transition-all ${
              canGoPrev ? 'text-white hover:bg-white/5' : 'text-gray-700 cursor-not-allowed opacity-20'
            }`}
          >
            <ChevronLeft size={24} /> 이전
          </button>

          {/* 중앙 영역: 뒤로가기 버튼(첫 페이지 한정) + 리뷰 버퍼 */}
          <div className="flex flex-col items-center gap-4">
             <AnimatePresence>
               {idx === 0 && (
                 <motion.button 
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: 10 }}
                   onClick={onBackToMode}
                   className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-neon-purple text-xs font-black hover:bg-neon-purple/10 hover:border-neon-purple/30 transition-all shadow-2xl hover:scale-105"
                 >
                   <Undo2 size={16} /> 진단 깊이 선택으로 돌아가기
                 </motion.button>
               )}
             </AnimatePresence>
             
             <div className="hidden md:flex gap-1.5 items-center">
                <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest mr-2">Review Buffer</span>
                {[...Array(4)].map((_, i) => (
                  <div key={i} className={`w-2 h-2 rounded-full ${i < (maxIdx - idx) ? 'bg-neon-purple' : 'bg-white/10'}`} />
                ))}
             </div>
          </div>

          <button
            disabled={idx >= maxIdx}
            onClick={() => setIdx(prev => prev + 1)}
            className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-black transition-all ${
              idx < maxIdx ? 'text-white hover:bg-white/5' : 'text-gray-700 cursor-not-allowed opacity-20'
            }`}
          >
            다음 <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Questionnaire;