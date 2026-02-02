import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Question, DISCType } from '../SchemaDefinitions';

interface Props { questions: Question[]; onFinish: (scores: Record<DISCType, number>) => void; }

const Questionnaire: React.FC<Props> = ({ questions, onFinish }) => {
  const [idx, setIdx] = useState(0);
  const [scores, setScores] = useState<Record<DISCType, number>>({ D: 0, I: 0, S: 0, C: 0 });

  const handle = (type: DISCType) => {
    const nextScores = { ...scores, [type]: scores[type] + 1 };
    setScores(nextScores);
    if (idx < questions.length - 1) setIdx(idx + 1);
    else onFinish(nextScores);
  };

  const q = questions[idx];
  const progress = ((idx + 1) / questions.length) * 100;

  if (!q) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-deep-black">
      <div className="w-full max-w-3xl">
        <div className="mb-16 flex flex-col gap-4">
          <div className="flex justify-between items-end">
             <div className="flex flex-col">
               <span className="text-[10px] font-black tracking-widest text-neon-cyan uppercase mb-1">Analyzing Behavioral DNA</span>
               <span className="text-xs font-bold text-gray-500 tracking-wider">Question {idx + 1} / {questions.length}</span>
             </div>
             <span className="text-3xl font-display font-black text-white">{Math.round(progress)}%</span>
          </div>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple shadow-[0_0_15px_rgba(0,243,255,0.4)]" 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "circOut" }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-12 text-white leading-tight break-keep" style={{ wordBreak: 'keep-all' }}>{q.question}</h2>
            <div className="grid gap-4">
              {q.options.map((opt, i) => (
                <button 
                  key={i} 
                  onClick={() => handle(opt.type)} 
                  className="group p-6 text-left rounded-3xl bg-white/5 border border-white/10 hover:border-neon-cyan hover:bg-neon-cyan/5 transition-all duration-200 text-lg text-gray-300 hover:text-white flex items-center gap-5"
                >
                  <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-sm font-black group-hover:bg-neon-cyan group-hover:text-black group-hover:border-neon-cyan transition-all">
                    {String.fromCharCode(65 + i)}
                  </div>
                  <span className="flex-grow leading-snug">{opt.text}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
export default Questionnaire;