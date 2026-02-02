import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LandingSection from './ui/LandingSection.tsx';
import AgeFilter from './ui/AgeFilter.tsx';
import DepthSelector from './ui/DepthSelector.tsx';
import Questionnaire from './ui/Questionnaire.tsx';
import Result from './components/Result.tsx';
import Analyzing from './components/Analyzing.tsx';
import ScienceOverlay from './ui/ScienceOverlay.tsx';
import { AppState, DISCType, Question, ResultContent, AgeGroup, TestMode } from './SchemaDefinitions.ts';

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

  // 브라우저 주소창 변경 감지 (애드센스 전면광고 트리거 및 뒤로가기 대응)
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#result' && view === 'ANALYZING') {
        setView('RESULT');
      } else if (!window.location.hash && view === 'RESULT') {
        // 결과창에서 뒤로가기를 누르면 홈으로
        handleReset();
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [view]);

  const handleStartClick = () => setView('AGE_SELECT');

  const handleAgeSelect = (age: AgeGroup) => {
    setSelectedAge(age);
    setView('MODE_SELECT');
  };

  const handleModeSelect = (mode: TestMode) => {
    if (!selectedAge) return;
    
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

    const actualCount = Math.min(mode.count, pool.length);
    const updatedMode = { ...mode, count: actualCount };
    setSelectedMode(updatedMode);

    const shuffledPool = shuffleArray(pool);
    const sliced = shuffledPool.slice(0, actualCount);
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

  const handleAnalysisFinished = () => {
    // 탭 이동 없이 수동으로 넘길 때를 위해 hash를 체크하거나 직접 view 변경
    if (window.location.hash !== '#result') {
      window.location.hash = 'result';
    }
    setView('RESULT');
  };

  const handleReset = () => {
    // 다시 하기 시 해시 제거
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
    }
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
    const second = sorted.length > 1 ? sorted[1][0] : first;
    
    const totalAnswered = Object.values(finalScores).reduce((a, b) => a + b, 0) || 1;
    const firstRatio = finalScores[first] / totalAnswered;
    
    let key = (firstRatio >= 0.6) ? `High ${first}` : `${first}${second}`;
    
    const found = analysisData.find(r => r.type === key) || 
                  analysisData.find(r => r.type === first) || 
                  analysisData[0];
                  
    return found;
  }, [finalScores]);

  return (
    <div className="min-h-screen bg-deep-black flex flex-col font-sans text-white overflow-x-hidden">
      <ScienceOverlay isOpen={isMethodologyOpen} onClose={() => setIsMethodologyOpen(false)} />
      
      <nav className="fixed top-0 left-0 w-full z-[60] px-4 md:px-8 py-3.5 md:py-5 flex justify-between items-center bg-black/60 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-2 cursor-pointer group" onClick={handleReset}>
           <span className="font-display font-black text-xl md:text-2xl tracking-tighter">
             THE <span className="text-neon-cyan">INSIGHT</span>
           </span>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsMethodologyOpen(true)} 
            className="hidden md:block text-gray-500 text-[10px] font-black tracking-widest uppercase hover:text-neon-cyan transition-all"
          >
            Methodology
          </button>
          <button 
            onClick={handleReset} 
            className="px-4 md:px-7 py-2 rounded-xl bg-neon-cyan text-black font-black text-[11px] md:text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-all"
          >
            다시하기
          </button>
        </div>
      </nav>

      <main className="flex-grow relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full w-full"
          >
            {view === 'HOME' && <LandingSection onStart={handleStartClick} />}
            {view === 'AGE_SELECT' && <AgeFilter onSelect={handleAgeSelect} />}
            {view === 'MODE_SELECT' && <DepthSelector onSelect={handleModeSelect} onBack={() => setView('AGE_SELECT')} />}
            {view === 'QUIZ' && <Questionnaire questions={finalQuestions} onFinish={handleQuizFinish} onBackToMode={() => setView('MODE_SELECT')} />}
            {view === 'ANALYZING' && <Analyzing onFinished={handleAnalysisFinished} />}
            {view === 'RESULT' && <Result scores={finalScores} result={matchedResult} onReset={handleReset} ageGroup={selectedAge || '20s'} />}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="w-full py-8 px-6 bg-deep-black border-t border-white/5 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[9px] md:text-[11px] text-gray-600 font-medium">
            <span>웰나스코어</span>
            <span className="text-white/10">|</span>
            <span>ungqum77@gmail.com</span>
            <span className="text-white/10">|</span>
            <span>801-15-02098</span>
            <span className="text-white/10">|</span>
            <span>2023-창원성산-0414호</span>
          </div>
          <div className="text-[9px] md:text-[11px] text-gray-700 font-bold">
            © 2024 웰나스코어. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainController;