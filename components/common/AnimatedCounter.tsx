import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

interface AnimatedCounterProps {
  to: number;
  suffix?: string;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ to, suffix = "", duration = 1.5 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      const animation = animate(count, to, { duration, ease: "easeOut" });
      return animation.stop;
    }
  }, [inView, to, count, duration]);

  return <span ref={ref}><motion.span>{rounded}</motion.span>{suffix}</span>;
};

export default AnimatedCounter;