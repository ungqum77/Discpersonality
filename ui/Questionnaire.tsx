
import React, { useState, useEffect } from 'react';
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
  const [isBusy, setIsBusy] = useState(false);

  // [중요] 질문 데이터가 바뀌면 인덱스 초기화 (모드 변경 대응)
  useEffect(() => {
    setIdx(0);
    setMaxIdx(0);
    setAnswers({});
  }, [questions]);

  const handleSelect = (type: DISCType) => {
    if (isBusy) return;
    setIsBusy(true);

    const updatedAnswers = { ...answers, [idx]: type };
    setAnswers(updatedAnswers);

    if (idx === questions.length - 1) {
      const finalScores: Record<DISCType, number> = { D: 0, I: 0, S: 0, C: 0 };
      Object.values(updatedAnswers).forEach(ans => {
        if (ans) finalScores[ans]++;
      });
      setTimeout(() => onFinish(finalScores), 50);
      return;
    }

    setIdx(prev => prev + 1);
    if (idx === maxIdx) setMaxIdx(idx + 1);
    setTimeout(() => setIsBusy(false), 200);
  };

  const q = questions[idx];
  const progress = ((maxIdx + 1) / questions.length) * 100;
  const canGoPrev = idx > 0;

  if (!q) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-4 bg-deep-black relative pt-24 pb-12">
      <div className="w-full max-w-2xl z-10">
        <div className="mb-6 flex flex-col gap-4">
          <div className="flex justify-between items-center px-1">
             <div className="flex flex-col">
               <span className="text-[9px] font-black tracking-widest text-neon-cyan uppercase mb-1">Diagnostic Progress</span>
               <div className="flex items-center gap-1.5">
                 <span className="text-xl font-display font-black text-white">Q.{idx + 1}</span>
                 <span className="text-gray-500 font-bold text-xs">/ {questions.length}</span>
               </div>
             </div>
             {idx < maxIdx && (
               <button onClick={() => setIdx(maxIdx)} className="flex items-center gap-1 px-3 py-2 rounded-xl bg-neon-cyan/10 text-neon-cyan text-[10px] font-black hover:bg-neon-cyan/20 transition-all">
                 현재 문항 <ChevronsRight size={12} />
               </button>
             )}
          </div>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple shadow-[0_0_10px_#00f3ff]" 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="min-h-[400px]"
          >
            <h2 className="text-xl md:text-3xl font-display font-bold mb-10 text-white leading-snug break-keep" style={{ wordBreak: 'keep-all' }}>{q.question}</h2>
            <div className="grid gap-3">
              {q.options.map((opt, i) => {
                const isSelected = answers[idx] === opt.type;
                return (
                  <button 
                    key={i} 
                    disabled={isBusy}
                    onClick={() => handleSelect(opt.type)} 
                    className={`group p-5 text-left rounded-2xl border transition-all duration-300 flex items-center gap-4 ${
                      isSelected 
                      ? 'bg-neon-cyan/10 border-neon-cyan shadow-[0_0_15px_rgba(0,243,255,0.1)]' 
                      : 'bg-white/5 border-white/5 hover:border-white/20'
                    } ${isBusy ? 'cursor-wait' : 'cursor-pointer'}`}
                  >
                    <div className={`w-8 h-8 rounded-lg border flex items-center justify-center text-xs font-black shrink-0 ${
                      isSelected ? 'bg-neon-cyan text-black border-neon-cyan' : 'bg-white/5 border-white/10 text-gray-500'
                    }`}>
                      {isSelected ? <Check size={16} /> : String.fromCharCode(65 + i)}
                    </div>
                    <span className={`text-[15px] md:text-lg leading-tight transition-colors ${isSelected ? 'text-white font-bold' : 'text-gray-400 group-hover:text-gray-200'}`}>
                      {opt.text}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
          <button
            disabled={!canGoPrev || isBusy}
            onClick={() => setIdx(prev => prev - 1)}
            className={`flex items-center gap-1.5 px-4 py-3 rounded-xl font-black text-sm transition-all ${
              canGoPrev ? 'text-white bg-white/5 hover:bg-white/10' : 'text-gray-700 opacity-20'
            }`}
          >
            <ChevronLeft size={18} /> 이전
          </button>

          {idx === 0 && (
            <button onClick={onBackToMode} className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 text-neon-purple text-[10px] font-black border border-white/10 hover:bg-white/10 transition-all active:scale-95">
              <Undo2 size={12} /> 진단 모드 변경
            </button>
          )}

          <button
            disabled={idx >= maxIdx || isBusy}
            onClick={() => setIdx(prev => prev + 1)}
            className={`flex items-center gap-1.5 px-4 py-3 rounded-xl font-black text-sm transition-all ${
              idx < maxIdx ? 'text-white bg-white/5 hover:bg-white/10' : 'text-gray-700 opacity-20'
            }`}
          >
            다음 <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Questionnaire;
