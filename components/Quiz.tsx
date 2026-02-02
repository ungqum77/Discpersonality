import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Question, DISCType } from '../SchemaDefinitions';
import { ChevronLeft, ChevronRight, ChevronsRight, Check } from 'lucide-react';

interface QuizProps {
  questions: Question[];
  onFinish: (scores: Record<DISCType, number>) => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, onFinish }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxReachedIndex, setMaxReachedIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, DISCType>>({});

  if (!questions || questions.length === 0) return null;

  const currentQuestion = questions[currentIndex];
  const progress = ((maxReachedIndex + 1) / questions.length) * 100;

  // 뒤로 가기 가능 여부 (최대 4단계 전까지만 가능)
  const canGoPrev = currentIndex > 0 && currentIndex > maxReachedIndex - 4;

  const handleAnswerSelect = (type: DISCType) => {
    // 답안 저장
    const newAnswers = { ...answers, [currentIndex]: type };
    setAnswers(newAnswers);

    if (currentIndex === maxReachedIndex) {
      // 새로운 문항을 푸는 경우
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(prev => prev + 1);
        setMaxReachedIndex(prev => prev + 1);
      } else {
        // 모든 문항 완료 시 최종 점수 계산 후 종료
        calculateFinalScores(newAnswers);
      }
    } else {
      // 과거 문항 수정 시 다음 단계로 이동만 함
      setCurrentIndex(prev => prev + 1);
    }
  };

  const calculateFinalScores = (finalAnswers: Record<number, DISCType>) => {
    const scores: Record<DISCType, number> = { D: 0, I: 0, S: 0, C: 0 };
    Object.values(finalAnswers).forEach(type => {
      scores[type] += 1;
    });
    onFinish(scores);
  };

  const jumpToCurrent = () => {
    setCurrentIndex(maxReachedIndex);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-deep-black relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
        <motion.div 
          className="h-full bg-neon-cyan shadow-[0_0_15px_#00f3ff]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
      </div>

      <div className="w-full max-w-3xl z-10">
        <div className="mb-12 flex justify-between items-end">
          <div>
            <span className="text-neon-cyan font-black text-[10px] tracking-[0.3em] uppercase block mb-1">Timeline Navigation</span>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-display font-black text-white">Q.{currentIndex + 1}</span>
              <span className="text-gray-600 font-bold">/ {questions.length}</span>
            </div>
          </div>
          
          <AnimatePresence>
            {currentIndex < maxReachedIndex && (
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onClick={jumpToCurrent}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-neon-cyan hover:bg-white/10 transition-all"
              >
                Go to Current <ChevronsRight size={14} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        <div className="relative min-h-[450px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl md:text-4xl font-display font-bold mb-10 text-white leading-tight break-keep" style={{ wordBreak: 'keep-all' }}>
                {currentQuestion.question}
              </h2>

              <div className="grid gap-4">
                {currentQuestion.options.map((opt, i) => {
                  const isSelected = answers[currentIndex] === opt.type;
                  return (
                    <button
                      key={i}
                      onClick={() => handleAnswerSelect(opt.type)}
                      className={`group relative p-6 text-left rounded-3xl border transition-all duration-300 flex items-center gap-5 ${
                        isSelected 
                        ? 'bg-neon-cyan/10 border-neon-cyan shadow-[0_0_20px_rgba(0,243,255,0.2)]' 
                        : 'bg-white/5 border-white/10 hover:border-white/30'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl border flex items-center justify-center text-sm font-black transition-all ${
                        isSelected ? 'bg-neon-cyan text-black border-neon-cyan' : 'bg-white/5 border-white/10 text-gray-500'
                      }`}>
                        {isSelected ? <Check size={18} /> : String.fromCharCode(65 + i)}
                      </div>
                      <span className={`text-lg transition-colors ${isSelected ? 'text-white font-bold' : 'text-gray-400 group-hover:text-gray-200'}`}>
                        {opt.text}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Nav Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex justify-between items-center">
          <button
            disabled={!canGoPrev}
            onClick={() => setCurrentIndex(prev => prev - 1)}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all ${
              canGoPrev ? 'text-white hover:bg-white/5' : 'text-gray-700 cursor-not-allowed'
            }`}
          >
            <ChevronLeft size={20} /> Prev
          </button>
          
          <div className="flex gap-1">
            {[...Array(questions.length)].map((_, i) => {
              const status = i === currentIndex ? 'current' : i < maxReachedIndex ? 'done' : 'future';
              return (
                <div 
                  key={i} 
                  className={`h-1 rounded-full transition-all ${
                    status === 'current' ? 'w-6 bg-neon-cyan' : status === 'done' ? 'w-2 bg-gray-500' : 'w-1 bg-white/10'
                  }`} 
                />
              );
            })}
          </div>

          <button
            disabled={currentIndex >= maxReachedIndex}
            onClick={() => setCurrentIndex(prev => prev + 1)}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all ${
              currentIndex < maxReachedIndex ? 'text-white hover:bg-white/5' : 'text-gray-700 cursor-not-allowed'
            }`}
          >
            Next <ChevronRight size={20} />
          </button>
        </div>
        
        {currentIndex > maxReachedIndex - 4 && currentIndex <= maxReachedIndex && (
          <p className="text-center mt-6 text-[10px] text-gray-600 font-bold uppercase tracking-widest">
            You can review up to 4 previous steps
          </p>
        )}
      </div>
    </div>
  );
};

export default Quiz;