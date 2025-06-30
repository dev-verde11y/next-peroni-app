// components/sections/Hero.tsx
'use client';
import React, { useEffect, useState } from 'react';
// import Link from 'next/link';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      
      {/* Background Pattern and Subtle Gradient - Mantido para o visual premium */}
      <div className="absolute inset-0 opacity-40 dark:opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(37, 99, 235, 0.1) 0%, transparent 50%)`,
        }}></div>
      </div>

      {/* Floating Elements - Mantido para o visual premium */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Conteúdo Principal do Hero */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gray-900 dark:text-white">Seus Direitos,</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent animate-gradient">
              Nossa Prioridade
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
           Criar conteudo da página!
          </p>

        </div>
      </div>

      {/* Styled JSX para animação do gradiente de texto (se você usa next/font ou fonts externas, pode ser removido) */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;