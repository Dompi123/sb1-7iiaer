import React from 'react';
import { styles } from '../styles';

interface BadgeProps {
  color?: 'default' | 'hot';
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ 
  children, 
  color = 'default',
  className = '' 
}) => (
  <span className={`
    px-3 py-1 rounded-full text-sm font-medium
    ${color === 'hot' ? 'bg-gradient-to-r from-orange-500 to-pink-500' : 'bg-white/10'}
    ${styles.animation}
    ${className}
  `}>
    {children}
  </span>
);