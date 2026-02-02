
import React from 'react';
import { motion } from 'framer-motion';
import { TestMode } from '../types';
import { Zap, Activity, ShieldCheck, Clock, CheckCircle } from 'lucide-react';

interface ModeSelectionProps {
  onSelect: (mode: TestMode) => void;
}

const modes: TestMode[] = [
  {
    id: 'CORE',
    count: 50,
    label: "빠르고 효율적",
    branding: "Core Scan (핵심 진단)",
    time: "approx. 5 mins"
  },
  {
    id: 'DEEP',
    count: 70,
    label: "높은 정확도",
    branding: "Deep Analysis (정밀 분석)",
    time: "approx. 10 mins",
    recommended: true
  },
  {
    id: 'FULL',
    count: 90,
    label: "완벽한 해독",
    branding: "Full Profiling (종합 프로파일링)",
    time: "approx. 15 mins"
  }
];

const ModeSelection: React.FC<ModeSelectionProps> = ({ onSelect }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-deep-black">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <span className="text-neon-cyan font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Depth of Analysis</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">진단의 깊이를 <br className="md:hidden"/>선택해주세요</h2>
        <p className="text-gray-500 max-w-lg mx-auto">더 많은 문항에 응답할수록 <br className="md:hidden"/>당신의 잠재적 행동 DNA가 정교하게 해독됩니다.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {modes.map((mode, idx) => (
          <motion.button
            key={mode.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => onSelect(mode)}
            className={`group relative p-10 rounded-[40px] bg-white/5 border transition-all text-center overflow-hidden flex flex-col items-center ${
              mode.recommended ? 'border-neon-cyan/50 ring-1 ring-neon-cyan/20' : 'border-white/10 hover:border-white/20'
            }`}
          >
            {mode.recommended && (
              <div className="absolute top-6 right-6 bg-neon-cyan text-black font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-tighter shadow-[0_0_15px_rgba(0,243,255,0.5)]">
                Recommended
              </div>
            )}

            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 ${
              mode.recommended ? 'bg-neon-cyan/10 text-neon-cyan' : 'bg-white/5 text-gray-400'
            }`}>
              {mode.id === 'CORE' && <Zap size={32} />}
              {mode.id === 'DEEP' && <Activity size={32} />}
              {mode.id === 'FULL' && <ShieldCheck size={32} />}
            </div>

            <h3 className="text-2xl font-display font-black text-white mb-2">{mode.branding}</h3>
            <p className={`text-sm font-bold mb-6 ${mode.recommended ? 'text-neon-cyan' : 'text-gray-500'}`}>
              {mode.label}
            </p>

            <div className="flex flex-col gap-3 w-full pt-6 border-t border-white/5">
              <div className="flex items-center justify-center gap-2 text-xs text-gray-400 font-medium">
                <CheckCircle size={14} className="text-neon-cyan/50" />
                <span>{mode.count} Questions</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs text-gray-500 font-medium">
                <Clock size={14} />
                <span>{mode.time}</span>
              </div>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default ModeSelection;
