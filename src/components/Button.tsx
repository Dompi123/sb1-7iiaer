import React from 'react';
import { styles } from '../styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => (
  <button
    className={`
      ${styles.animation}
      rounded-full px-6 py-3 font-medium
      ${variant === 'primary' 
        ? `bg-gradient-to-r ${styles.colors.accent} hover:shadow-lg hover:shadow-fuchsia-500/20`
        : 'bg-white/10 hover:bg-white/20'}
      ${className}
    `}
    {...props}
  >
    {children}
  </button>
);