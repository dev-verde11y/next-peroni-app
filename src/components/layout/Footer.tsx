// components/layout/Footer.tsx
import React from "react";
import Link from "next/link";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-16">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex-shrink-0">
                <Link href="/" aria-label="Página Inicial">
                  <Image
                    src="/images/logo.jpeg"
                    alt="Logotipo de Hiça Peroni Advocacia"
                    className="w-12 h-12 md:w-14 md:h-14 object-contain rounded-md shadow"
                  />
                </Link>
              </div>
              <div>
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

            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md leading-relaxed text-sm md:text-base">
              Somos especialistas em Direito Civil, Trabalhista e Empresarial. Oferecemos soluções jurídicas personalizadas, buscando excelência e resultados eficazes para cada cliente.
            </p>

            <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <p>
                <span className="font-semibold text-gray-700 dark:text-gray-200">OAB/GO:</span> 123.456
              </p>
              <p>
                <span className="font-semibold text-gray-700 dark:text-gray-200">CNPJ:</span> 12.345.678/0001-90
              </p>
            </div>

            {/* Redes sociais */}
            <div className="flex space-x-3 mt-8">
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 shadow-sm hover:shadow-md group"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <a
                href="#"
                className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 shadow-sm hover:shadow-md group"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 13.056 2 12.717 2 10c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428A4.88 4.88 0 013.678 1.678a4.897 4.897 0 011.772-1.153C6.087.278 6.813.11 7.878.06 8.944.013 9.283 2 10 2zm0 2.162c-2.717 0-3.056.01-4.122.06-.79.036-1.22.166-1.505.276-.378.145-.64.318-.92.598-.28.28-.453.542-.598.92-.11.285-.24.715-.276 1.505-.05 1.066-.06 1.405-.06 4.122 0 2.717.01 3.056.06 4.122.036.79.166 1.22.276 1.505.145.378.318.64.598.92.28.28.542.453.92.598.285.11.715.24 1.505.276 1.066.05 1.405.06 4.122.06 2.717 0 3.056-.01 4.122-.06.79-.036 1.22-.166 1.505-.276.378-.145.64-.318.92-.598.28-.28.453-.542.598-.92.11-.285.24-.715.276-1.505.05-1.066.06-1.405.06-4.122 0-2.717-.01-3.056-.06-4.122-.036-.79-.166-1.22-.276-1.505a2.5 2.5 0 00-.598-.92 2.5 2.5 0 00-.92-.598c-.285-.11-.715-.24-1.505-.276C13.056 4.172 12.717 4.162 10 4.162zM10 6a4 4 0 100 8 4 4 0 000-8zm0 6.6a2.6 2.6 0 110-5.2 2.6 2.6 0 010 5.2zm5.23-6.97a.96.96 0 11-1.92 0 .96.96 0 011.92 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <a
                href="#"
                className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 shadow-sm hover:shadow-md group"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0C4.477 0 0 4.477 0 10c0 1.89.525 3.66 1.438 5.168L0 20l4.832-1.438A9.956 9.956 0 0010 20c5.523 0 10-4.477 10-10S15.523 0 10 0zm5.03 14.03c-.22.62-1.092 1.172-1.727 1.22-.423.032-.975.145-2.828-.589-1.979-.782-3.265-2.587-3.365-2.706-.1-.119-.82-1.081-.82-2.063 0-.982.52-1.456.705-1.656.185-.2.403-.25.537-.25.134 0 .268.007.385.013.123.007.29-.047.453.345.168.403.573 1.403.623 1.506.05.103.084.224.017.36-.067.136-.1.22-.2.338-.1.119-.21.265-.3.357-.1.103-.204.214-.088.42.117.207.52.857 1.117 1.387.768.681 1.413.891 1.613.99.2.1.317.084.434-.05.117-.134.502-.585.636-.786.134-.201.268-.167.452-.1.184.067 1.17.551 1.37.652.201.1.335.15.385.234.05.084.05.485-.168 1.106z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Sobre", href: "/sobre" },
                { name: "Áreas de Atuação", href: "/especialidades" }, 
                { name: "Artigos", href: "/blog" },
                { name: "Contato", href: "/contato" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 flex items-center group"
                  >
                    {/* Indicador de lista em azul */}
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Seção de Contato */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Contato
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group"> {/* Alterado para items-start para alinhar ícone com o texto longo */}
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-md flex-shrink-0 flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors duration-300">
                  <svg
                    className="w-4 h-4 text-blue-700 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Telefone
                  </p>
                  <a href="tel:+551199999999" className="text-gray-900 dark:text-gray-100 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300">
                    +55 (62) 98169-6579
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-md flex-shrink-0 flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors duration-300">
                  <svg
                    className="w-4 h-4 text-blue-700 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    E-mail
                  </p>
                  <a href="mailto:contato@hicaperoni.com.br" className="text-gray-900 dark:text-gray-100 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300">
                    contato@hicaperoni.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-md flex-shrink-0 flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors duration-300">
                  <svg
                    className="w-4 h-4 text-blue-700 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Localização
                  </p>
                  <address className="not-italic text-gray-900 dark:text-gray-100 font-medium leading-relaxed">
                    Rua. Antonio Luiz Garavelo
                    Goiânia, GO <br />CEP 74968-505
                  </address>
                </div>
              </div>
            </div>

            {/* CTA no footer */}
            <div className="mt-8"> {/* Ajuste de margem superior */}
              <Link
                href="/contato"
                className="inline-flex items-center justify-center w-full px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-md shadow-md transition-all duration-300"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Agendar Consulta
              </Link>
            </div>
          </div>
        </div>

        {/* Linha divisória e copyright */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 dark:text-gray-400 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()}{" "} {/* Atualiza o ano automaticamente */}
              <span className="font-semibold text-gray-700 dark:text-gray-200">Hiça Peroni</span>.
              Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacidade"
                className="text-gray-500 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/termos"
                className="text-gray-500 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;