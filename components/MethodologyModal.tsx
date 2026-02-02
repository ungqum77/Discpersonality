
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BookOpen, CheckCircle2 } from 'lucide-react';

interface MethodologyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MethodologyModal: React.FC<MethodologyModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-[#111] border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="p-8 md:p-12 overflow-y-auto max-h-[80vh]">
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-3 text-neon-cyan mb-6">
                <BookOpen size={24} />
                <span className="font-display font-bold tracking-widest text-sm">METHODOLOGY</span>
              </div>

              <h2 className="text-3xl font-display font-bold mb-8">과학적 근거에 기반한 <br/>정밀 행동 분석</h2>
              
              <div className="space-y-8 text-gray-400 leading-relaxed">
                <section>
                  <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-neon-cyan" /> 윌리엄 마스턴 박사의 DISC 이론
                  </h3>
                  <p>
                    THE INSIGHT는 1928년 하버드 심리학자 윌리엄 마스턴 박사가 고안한 DISC 모델을 현대적으로 재해석했습니다. 인간의 행동 유형을 주도형(D), 사교형(I), 안정형(S), 신중형(C) 네 가지 핵심 축으로 분석합니다.
                  </p>
                </section>

                <section>
                  <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-neon-cyan" /> 연령별 맞춤형 문항 설계
                  </h3>
                  <p>
                    단순한 질문지가 아닙니다. 10대(학교), 20-30대(직장/연애), 40-50대(사회적 책임), 60대 이상(제2의 인생) 등 생애 주기에 최적화된 시나리오 기반 문항을 통해 응답의 정확도를 높였습니다.
                  </p>
                </section>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 italic text-sm">
                  "우리는 당신의 '성격'을 판단하지 않습니다. 당신이 특정 상황에서 보여주는 '행동 양식'을 해독하여, 더 나은 소통과 성과를 돕습니다."
                </div>
              </div>

              <button 
                onClick={onClose}
                className="w-full mt-10 py-4 bg-neon-cyan text-black font-bold rounded-xl hover:brightness-110 transition-all"
              >
                확인했습니다
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MethodologyModal;
