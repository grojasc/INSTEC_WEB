'use client'
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { staggerContainer } from '@/utils/transitions';

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
}

const StaggerContainer = ({ children, className = '' }: StaggerContainerProps) => {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default StaggerContainer;