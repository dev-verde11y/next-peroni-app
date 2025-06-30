// components/sections/Hero.tsx
'use client'; // Indica que este é um Client Component no Next.js App Router

import React, { useEffect, useState } from 'react';
import Link from 'next/link'; // Importe Link, pois agora ele será usado para os botões

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []); 

  return (
    <section className="relative min-h-screen flex items-center bg-white text-gray-900 overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(37, 99, 235, 0.05) 0%, transparent 50%)`,
        }}></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Lado Esquerdo: Conteúdo Textual e CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              
              {/* Badge de Destaque */}
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-semibold mb-6 border border-blue-200/50">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                Especialistas em Direito Trabalhista
              </div>

              {/* Título Principal */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 leading-tight">
                <span className="text-gray-900">Defendendo os</span>
                <br />
                <span className="text-gray-900">Direitos do</span>{' '}
                <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent animate-gradient">
                  Trabalhador
                </span>
                <br />
                <span className="text-gray-900">com</span>{' '}
                <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 bg-clip-text text-transparent animate-gradient">
                  Experiência
                </span>
              </h1>

              {/* Subtítulo / Descrição */}
              <p className="text-lg md:text-xl mb-8 text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                A **Hiça Peroni Advocacia** oferece assessoria jurídica especializada para garantir a justiça nas relações de trabalho. Seja em questões de rescisão, assédio ou qualquer conflito trabalhista, estamos aqui para proteger seus interesses.
              </p>

              {/* Botões de Chamada para Ação (CTAs) */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
                <Link
                  href="/contato?area=trabalhista" // Exemplo: Link para página de contato com parâmetro
                  className="group relative px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-center"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Fale com um Especialista
                  </span>
                </Link>
                
                <Link
                  href="/servicos#trabalhista" // Exemplo: Link para seção específica de serviços
                  className="group px-8 py-4 border-2 border-gray-300 text-gray-900 hover:border-blue-700 hover:text-blue-700 font-bold rounded-lg transition-all duration-300 text-center hover:bg-blue-50"
                >
                  <span className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Saiba Mais sobre Direito Trabalhista
                  </span>
                </Link>
              </div>

              {/* Indicadores de Confiança */}
              <div className="flex flex-wrap gap-6 text-sm text-gray-600 justify-center lg:justify-start">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Atendimento Humanizado</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Assessoria Jurídica Completa</span>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito: Cartão Visual e Contato Flutuante */}
          <div className="lg:col-span-5 relative">
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              
              {/* Cartão Principal com Áreas de Atuação */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-200 backdrop-blur-sm">
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Áreas de Atuação Trabalhista</h4>
                  {[
                    { icon: '⚖️', title: 'Reclamações Trabalhistas', desc: 'Defesa e proposição de ações' },
                    { icon: '🤝', title: 'Acordos e Negociações', desc: 'Mediação e conciliação' },
                    { icon: '📄', title: 'Consultoria Preventiva', desc: 'Análise de riscos e compliance' },
                    { icon: '📜', title: 'Assédio e Discriminação', desc: 'Proteção legal e indenizações' }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300 group cursor-pointer"
                    >
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                          {item.title}
                        </h5>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  ))}
                </div>

                {/* Badge de Conquista/Reconhecimento */}
                <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-blue-800">Reconhecimento Nacional</p>
                      <p className="text-xs text-blue-600">Melhor Advocacia Trabalhista 2024</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cartão de Contato Flutuante (WhatsApp) */}
              <Link 
                href="https://wa.me/5511999999999?text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta+sobre+Direito+Trabalhista." 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute -bottom-4 -right-4 bg-blue-700 text-white p-4 rounded-xl shadow-xl hover:shadow-2xl hover:bg-blue-800 transition-colors duration-300 flex items-center space-x-3 z-20" // Adicionado z-index
              >
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm">WhatsApp</p>
                  <p className="text-xs opacity-90">+55 (11) 99999-9999</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Styled JSX para animação do gradiente de texto (mantido) */}
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