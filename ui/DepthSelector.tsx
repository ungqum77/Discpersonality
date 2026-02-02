import React from 'react';
import { motion } from 'framer-motion';
import { TestMode } from '../SchemaDefinitions';
import { Zap, Activity, ShieldCheck, ChevronLeft } from 'lucide-react';

interface Props { 
  onSelect: (mode: TestMode) => void; 
  onBack: () => void;
}

const DepthSelector: React.FC<Props> = ({ onSelect, onBack }) => {
  const modes: (TestMode & { icon: React.ReactNode })[] = [
    { id: 'CORE', count: 50, label: "빠르고 효율적", branding: "핵심 스캔", time: "5분", icon: <Zap size={24} /> },
    { id: 'DEEP', count: 70, label: "높은 정확도", branding: "정밀 분석", time: "10분", recommended: true, icon: <Activity size={24} /> },
    { id: 'FULL', count: 90, label: "완벽한 해독", branding: "종합 프로파일링", time: "15분", icon: <ShieldCheck size={24} /> }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-start md:justify-center p-6 bg-deep-black relative pt-28">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
        <span className="text-neon-purple font-bold tracking-[0.4em] uppercase text-[10px] mb-2 block">Selection</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-2">진단의 깊이를 선택하세요</h2>
        <p className="text-gray-500 text-xs opacity-70">문항수가 많을수록 더욱 정밀한 결과가 제공됩니다.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl w-full mb-12">
        {modes.map((m, idx) => (
          <motion.button 
            key={m.id} 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            onClick={() => onSelect(m)} 
            className={`group relative p-6 md:p-10 rounded-[35px] bg-white/5 border transition-all text-center flex flex-col items-center ${m.recommended ? 'border-neon-cyan/50 shadow-[0_0_20px_rgba(0,243,255,0.1)]' : 'border-white/10'}`}
          >
            {m.recommended && (
              <div className="absolute top-4 right-6 bg-neon-cyan text-black font-black text-[9px] px-2.5 py-1 rounded-full uppercase tracking-tighter">
                추천
              </div>
            )}
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${m.recommended ? 'bg-neon-cyan/10 text-neon-cyan' : 'bg-white/5 text-gray-500'}`}>
              {m.icon}
            </div>
            <div className="text-xl font-display font-black text-white mb-1">{m.branding}</div>
            <div className="text-gray-500 text-[11px] font-bold mb-4">{m.label}</div>
            <div className="mt-auto pt-4 border-t border-white/5 w-full text-[10px] text-gray-600 font-black tracking-widest">
              {m.count}문항 / {m.time}
            </div>
          </motion.button>
        ))}
      </div>

      <motion.button 
        onClick={onBack}
        className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 text-neon-cyan text-xs font-black hover:bg-white/10 transition-all active:scale-95"
      >
        <ChevronLeft size={16} /> 연령 선택으로 돌아가기
      </motion.button>
    </div>
  );
};
export default DepthSelector;