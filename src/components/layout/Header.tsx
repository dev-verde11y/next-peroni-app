// components/layout/Header.tsx
"use client"; // Necessário para componentes que usam hooks do React ou interagem com o DOM do navegador

import React, { useState, useEffect } from "react";
import Link from "next/link"; // Componente Link do Next.js para navegação otimizada

const Header = () => {
  // Estados para controlar o tema (claro/escuro), abertura do menu mobile e efeito de scroll
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Efeito para detectar o scroll da página e aplicar o estilo "glassmorphism"
  // Também detecta a preferência de tema do sistema operacional na montagem inicial
  useEffect(() => {
    const handleScroll = () => {
      // Atualiza o estado isScrolled se a página tiver rolado mais de 20px
      setIsScrolled(window.scrollY > 20);
    };

    // Adiciona o event listener para o scroll
    window.addEventListener("scroll", handleScroll);

    // Verifica a preferência de cor do sistema para definir o tema inicial
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      document.documentElement.classList.add("dark"); // Adiciona a classe 'dark' ao <html>
      setIsDark(true); // Atualiza o estado isDark
    }

    // Função de limpeza: remove o event listener quando o componente é desmontado
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // O array vazio assegura que o efeito rode apenas uma vez (na montagem)

  // Função para alternar o tema (claro/escuro)
  const toggleTheme = () => {
    // Usa a forma funcional do setState para garantir que o estado anterior seja o correto
    setIsDark((prevIsDark) => {
      const newIsDark = !prevIsDark; // Inverte o estado atual do tema
      if (newIsDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      // Opcional: Você pode salvar a preferência do usuário no localStorage aqui
      // localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
      return newIsDark; // Retorna o novo estado
    });
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-white/90 dark:bg-gray-900/90 shadow-md border-b border-gray-100/30 dark:border-gray-800/30" // Efeito "glassmorphism" ao rolar
          : "bg-white dark:bg-gray-900" // Fundo sólido quando no topo
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 md:h-20"> {/* Altura do cabeçalho */}
          {/* Seção da Logo e Nome da Advogada */}
          <div className="flex items-center space-x-3 md:space-x-4">
            <div className="flex-shrink-0">
              <Link href="/" aria-label="Página Inicial">
                <img
                  src="/images/logo.jpeg"
                  alt="Logotipo de Hiça Peroni Advocacia"
                  className="w-12 h-12 md:w-14 md:h-14 object-contain rounded-md shadow" // Logo com cantos sutilmente arredondados e sombra
                />
              </Link>
            </div>
            <div className="hidden sm:block"> {/* Oculta em telas muito pequenas */}
              <Link href="/" className="group">
                <h1 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                  Hiça Peroni
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  Advogada Especializada
                </p>
              </Link>
            </div>
          </div>

          {/* Navegação Principal (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-6 md:space-x-8">
            {[
              { name: "Início", href: "/" },
              { name: "Sobre", href: "/sobre" },
              { name: "Áreas de Atuação", href: "/especialidades" }, // Nome mais formal
              { name: "Artigos", href: "/blog" }, // Termo mais profissional
              { name: "Contato", href: "/contato" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-gray-700 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-300 group"
              >
                {item.name}
                {/* Linha de destaque que aparece ao passar o mouse */}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-700 dark:bg-blue-300 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Ações do Cabeçalho (Botão de Tema, CTA, Menu Mobile) */}
          <div className="flex items-center space-x-3 md:space-x-4">
            {/* Botão de alternar Dark/Light Mode */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="Alternar tema" // Descrição para leitores de tela
            >
              {isDark ? (
                // Ícone para o modo claro (sol) - aparece quando o tema é escuro
                <svg
                  className="w-5 h-5 text-blue-400" // Cor azul para o sol
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                // Ícone para o modo escuro (lua) - aparece quando o tema é claro
                <svg
                  className="w-5 h-5 text-gray-600" // Cor cinza neutra para a lua
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {/* Botão de Chamada para Ação (CTA) - Desktop */}
            <div className="hidden md:block">
              <Link
                href="/contato"
                className="relative px-4 py-2 md:px-5 md:py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-md shadow-md transition-colors duration-300"
              >
                Agendar Consulta
              </Link>
            </div>

            {/* Botão para abrir/fechar o Menu Mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="Abrir menu de navegação"
            >
              <svg
                className={`w-6 h-6 text-gray-600 dark:text-gray-300 transform transition-transform duration-300 ${
                  isMenuOpen ? "rotate-90" : "" // Rotação para o ícone de 'X'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  // Ícone de "X" quando o menu está aberto
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  // Ícone de hambúrguer quando o menu está fechado
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Mobile (Conteúdo) */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0" // Controla a altura e opacidade para efeito de slide/fade
          }`}
        >
          <div className="py-2 border-t border-gray-200 dark:border-gray-800">
            <nav className="flex flex-col space-y-1 p-2">
              {[
                { name: "Início", href: "/" },
                { name: "Sobre", href: "/sobre" },
                { name: "Áreas de Atuação", href: "/especialidades" },
                { name: "Casos de Sucesso", href: "/casos" },
                { name: "Artigos", href: "/blog" },
                { name: "Contato", href: "/contato" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex items-center px-4 py-3 text-gray-700 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-300 bg-gray-50 dark:bg-gray-900 rounded-md font-medium transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar em um link
                >
                  {item.name}
                  {/* Linha de destaque para links do menu mobile */}
                  <span className="absolute left-0 w-0 h-0.5 bg-blue-700 dark:bg-blue-300 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}

              {/* CTA do Menu Mobile */}
              <div className="border-t border-gray-200 dark:border-gray-800">
                <Link
                  href="/contato"
                  className="flex items-center justify-center px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-md shadow-md transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar no CTA
                >
                  Agendar Consulta
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;