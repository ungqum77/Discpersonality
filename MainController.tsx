
import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LandingSection from './ui/LandingSection';
import GenderSelection from './ui/GenderSelection';
import AgeFilter from './ui/AgeFilter';
import DepthSelector from './ui/DepthSelector';
import Questionnaire from './ui/Questionnaire';
import Result from './components/Result';
import Analyzing from './components/Analyzing';
import ScienceOverlay from './ui/ScienceOverlay';
import VisitorCounter from './components/VisitorCounter';
import { AppState, DISCType, Question, ResultContent, AgeGroup, TestMode, Gender } from './SchemaDefinitions';

// Import surveyData and analysisData
import { surveyData } from './content/survey-provider';
import { analysisData } from './content/analysis-provider';

// Fisher-Yates Shuffle helper
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
  const [selectedGender, setSelectedGender] = useState<Gender | null>(null);
  const [selectedAge, setSelectedAge] = useState<AgeGroup | null>(null);
  const [selectedMode, setSelectedMode] = useState<TestMode | null>(null);
  const [isMethodologyOpen, setIsMethodologyOpen] = useState(false);
  const [finalQuestions, setFinalQuestions] = useState<Question[]>([]);
  const [finalScores, setFinalScores] = useState<Record<DISCType, number>>({
    D: 0, I: 0, S: 0, C: 0
  });

  // Handle direct result links (Share functionality)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const d = params.get('d');
    const i = params.get('i');
    const s = params.get('s');
    const c = params.get('c');
    const age = params.get('age') as AgeGroup;
    const gender = params.get('gender') as Gender;
    const isResultView = params.get('view') === 'result';

    if (isResultView && d && i && s && c && age) {
      setFinalScores({
        D: parseInt(d, 10) || 0,
        I: parseInt(i, 10) || 0,
        S: parseInt(s, 10) || 0,
        C: parseInt(c, 10) || 0
      });
      setSelectedAge(age);
      if (gender) setSelectedGender(gender);
      setView('RESULT');
    }
  }, []);

  const handleStartClick = () => setView('GENDER_SELECT');

  const handleGenderSelect = (gender: Gender) => {
    setSelectedGender(gender);
    setView('AGE_SELECT');
  };

  const handleAgeSelect = (age: AgeGroup) => {
    setSelectedAge(age);
    setView('MODE_SELECT');
  };

  const handleModeSelect = (mode: TestMode) => {
    if (!selectedAge || !selectedGender) return;
    
    const userAgeRanges: Record<AgeGroup, { min: number; max: number }> = {
      '10s': { min: 10, max: 19 },
      '20s': { min: 20, max: 29 },
      '30s': { min: 30, max: 39 },
      '40s': { min: 40, max: 49 },
      '50s': { min: 50, max: 59 },
      '60s': { min: 60, max: 99 }
    };
    
    const userRange = userAgeRanges[selectedAge];
    
    // 1. Ensure absolute uniqueness by ID from the source data
    const uniqueSource = Array.from(new Map(surveyData.map(q => [q.id, q])).values());

    // 2. Filter Pool based on Gender and Age
    // Female (F): 866 ~ 1715
    // Male (M) / Other (O): 1 ~ 865
    const pool = uniqueSource.filter((q: Question) => {
      const isGenderMatch = selectedGender === 'F' 
        ? (q.id >= 866 && q.id <= 1715)
        : (q.id >= 1 && q.id <= 865);
      
      if (!isGenderMatch) return false;

      // Age Range Overlap Check
      const hasAgeOverlap = q.target_age_min <= userRange.max && q.target_age_max >= userRange.min;
      return hasAgeOverlap;
    });

    // 3. Fallback logic: if filtered pool is too small, use gender-matched pool without age restriction
    let validPool = pool;
    if (pool.length < mode.count) {
      validPool = uniqueSource.filter((q: Question) => 
        selectedGender === 'F' ? (q.id >= 866 && q.id <= 1715) : (q.id >= 1 && q.id <= 865)
      );
    }

    // 4. Randomize and slice
    const shuffledPool = shuffleArray(validPool);
    const countToTake = Math.min(mode.count, shuffledPool.length);
    const selectedQuestions = shuffledPool.slice(0, countToTake);
    
    setSelectedMode({ ...mode, count: countToTake });
    
    const questionsWithShuffledOptions = selectedQuestions.map((q: Question) => ({
      ...q,
      options: shuffleArray([...q.options])
    }));

    setFinalQuestions(questionsWithShuffledOptions);
    setView('QUIZ');
  };

  const handleQuizFinish = (scores: Record<DISCType, number>) => {
    setFinalScores(scores);
    setView('ANALYZING');
  };

  const handleReset = () => {
    if (window.location.search) {
      window.location.href = '/';
    } else {
      setView('HOME');
      setSelectedGender(null);
      setSelectedAge(null);
      setSelectedMode(null);
      setFinalScores({ D: 0, I: 0, S: 0, C: 0 });
      setFinalQuestions([]);
    }
  };

  const matchedResult = useMemo((): ResultContent => {
    const scoresArray = Object.entries(finalScores) as [DISCType, number][];
    const sorted = [...scoresArray].sort((a, b) => Number(b[1]) - Number(a[1]));
    const first = sorted[0][0];
    const second = sorted.length > 1 ? sorted[1][0] : first;
    
    const totalAnswered = (Object.values(finalScores) as number[]).reduce((acc: number, val: number) => acc + val, 0) || 1;
    const firstRatio = Number(finalScores[first]) / totalAnswered;
    
    let key = (firstRatio >= 0.6) ? `High ${first}` : `${first}${second}`;
    
    const found = (analysisData || []).find(r => r.type === key) || 
                  (analysisData || []).find(r => r.type === first) || 
                  (analysisData && analysisData[0]);
                  
    return found;
  }, [finalScores]);

  return (
    <div className="min-h-screen bg-deep-black flex flex-col font-sans text-white overflow-x-hidden">
      <ScienceOverlay isOpen={isMethodologyOpen} onClose={() => setIsMethodologyOpen(false)} />
      <VisitorCounter />
      
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
            {view === 'GENDER_SELECT' && <GenderSelection onSelect={handleGenderSelect} />}
            {view === 'AGE_SELECT' && <AgeFilter onSelect={handleAgeSelect} onBack={() => setView('GENDER_SELECT')} />}
            {view === 'MODE_SELECT' && <DepthSelector onSelect={handleModeSelect} onBack={() => setView('AGE_SELECT')} />}
            {view === 'QUIZ' && <Questionnaire questions={finalQuestions} onFinish={handleQuizFinish} onBackToMode={() => setView('MODE_SELECT')} />}
            {view === 'ANALYZING' && <Analyzing scores={finalScores} ageGroup={selectedAge || '20s'} gender={selectedGender || 'O'} />}
            {view === 'RESULT' && <Result scores={finalScores} result={matchedResult} onReset={handleReset} ageGroup={selectedAge || '20s'} gender={selectedGender || 'O'} />}
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
