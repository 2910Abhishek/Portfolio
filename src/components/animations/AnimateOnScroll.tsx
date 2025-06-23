'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
}

const AnimateOnScroll = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  once = true,
  className = '',
}: AnimateOnScrollProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.2 });

  // Define the animation variants
  const getDirectionOffset = () => {
    switch (direction) {
      case 'up': return { y: 40 };
      case 'down': return { y: -40 };
      case 'left': return { x: 40 };
      case 'right': return { x: -40 };
      case 'none': return {};
      default: return { y: 40 };
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [isInView, controls, once]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, ...getDirectionOffset() },
        visible: { opacity: 1, x: 0, y: 0 }
      }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll; 