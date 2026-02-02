import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LandingSection from './ui/LandingSection.tsx';
import AgeFilter from './ui/AgeFilter.tsx';
import DepthSelector from './ui/DepthSelector.tsx';
import Questionnaire from './ui/Questionnaire.tsx';
import Result from './components/Result.tsx';
import ScienceOverlay from './ui/ScienceOverlay.tsx';
import { AppState, DISCType, Question, ResultContent, AgeGroup, TestMode } from './SchemaDefinitions.ts';
import { Loader2 } from 'lucide-react';

import { surveyData } from './content/survey-provider.ts';
import { analysisData } from './content/analysis-provider.ts';

function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

const MainController: React.FC = () => {
  const [view, setView] = useState<AppState | 'ANALYZING'>('HOME');
  const [selectedAge, setSelectedAge] = useState<AgeGroup | null>(null);
  const [selectedMode, setSelectedMode] = useState<TestMode | null>(null);
  const [isMethodologyOpen, setIsMethodologyOpen] = useState(false);
  const [finalQuestions, setFinalQuestions] = useState<Question[]>([]);
  const [finalScores, setFinalScores] = useState<Record<DISCType, number>>({
    D: 0, I: 0, S: 0, C: 0
  });

  const handleStartClick = () => setView('AGE_SELECT');

  const handleAgeSelect = (age: AgeGroup) => {
    setSelectedAge(age);
    setView('MODE_SELECT');
  };

  const handleModeSelect = (mode: TestMode) => {
    if (!selectedAge) return;
    setSelectedMode(mode);
    const ageMap: Record<AgeGroup, number> = { 
      '10s': 15, '20s': 25, '30s': 35, '40s': 45, '50s': 55, '60s': 70 
    };
    const targetAgeValue = ageMap[selectedAge];
    
    const pool = (surveyData || []).filter(q => 
      targetAgeValue >= q.target_age_min && targetAgeValue <= q.target_age_max
    );

    if (pool.length === 0) {
      alert("해당 연령대의 질문 데이터를 찾을 수 없습니다.");
      return;
    }

    const shuffledPool = shuffleArray(pool);
    const sliced = shuffledPool.slice(0, Math.min(mode.count, shuffledPool.length));
    const fullyShuffled = sliced.map(q => ({
      ...q,
      options: shuffleArray([...q.options])
    }));

    setFinalQuestions(fullyShuffled);
    setView('QUIZ');
  };

  const handleQuizFinish = (scores: Record<DISCType, number>) => {
    setFinalScores(scores);
    setView('ANALYZING');
  };

  useEffect(() => {
    if (view === 'ANALYZING') {
      const timer = setTimeout(() => {
        setView('RESULT');
      }, 2200);
      return () => clearTimeout(timer);
    }
  }, [view]);

  const handleReset = () => {
    setView('HOME');
    setSelectedAge(null);
    setSelectedMode(null);
    setFinalScores({ D: 0, I: 0, S: 0, C: 0 });
    setFinalQuestions([]);
  };

  const matchedResult = useMemo((): ResultContent => {
    const scoresArray = Object.entries(finalScores) as [DISCType, number][];
    const sorted = [...scoresArray].sort((a, b) => b[1] - a[1]);
    const first = sorted[0][0];
    const second = sorted[1][0];
    
    const totalScore = Object.values(finalScores).reduce((a, b) => a + b, 0) || 1;
    const firstRatio = finalScores[first] / totalScore;
    
    let key = (firstRatio >= 0.6) ? `High ${first}` : `${first}${second}`;
    
    const found = analysisData.find(r => r.type === key) || 
                  analysisData.find(r => r.type === first) || 
                  analysisData[0];
                  
    return found;
  }, [finalScores]);

  return (
    <div className="min-h-screen bg-deep-black flex flex-col font-sans text-white overflow-x-hidden">
      <ScienceOverlay isOpen={isMethodologyOpen} onClose={() => setIsMethodologyOpen(false)} />
      
      <nav className="fixed top-0 left-0 w-full z-[60] px-8 py-5 flex justify-between items-center bg-black/50 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={handleReset}>
           <span className="font-display font-black text-2xl tracking-tighter transition-transform group-hover:scale-105">
             THE <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan to-blue-500">INSIGHT</span>
           </span>
        </div>
        <div className="flex items-center gap-8">
          <button 
            onClick={() => setIsMethodologyOpen(true)} 
            className="hidden md:block text-gray-400 text-[10px] font-black tracking-[0.3em] uppercase hover:text-neon-cyan transition-all"
          >
            Methodology
          </button>
          <button 
            onClick={handleStartClick} 
            className="px-7 py-2.5 rounded-xl bg-neon-cyan text-black font-black text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(0,243,255,0.4)] hover:shadow-[0_0_35px_rgba(0,243,255,0.7)] transition-all active:scale-95"
          >
            다시하기
          </button>
        </div>
      </nav>

      <main className="flex-grow relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="h-full w-full"
          >
            {view === 'HOME' && <LandingSection onStart={handleStartClick} />}
            {view === 'AGE_SELECT' && <AgeFilter onSelect={handleAgeSelect} />}
            {view === 'MODE_SELECT' && <DepthSelector onSelect={handleModeSelect} onBack={() => setView('AGE_SELECT')} />}
            {view === 'QUIZ' && <Questionnaire questions={finalQuestions} onFinish={handleQuizFinish} onBackToMode={() => setView('MODE_SELECT')} />}
            {view === 'ANALYZING' && (
              <div className="min-h-screen flex flex-col items-center justify-center gap-8 bg-deep-black">
                <div className="relative">
                   <Loader2 size={64} className="text-neon-cyan animate-spin opacity-20" />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-neon-cyan rounded-full animate-pulse shadow-[0_0_30px_#00f3ff]"></div>
                   </div>
                </div>
                <div className="text-center space-y-3">
                   <h2 className="text-2xl font-display font-bold tracking-widest text-white animate-pulse">DNA COMBINING...</h2>
                   <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.3em]">분석 결과를 조합하고 있습니다</p>
                </div>
              </div>
            )}
            {view === 'RESULT' && <Result scores={finalScores} result={matchedResult} onReset={handleReset} ageGroup={selectedAge || '20s'} />}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="w-full py-12 px-8 bg-deep-black border-t border-white/5 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col gap-2.5">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-gray-500 font-medium">
              <span>상호: 웰나스코어</span>
              <span className="hidden md:inline text-white/10">|</span>
              <span>문의: ungqum77@gmail.com</span>
              <span className="hidden md:inline text-white/10">|</span>
              <span>사업자등록번호: 801-15-02098</span>
              <span className="hidden md:inline text-white/10">|</span>
              <span>통신판매업신고: 2023-창원성산-0414호</span>
            </div>
          </div>
          <div className="text-[11px] text-gray-600 font-bold tracking-tight">
            © 2024 웰나스코어. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainController;