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
                <div className="text-gray-900">Análise detalhada dos melhores remédios para emagrecer</div>
              </h1>
              <h2 className="text-xl lg:text-2xl text-gray-600 mb-4">Quais realmente funcionam?</h2>
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
            Você já tentou vários remédios para emagrecer e não viu resultado? Ou pior: sofreu com efeitos colaterais como ansiedade, insônia ou até problemas no coração?
            Em 2025, surgiram novas fórmulas naturais e medicamentos controlados que prometem emagrecimento rápido, mas será que eles funcionam de verdade?
            Nesta análise, testamos e comparamos os 5 remédios mais buscados do mercado, desde termogênicos até inibidores de apetite
            </p>

            <p className="text-gray-700 leading-relaxed">
            Antes de decidir por qualquer produto, é fundamental entender seu próprio corpo e objetivos. Alguns emagrecedores são ótimos para controlar a compulsão alimentar, enquanto outros agem melhor na queima de gordura localizada.
            </p>

            {/* Botão CTA */}
            <ScrollLink 
              targetId="quiz"
              className="inline-flex bg-[#00A040] hover:bg-[#008F35] text-white font-medium py-4 px-4 sm:px-8 rounded-lg transition-colors duration-300 items-center justify-between w-full text-sm sm:text-base"
              onClick={handleCTAClick}
            >
                              <span className="flex-1 text-center leading-tight">VEJA AGORA OS 5 REMÉDIOS PARA EMAGRECER</span>
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