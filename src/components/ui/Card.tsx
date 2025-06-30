// components/ui/Card.tsx
import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  /**
   * Classes CSS adicionais para aplicar ao card.
   * Exemplo: "col-span-1 md:col-span-2"
   */
  className?: string;
  /**
   * Controla o espaçamento interno (padding) do card.
   * - 'sm': Menor padding, ideal para cards mais compactos.
   * - 'md': Padding médio.
   * - 'lg': Maior padding, para cards com mais conteúdo ou destaque.
   * Padrão: 'lg'
   */
  padding?: 'sm' | 'md' | 'lg';
  /**
   * Ativa ou desativa os efeitos de hover (sombra e leve translação).
   * Padrão: true
   */
  hover?: boolean;
  /**
   * Aplica um gradiente sutil ao fundo do card.
   * Padrão: false
   */
  gradient?: boolean;
  /**
   * Define o esquema de cores de fundo do card.
   * - 'default': Fundo branco no tema claro, cinza escuro no tema escuro.
   * - 'blue': Fundo azul para cards de destaque.
   * Padrão: 'default'
   */
  background?: 'default' | 'blue'; // Adicionado nova opção de background
}

const Card = ({ 
  children, 
  className = '', 
  padding = 'lg',
  hover = true,
  gradient = false,
  background = 'default' // Novo prop
}: CardProps) => {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  // Cores de fundo do card, alinhadas com a paleta do site
  const backgroundClasses = {
    default: 'bg-white dark:bg-gray-800',
    blue: 'bg-blue-700 dark:bg-blue-800 text-white', // Cards azuis terão texto branco por padrão
  };

  const baseClasses = `
    ${backgroundClasses[background]} 
    rounded-xl md:rounded-2xl 
    border border-gray-200 dark:border-gray-700 
    transition-all duration-300
    ${paddingClasses[padding]}
  `;

  const hoverClasses = hover ? `
    hover:shadow-lg dark:hover:shadow-xl
    hover:shadow-blue-200/40 dark:hover:shadow-blue-900/40
    hover:-translate-y-0.5
    hover:border-blue-300 dark:hover:border-blue-600
  ` : ''; // Sombra e borda em tons de azul, leve translate-y

  const gradientClasses = gradient ? `
    bg-gradient-to-br from-white via-gray-50 to-gray-100 
    dark:from-gray-800 dark:via-gray-850 dark:to-gray-900
  ` : ''; // Gradiente mais sutil, expandido para 3 pontos para suavidade

  return (
    <div className={`${baseClasses} ${hoverClasses} ${gradientClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Card;