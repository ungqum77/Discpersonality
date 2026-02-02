
import React from 'react';
import { motion } from 'framer-motion';
import { AgeGroup } from '../types';
import { User, Users, GraduationCap, Briefcase, Landmark, HeartHandshake } from 'lucide-react';

interface AgeSelectionProps {
  onSelect: (age: AgeGroup) => void;
}

const ageOptions: { label: string; value: AgeGroup; icon: any; desc: string }[] = [
  { label: '10대', value: '10s', icon: GraduationCap, desc: '학교 및 교우 관계 중심' },
  { label: '20대', value: '20s', icon: User, desc: '진로 및 사회 초년생 시나리오' },
  { label: '30대', value: '30s', icon: Briefcase, desc: '직장 및 결혼 생활 중심' },
  { label: '40대', value: '40s', icon: Users, desc: '사회적 리더십 및 가족 관리' },
  { label: '50대', value: '50s', icon: HeartHandshake, desc: '은퇴 준비 및 갱년기 건강' },
  { label: '60대+', value: '60s', icon: Landmark, desc: '제2의 인생 및 황혼 육아' },
];

const AgeSelection: React.FC<AgeSelectionProps> = ({ onSelect }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-deep-black">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <span className="text-neon-cyan font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Personalization</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">당신의 연령대를 <br className="md:hidden"/>선택해주세요</h2>
        <p className="text-gray-500 max-w-lg mx-auto">선택하신 연령대에 가장 적합한 상황별 질문이 제공되어 <br/>더욱 정확한 진단 결과를 얻으실 수 있습니다.</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl w-full">
        {ageOptions.map((option, idx) => (
          <motion.button
            key={option.value}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => onSelect(option.value)}
            className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-neon-cyan hover:bg-neon-cyan/5 transition-all text-left overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity">
              <option.icon size={80} />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-neon-cyan/10 flex items-center justify-center text-neon-cyan mb-6 group-hover:scale-110 transition-transform">
                <option.icon size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{option.label}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{option.desc}</p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-neon-cyan scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default AgeSelection;
