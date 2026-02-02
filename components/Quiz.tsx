
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Question, DISCType } from '../types';

interface QuizProps {
  questions: Question[];
  onFinish: (scores: Record<DISCType, number>) => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, onFinish }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState<Record<DISCType, number>>({
    D: 0, I: 0, S: 0, C: 0
  });

  // 질문이 없는 경우 방어 코드
  if (!questions || questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-deep-black text-white p-8 text-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">준비된 문항이 없습니다.</h2>
          <p className="text-gray-400">데이터를 확인 중입니다. 잠시 후 다시 시도해주세요.</p>
        </div>
      </div>
    );
  }

  const progress = ((currentIndex + 1) / questions.length) * 100;
  const currentQuestion = questions[currentIndex];

  const handleAnswer = (type: DISCType) => {
    const newScores = { ...scores, [type]: scores[type] + 1 };
    setScores(newScores);
    
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setTimeout(() => onFinish(newScores), 300);
    }
  };

  // currentQuestion이 혹시라도 undefined일 경우를 대비
  if (!currentQuestion) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-deep-black">
      <div className="w-full max-w-3xl">
        {/* Progress Section */}
        <div className="mb-16">
          <div className="flex justify-between items-end mb-4">
            <span className="text-xs font-bold text-neon-cyan tracking-[0.3em] uppercase">
              Question {currentIndex + 1} / {questions.length}
            </span>
            <span className="text-3xl font-display font-bold text-white">{Math.round(progress)}%</span>
          </div>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple shadow-[0_0_15px_rgba(0,243,255,0.6)]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Question Container */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col"
            >
              <div className="mb-4 text-neon-cyan font-bold text-sm tracking-widest uppercase opacity-60">
                {currentQuestion.category ? currentQuestion.category.replace('_', ' ') : 'General'}
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 leading-tight text-white">
                {currentQuestion.question}
              </h2>

              <div className="grid gap-5">
                {currentQuestion.options.map((answer, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(answer.type)}
                    className="group relative p-6 text-left rounded-2xl bg-white/5 border border-white/10 hover:border-neon-cyan hover:bg-neon-cyan/5 transition-all duration-300 transform hover:-translate-y-1 active:scale-[0.98]"
                  >
                    <div className="flex items-center gap-5">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sm font-bold text-gray-500 group-hover:bg-neon-cyan group-hover:text-black group-hover:border-neon-cyan transition-all">
                        {String.fromCharCode(65 + i)}
                      </div>
                      <span className="text-lg text-gray-300 group-hover:text-white transition-colors leading-snug">
                        {answer.text}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
