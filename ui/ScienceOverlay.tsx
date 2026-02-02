import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props { isOpen: boolean; onClose: () => void; }

const ScienceOverlay: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div onClick={onClose} className="absolute inset-0 bg-black/90" />
          <div className="relative max-w-lg w-full bg-[#111] p-10 rounded-3xl border border-white/10">
            <h2 className="text-2xl font-bold mb-6">분석 방법론</h2>
            <p className="text-gray-400 leading-relaxed">
              본 진단은 윌리엄 마스턴 박사의 DISC 이론을 기반으로 하며, 세대별 라이프스타일을 반영한 특수 문항으로 정밀도를 높였습니다.
            </p>
            <button onClick={onClose} className="w-full mt-10 py-4 bg-neon-cyan text-black font-bold rounded-xl">닫기</button>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
export default ScienceOverlay;