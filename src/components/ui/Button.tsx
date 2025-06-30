// components/ui/Button.tsx
import React, { ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: ReactNode;
  /**
   * Define o estilo visual do botão.
   * - 'primary': Botão principal, destaque em azul. Ideal para CTAs importantes.
   * - 'secondary': Botão secundário, fundo cinza escuro. Para ações menos proeminentes.
   * - 'outline': Botão com borda, sem preenchimento. Para ações complementares.
   * - 'ghost': Botão com texto, sem borda ou preenchimento. Para navegação ou ações discretas.
   * Padrão: 'primary'
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  /**
   * Define o tamanho do botão.
   * - 'sm': Pequeno
   * - 'md': Médio
   * - 'lg': Grande
   * Padrão: 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Função de callback para ser executada quando o botão é clicado (se não houver `href`).
   */
  onClick?: () => void;
  /**
   * URL para onde o botão deve navegar (transforma o botão em um link).
   * Usa o componente `Link` do Next.js para otimização.
   */
  href?: string;
  /**
   * Classes CSS adicionais para aplicar ao botão.
   * Exemplo: "w-full" ou "mt-4"
   */
  className?: string;
  /**
   * Desativa o botão, impedindo interações e alterando seu estilo.
   * Padrão: false
   */
  disabled?: boolean;
  /**
   * Um ícone para ser exibido dentro do botão. Pode ser um SVG ou outro componente React.
   */
  icon?: ReactNode;
  /**
   * Posição do ícone em relação ao texto do botão.
   * Padrão: 'left'
   */
  iconPosition?: 'left' | 'right';
  /**
   * Abre o link em uma nova aba (apenas quando `href` é usado).
   * Padrão: false
   */
  targetBlank?: boolean; // Novo prop para abrir em nova aba
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
  iconPosition = 'left',
  targetBlank = false // Novo prop
}: ButtonProps) => {
  const baseClasses = `
    inline-flex items-center justify-center 
    font-semibold rounded-lg md:rounded-xl // Ajuste para cantos mais profissionais
    transition-all duration-300 ease-in-out // Transições mais suaves
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 // Offset para visibilidade em dark mode
    disabled:opacity-50 disabled:cursor-not-allowed
    transform hover:-translate-y-0.5 // Efeito de elevação sutil no hover
  `;
  
  // Classes de estilo para cada variante, usando a paleta azul e cinza
  const variantClasses = {
    primary: `
      bg-blue-700 hover:bg-blue-800 
      text-white shadow-lg hover:shadow-xl
      focus:ring-blue-500
    `,
    secondary: `
      bg-gray-700 hover:bg-gray-800 
      dark:bg-gray-800 dark:hover:bg-gray-700
      text-white shadow-md hover:shadow-lg // Sombra um pouco menos proeminente que primary
      focus:ring-gray-600
    `,
    outline: `
      border-2 border-gray-300 dark:border-gray-600
      text-gray-900 dark:text-gray-200 
      hover:border-blue-700 dark:hover:border-blue-400
      hover:text-blue-700 dark:hover:text-blue-400 
      hover:bg-blue-50 dark:hover:bg-blue-900/10 // Fundo sutil no hover
      focus:ring-blue-500
    `,
    ghost: `
      text-gray-700 dark:text-gray-300
      hover:text-blue-700 dark:hover:text-blue-400
      hover:bg-blue-50 dark:hover:bg-blue-900/10
      focus:ring-blue-500
    `
  };

  // Classes para tamanhos
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  // Conteúdo interno do botão (texto + ícone)
  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className={`mr-2 ${size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'}`}>{icon}</span> // Ajuste de tamanho do ícone
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className={`ml-2 ${size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'}`}>{icon}</span> // Ajuste de tamanho do ícone
      )}
    </>
  );

  // Renderiza como Link do Next.js se `href` for fornecido
  if (href) {
    return (
      <Link 
        href={href} 
        className={classes}
        {...(targetBlank && { target: '_blank', rel: 'noopener noreferrer' })} // Adiciona target="_blank" e rel para segurança
      >
        {content}
      </Link>
    );
  }

  // Senão, renderiza como um botão HTML padrão
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