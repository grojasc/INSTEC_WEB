'use client'
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { fadeInUp, fadeInDown, fadeInLeft, fadeInRight, scaleIn, slideInUp } from '@/utils/transitions';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'scale' | 'slideUp';
  className?: string;
  delay?: number;
}

const AnimatedSection = ({ 
  children, 
  animation = 'fadeUp', 
  className = '',
  delay = 0 
}: AnimatedSectionProps) => {
  const animations = {
    fadeUp: fadeInUp,
    fadeDown: fadeInDown,
    fadeLeft: fadeInLeft,
    fadeRight: fadeInRight,
    scale: scaleIn,
    slideUp: slideInUp
  };

  const selectedAnimation = animations[animation];
  
  const animationWithDelay = {
    ...selectedAnimation,
    visible: {
      ...selectedAnimation.visible,
      transition: {
        ...selectedAnimation.visible.transition,
        delay
      }
    }
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={animationWithDelay}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;