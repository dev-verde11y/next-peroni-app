// components/ui/Section.tsx
import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  /**
   * Título principal da seção.
   * Exemplo: "Nossa Abordagem no Direito Trabalhista"
   */
  title?: string;
  /**
   * Subtítulo ou descrição breve da seção, complementando o título.
   * Exemplo: "Combinamos expertise jurídica aprofundada com atendimento humanizado para garantir os melhores resultados."
   */
  subtitle?: string;
  /**
   * Define o esquema de cores de fundo da seção.
   * - 'default': Fundo branco no tema claro, cinza escuro no tema escuro. Ideal para a maioria do conteúdo.
   * - 'dark': Fundo quase preto em ambos os temas. Perfeito para seções que precisam de alto contraste ou um visual mais dramático.
   * - 'blue': Fundo azul vibrante em ambos os temas. Ótimo para CTAs, depoimentos em destaque ou áreas de serviço chave.
   * Padrão: 'default'
   */
  background?: 'default' | 'dark' | 'blue';
  /**
   * Classes CSS adicionais para aplicar à tag `<section>`, permitindo customizações extras.
   * Exemplo: "mt-12" ou "lg:items-center"
   * Padrão: ""
   */
  className?: string;
  /**
   * ID único para a seção, permitindo navegação por âncora (ex: `href="/#contato"`).
   * Padrão: undefined
   */
  id?: string;
  /**
   * Controla o espaçamento vertical (padding) da seção.
   * - 'sm': Menor espaçamento, útil para seções compactas.
   * - 'default': Espaçamento padrão.
   * - 'lg': Maior espaçamento, para seções de grande destaque.
   * Padrão: 'default'
   */
  padding?: 'sm' | 'default' | 'lg';
}

const Section = ({ 
  children, 
  title, 
  subtitle, 
  background = 'default', 
  className = '', 
  id,
  padding = 'default' 
}: SectionProps) => {

  // Define as classes de fundo baseadas na propriedade `background`
  const backgroundClasses = {
    default: 'bg-white dark:bg-gray-900', // Branco no tema claro, cinza chumbo no escuro
    dark: 'bg-gray-950 dark:bg-gray-950 text-gray-100', // Quase preto em ambos, texto claro
    blue: 'bg-blue-700 dark:bg-blue-800 text-white', // Azul profundo em ambos, texto branco
  };

  // Define as classes de padding vertical
  const paddingClasses = {
    sm: 'py-12 lg:py-16',
    default: 'py-16 lg:py-24',
    lg: 'py-20 lg:py-32',
  };

  return (
    <section 
      id={id} // Atribui o ID para navegação âncora
      // Combina as classes de fundo, padding e quaisquer classes adicionais
      className={`relative transition-colors duration-300 ${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}
    >
      {/* Gradiente de fundo sutil para seções 'dark' e 'blue' para um toque premium */}
      {(background === 'dark' || background === 'blue') && (
        <div 
          className="absolute inset-0 opacity-10 dark:opacity-5 pointer-events-none" 
          style={{ 
            backgroundImage: `radial-gradient(circle at 10% 90%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
                              radial-gradient(circle at 90% 10%, rgba(37, 99, 235, 0.05) 0%, transparent 50%)`
          }}
        ></div>
      )}

      {/* Container principal para centralizar o conteúdo e aplicar padding horizontal */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && ( // Renderiza o cabeçalho da seção se houver título ou subtítulo
          <div className="text-center mb-12 md:mb-16">
            {title && (
              <h2 
                className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 
                ${background === 'dark' || background === 'blue' ? 'text-white' : 'text-gray-900 dark:text-white'}`}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p 
                className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed 
                ${background === 'dark' || background === 'blue' ? 'text-blue-200 opacity-90' : 'text-gray-600 dark:text-gray-300'}`}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children} {/* Renderiza o conteúdo principal da seção */}
      </div>
    </section>
  );
};

export default Section;