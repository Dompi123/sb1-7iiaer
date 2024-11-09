import React from 'react';
import { styles } from '../styles';

interface CardProps {
  highlight?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  highlight = false, 
  className = '' 
}) => (
  <div 
    className={`
      ${styles.colors.card}
      ${styles.glass}
      rounded-3xl p-6
      border border-white/10
      ${highlight ? 'shadow-xl shadow-fuchsia-500/10' : ''}
      ${styles.animation}
      ${className}
    `}
  >
    {children}
  </div>
);