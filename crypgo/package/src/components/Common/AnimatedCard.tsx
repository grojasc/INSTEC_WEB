'use client'
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cardHover } from '@/utils/transitions';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  enableHover?: boolean;
}

const AnimatedCard = ({ children, className = '', enableHover = true }: AnimatedCardProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={enableHover ? cardHover.hover : undefined}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;