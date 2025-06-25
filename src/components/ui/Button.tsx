// components/ui/Button.tsx
import React, { ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  className?: string;
  disabled?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  href, 
  className = '',
  disabled = false,
  icon,
  iconPosition = 'left'
}: ButtonProps) => {
  const baseClasses = `
    inline-flex items-center justify-center 
    font-semibold rounded-xl 
    transition-all duration-300 
    focus:outline-none focus:ring-2 focus:ring-offset-2 
    disabled:opacity-50 disabled:cursor-not-allowed
    transform hover:-translate-y-0.5
  `;
  
  const variantClasses = {
    primary: `
      bg-gradient-to-r from-amber-500 to-orange-500 
      hover:from-amber-600 hover:to-orange-600 
      text-white shadow-lg hover:shadow-xl
      focus:ring-amber-500
    `,
    secondary: `
      bg-gray-600 hover:bg-gray-700 
      dark:bg-gray-700 dark:hover:bg-gray-600
      text-white shadow-lg hover:shadow-xl
      focus:ring-gray-500
    `,
    outline: `
      border-2 border-gray-300 dark:border-gray-600
      text-gray-900 dark:text-white 
      hover:border-amber-500 dark:hover:border-amber-400
      hover:text-amber-600 dark:hover:text-amber-400 
      hover:bg-amber-50 dark:hover:bg-amber-900/10
      focus:ring-amber-500
    `,
    ghost: `
      text-gray-600 dark:text-gray-300
      hover:text-amber-600 dark:hover:text-amber-400
      hover:bg-amber-50 dark:hover:bg-amber-900/10
      focus:ring-amber-500
    `
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="mr-2">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="ml-2">{icon}</span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button 
      onClick={onClick} 
      className={classes}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;