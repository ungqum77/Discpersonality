
import React from 'react';
import { motion } from 'framer-motion';
import { AgeGroup } from '../SchemaDefinitions';
import { GraduationCap, Rocket, Briefcase, Users, HeartHandshake, Landmark, ChevronLeft } from 'lucide-react';

interface Props { 
  onSelect: (age: AgeGroup) => void; 
  onBack: () => void;
}

const AgeFilter: React.FC<Props> = ({ onSelect, onBack }) => {
  const options: { label: string; value: AgeGroup; icon: React.ReactNode; desc: string }[] = [
    { label: '10대', value: '10s', icon: <GraduationCap size={32} />, desc: '학업 및 교우 관계' },
    { label: '20대', value: '20s', icon: <Rocket size={32} />, desc: '취업 및 자아 탐색' },
    { label: '30대', value: '30s', icon: <Briefcase size={32} />, desc: '직장 및 결혼 생활' },
    { label: '40대', value: '40s', icon: <Users size={32} />, desc: '사회적 지위 및 가족' },
    { label: '50대', value: '50s', icon: <HeartHandshake size={32} />, desc: '은퇴 준비 및 노후' },
    { label: '60대+', value: '60s', icon: <Landmark size={32} />, desc: '삶의 연륜 및 여가' },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-deep-black pt-28">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <span className="text-neon-cyan font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Personalization Step 2</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">당신의 연령대를 <br className="md:hidden"/>선택해주세요</h2>
        <p className="text-gray-500 text-sm">연령대에 특화된 맞춤 문항이 제공됩니다.</p>
      </motion.div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl w-full mb-12">
        {options.map((opt, idx) => (
          <motion.button 
            key={opt.value} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            onClick={() => onSelect(opt.value)} 
            className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-neon-cyan hover:bg-neon-cyan/5 transition-all text-left overflow-hidden"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-neon-cyan mb-6 group-hover:scale-110 transition-transform">
              {opt.icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{opt.label}</h3>
            <p className="text-xs text-gray-500 font-medium">{opt.desc}</p>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-neon-cyan scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </motion.button>
        ))}
      </div>

      <motion.button 
        onClick={onBack}
        className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 text-xs font-black hover:text-neon-cyan transition-all active:scale-95"
      >
        <ChevronLeft size={16} /> 성별 선택으로 돌아가기
      </motion.button>
    </div>
  );
};
export default AgeFilter;
