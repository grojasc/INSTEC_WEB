'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { openWhatsApp } from '@/utils/whatsapp';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const WhatsAppButton = ({
  phoneNumber,
  message = 'Hola, me interesa obtener más información.',
  position = 'bottom-right',
  className = '',
  size = 'md'
}: WhatsAppButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    openWhatsApp(phoneNumber, message);
  };

  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'top-right': 'top-6 right-6',
    'top-left': 'top-6 left-6'
  };

  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-14 h-14',
    lg: 'w-16 h-16'
  };

  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-7 h-7',
    lg: 'w-8 h-8'
  };

  return (
    <motion.button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        fixed ${positionClasses[position]} ${sizeClasses[size]}
        bg-green-500 hover:bg-green-600 text-white rounded-full
        flex items-center justify-center shadow-lg hover:shadow-xl
        transition-all duration-300 z-50 group
        ${className}
      `}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      {/* WhatsApp Icon */}
      <svg
        className={iconSizes[size]}
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.106"/>
      </svg>

      {/* Tooltip */}
      <motion.div
        className={`
          absolute ${position.includes('right') ? 'right-full mr-3' : 'left-full ml-3'}
          ${position.includes('bottom') ? 'bottom-0' : 'top-0'}
          bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap
          opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity
        `}
        initial={{ opacity: 0, x: position.includes('right') ? 10 : -10 }}
        animate={{ 
          opacity: isHovered ? 1 : 0, 
          x: isHovered ? 0 : (position.includes('right') ? 10 : -10)
        }}
        transition={{ duration: 0.2 }}
      >
        Contáctanos por WhatsApp
        <div 
          className={`
            absolute ${position.includes('right') ? 'left-full' : 'right-full'}
            ${position.includes('bottom') ? 'bottom-3' : 'top-3'}
            w-0 h-0 border-solid
            ${position.includes('right') 
              ? 'border-l-gray-900 border-l-4 border-y-transparent border-y-4 border-r-0' 
              : 'border-r-gray-900 border-r-4 border-y-transparent border-y-4 border-l-0'
            }
          `}
        />
      </motion.div>

      {/* Pulse animation */}
      <motion.div
        className="absolute inset-0 bg-green-500 rounded-full opacity-75"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 0, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
    </motion.button>
  );
};

export default WhatsAppButton;