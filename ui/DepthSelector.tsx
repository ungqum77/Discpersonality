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
    { id: 'CORE', count: 50, label: "빠르고 효율적", branding: "핵심 스캔", time: "5분", icon: <Zap size={32} /> },
    { id: 'DEEP', count: 70, label: "높은 정확도", branding: "정밀 분석", time: "10분", recommended: true, icon: <Activity size={32} /> },
    { id: 'FULL', count: 90, label: "완벽한 해독", branding: "종합 프로파일링", time: "15분", icon: <ShieldCheck size={32} /> }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-deep-black relative">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <span className="text-neon-purple font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Selection</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">진단의 깊이를 <br className="md:hidden"/>선택해주세요</h2>
        <p className="text-gray-500 text-sm">문항수가 많을수록 더욱 정밀한 분석 결과가 제공됩니다.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full mb-16">
        {modes.map((m, idx) => (
          <motion.button 
            key={m.id} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => onSelect(m)} 
            className={`group relative p-10 rounded-[40px] bg-white/5 border transition-all text-center flex flex-col items-center ${m.recommended ? 'border-neon-cyan shadow-[0_0_30px_rgba(0,243,255,0.15)]' : 'border-white/10 hover:border-white/20'}`}
          >
            {m.recommended && (
              <div className="absolute top-6 right-6 bg-neon-cyan text-black font-black text-[11px] px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg">
                추천
              </div>
            )}
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${m.recommended ? 'bg-neon-cyan/10 text-neon-cyan' : 'bg-white/5 text-gray-400'} group-hover:scale-110 transition-transform`}>
              {m.icon}
            </div>
            <div className="text-2xl font-display font-black text-white mb-2">{m.branding}</div>
            <div className="text-gray-400 text-sm font-bold mb-6">{m.label}</div>
            <div className="mt-auto pt-6 border-t border-white/5 w-full text-[12px] text-gray-500 font-bold uppercase tracking-widest">
              {m.count}문항 / {m.time}
            </div>
          </motion.button>
        ))}
      </div>

      {/* 하단 중앙 고정 뒤로가기 버튼 */}
      <motion.button 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        onClick={onBack}
        className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-neon-cyan text-sm font-black hover:bg-white/10 transition-all shadow-xl hover:scale-105 active:scale-95"
      >
        <ChevronLeft size={20} /> 연령 선택으로 돌아가기
      </motion.button>
    </div>
  );
};
export default DepthSelector;