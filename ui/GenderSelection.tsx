
import React from 'react';
import { motion } from 'framer-motion';
import { Gender } from '../SchemaDefinitions';
import { User, UserRound, HelpCircle } from 'lucide-react';

interface Props {
  onSelect: (gender: Gender) => void;
}

const GenderSelection: React.FC<Props> = ({ onSelect }) => {
  const options: { label: string; value: Gender; icon: React.ReactNode; color: string; shadow: string }[] = [
    { 
      label: '여자', 
      value: 'F', 
      icon: <UserRound size={40} />, 
      color: 'text-neon-pink', 
      shadow: 'shadow-[0_0_20px_rgba(255,46,136,0.3)] border-neon-pink/30 hover:border-neon-pink' 
    },
    { 
      label: '남자', 
      value: 'M', 
      icon: <User size={40} />, 
      color: 'text-neon-cyan', 
      shadow: 'shadow-[0_0_20px_rgba(0,243,255,0.3)] border-neon-cyan/30 hover:border-neon-cyan' 
    },
    { 
      label: '선택 안 함', 
      value: 'O', 
      icon: <HelpCircle size={40} />, 
      color: 'text-neon-purple', 
      shadow: 'shadow-[0_0_20px_rgba(178,58,255,0.3)] border-neon-purple/30 hover:border-neon-purple' 
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-deep-black">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <span className="text-neon-cyan font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Personalization Step 1</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">성별을 선택해주세요</h2>
        <p className="text-gray-500 max-w-sm mx-auto">더욱 정밀하고 공감되는 <br/>상황별 질문이 준비되어 있습니다.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full px-4">
        {options.map((opt, idx) => (
          <motion.button
            key={opt.value}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => onSelect(opt.value)}
            className={`group relative p-10 rounded-[40px] bg-white/5 border backdrop-blur-xl transition-all flex flex-col items-center gap-6 ${opt.shadow}`}
          >
            <div className={`${opt.color} transition-transform group-hover:scale-110`}>
              {opt.icon}
            </div>
            <span className="text-2xl font-display font-black text-white">{opt.label}</span>
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none rounded-[40px]"></div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default GenderSelection;
