
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

// [설정] 고객님이 제공해주신 Perfect Order 프로젝트 연결 정보
const SUPABASE_URL = 'https://oknypcjubolxtlgudhvh.supabase.co';
const SUPABASE_KEY = 'sb_publishable_hQugueyjzI-4nkBOTEq4oQ_SMN82wnl';

// Supabase 클라이언트 초기화
const supabase = (SUPABASE_URL && SUPABASE_KEY) 
  ? createClient(SUPABASE_URL, SUPABASE_KEY) 
  : null;

const VisitorCounter: React.FC = () => {
  const [count, setCount] = useState(1124); // 로딩 전 기본값

  useEffect(() => {
    if (!supabase) return;

    const fetchAndIncrement = async () => {
      try {
        // RPC: 서버 함수를 호출하여 안전하게 카운트 +1
        // (SQL Editor에서 increment_counter 함수가 생성되어 있어야 합니다)
        const { data, error } = await supabase.rpc('increment_counter');

        if (error) {
          console.error('Counter Error:', error);
          // RPC 호출 실패 시 (함수가 없거나 권한 문제 등), 
          // 테이블 조회만 시도하여 현재 값이라도 가져옵니다.
          const { data: selectData } = await supabase
            .from('visitor_counters')
            .select('count')
            .eq('id', 1)
            .single();
            
          if (selectData) animateCount(selectData.count);
        } else if (typeof data === 'number') {
          // 정상적으로 증가된 값을 받아왔을 때
          animateCount(data);
        }
      } catch (err) {
        console.error('Connection error:', err);
      }
    };

    fetchAndIncrement();
  }, []);

  const animateCount = (target: number) => {
    // 현재 값(또는 조금 낮은 값)에서 타겟 값까지 부드럽게 올라가는 애니메이션
    const start = target - 30 > 0 ? target - 30 : 0;
    const duration = 1500;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      
      const currentVal = Math.floor(start + (target - start) * ease);
      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.0, duration: 0.8 }}
      className="fixed bottom-4 left-4 z-50 flex items-center gap-3 px-4 py-3 bg-black/80 backdrop-blur-xl border border-neon-cyan/30 rounded-full shadow-[0_0_20px_rgba(0,243,255,0.2)] group cursor-default"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-neon-cyan/30 blur-md rounded-full"></div>
        <Users size={16} className="text-neon-cyan relative z-10" />
      </div>
      
      <div className="flex flex-col items-start leading-none">
        <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-0.5 flex items-center gap-1">
          Total Participants <TrendingUp size={8} className="text-neon-pink" />
        </span>
        <div className="flex items-center gap-1">
          <span className="text-sm font-display font-black text-white tabular-nums">
            {count.toLocaleString()}
          </span>
          <span className="text-[10px] text-white/50 font-medium">명 검사 완료</span>
        </div>
      </div>
    </motion.div>
  );
};

export default VisitorCounter;
