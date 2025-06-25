// components/ui/Card.tsx
import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  hover?: boolean;
  gradient?: boolean;
}

const Card = ({ 
  children, 
  className = '', 
  padding = 'lg',
  hover = true,
  gradient = false
}: CardProps) => {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const baseClasses = `
    bg-white dark:bg-gray-800 
    rounded-2xl 
    border border-gray-200 dark:border-gray-700 
    transition-all duration-300
    ${paddingClasses[padding]}
  `;

  const hoverClasses = hover ? `
    hover:shadow-xl hover:shadow-gray-200/25 dark:hover:shadow-gray-900/25
    hover:-translate-y-1 
    hover:border-amber-200 dark:hover:border-amber-700
  ` : '';

  const gradientClasses = gradient ? `
    bg-gradient-to-br from-white to-gray-50 
    dark:from-gray-800 dark:to-gray-900
  ` : '';

  return (
    <div className={`${baseClasses} ${hoverClasses} ${gradientClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
