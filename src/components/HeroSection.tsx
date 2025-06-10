import Image from 'next/image';
import ScrollLink from './ScrollLink';
import { trackHeroCTA } from '@/utils/analytics';

const HeroSection = () => {
  const formatDate = () => {
    return "Tempo de leitura: 3 minutos";
  };

  const handleCTAClick = () => {
    trackHeroCTA();
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 pt-0 pb-8 md:pb-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Menu Mobile */}
        <div className="block lg:hidden mb-8">
          <nav className="flex justify-center space-x-1 bg-white rounded-lg p-2 shadow-sm">
            <button className="flex-1 text-xs font-medium text-gray-700 py-2 px-1 rounded-md bg-gray-50 text-center whitespace-nowrap">
              Melhores Remedios
            </button>
            <button className="flex-1 text-xs font-medium text-gray-700 py-2 px-1 rounded-md text-center whitespace-nowrap">
              Ranking Oficial
            </button>
            <button className="flex-1 text-xs font-medium text-gray-700 py-2 px-1 rounded-md text-center whitespace-nowrap">
              Especialistas
            </button>
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo do lado esquerdo */}
          <div className="space-y-4">
            {/* Data de atualização */}
            <div className="pt-2 md:pt-6">
              <p className="text-gray-600 text-sm">
                {formatDate()}
              </p>
            </div>

            {/* Título principal */}
            <div className="text-left">
              <h1 className="text-3xl lg:text-4xl xl:text-[2.75rem] font-bold text-gray-900 leading-tight mb-2">
                <div className="text-gray-900">Análise dos 5 Melhores Remédios para Emagrecer em 2025</div>
              </h1>
              <h2 className="text-lg lg:text-xl text-gray-600 mb-4 underline decoration-green-500 decoration-2">Aprovados pela anvisa</h2>
            </div>

            {/* Imagem em mobile */}
            <div className="block lg:hidden relative h-[450px] w-full mt-[2px] mb-6">
              <picture>
                <source media="(max-width: 768px)" srcSet="/hero-mob.png" />
                <Image
                  src="/hero-mob.png"
                  alt="Remédios para emagrecer"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </picture>
            </div>

            {/* Subtítulo com destaque */}
            <p className="text-gray-700 leading-relaxed">
            Em 2025, os remédios para emagrecer, especialmente os que têm base natural, estão cada vez mais avançados e acessíveis. Hoje, existem opções que ajudam a controlar o apetite, acelerar o metabolismo e até melhorar a queima de gordura, tudo isso para facilitar o processo de perda de peso.
            </p>

            <p className="text-gray-700 leading-relaxed">
            Em meio a tantas opções, fica difícil saber qual remédio realmente funciona e vale a pena investir. Por isso, fizemos uma análise detalhada dos produtos mais populares e eficazes, considerando não só os resultados na perda de peso, mas também os benefícios para a saúde, a facilidade de uso e os cuidados que você precisa ter para usar com segurança.
            </p>

            <p className="text-gray-700 leading-relaxed">
            Separamos os 5 melhores remédios para emagrecer que você encontra no mercado, explicando como funcionam, seus benefícios e cuidados que você deve ter ao usar cada um deles.
            </p>

            {/* Botão CTA */}
            <ScrollLink 
              targetId="quiz"
              className="inline-flex bg-[#00A040] hover:bg-[#008F35] text-white font-medium py-4 px-4 sm:px-8 rounded-lg transition-colors duration-300 items-center justify-between w-full text-sm sm:text-base"
              onClick={handleCTAClick}
            >
                              <span className="flex-1 text-center leading-tight">CONHEÇA OS 5 MELHORES REMEDIOS</span>
              <span className="ml-2">↓</span>
            </ScrollLink>

            {/* Seta indicativa de mais conteúdo */}
            <div className="flex justify-center mt-4">
              <div className="animate-bounce">
                <svg 
                  className="w-6 h-6 text-gray-500" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Imagem do lado direito (apenas desktop) */}
          <div className="hidden lg:block relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <picture>
              <source media="(min-width: 769px)" srcSet="/hero-desk.png" />
              <Image
                src="/hero-desk.png"
                alt="Remédios para emagrecer"
                fill
                className="object-cover"
                priority
                sizes="(min-width: 769px) 50vw, 100vw"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;