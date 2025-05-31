import Image from 'next/image';
import ScrollLink from './ScrollLink';

const HeroSection = () => {
  const formatDate = () => {
    const date = new Date();
    const spDate = new Date(date.toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }));
    return spDate.toLocaleDateString('pt-BR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).replace(/^\w/, (c) => c.toUpperCase()); // Capitaliza a primeira letra
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 pt-8 pb-16 md:py-16">
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
                <div><span className="text-gray-900">Os 5 Melhores Remédios</span></div>
                <div>Para <span className="text-gray-900 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-green-500">Emagrecer</span></div>
              </h1>
              <h2 className="text-xl lg:text-2xl text-gray-600 mb-4">Fórmulas que realmente funcionam</h2>
            </div>

            {/* Subtítulo com destaque */}
            <p className="text-gray-700 leading-relaxed">
              Você está aqui porque pesquisou por um 'remédio para emagrecer' e busca uma solução segura, rápida e, principalmente, saudável para alcançar seus objetivos? Perfeito! Você chegou ao <span className="text-green-600 font-medium">lugar certo</span>. Continue lendo esta análise completa e descubra.
            </p>

            {/* Imagem em mobile */}
            <div className="block lg:hidden relative h-[450px] w-full mt-[2px] mb-6">
              <Image
                src="/onovocomparativo.png"
                alt="Remédios para emagrecer"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Primeiro parágrafo */}
            <p className="text-gray-700 leading-relaxed">
              Se você já tentou de tudo — dietas restritivas, rotinas de exercícios exaustivas, ou até aquelas <span className="text-green-600 font-medium">'receitas milagrosas'</span> — e sente que nada realmente funciona, você não está sozinho. A luta contra a balança é uma realidade desafiadora para milhões de brasileiros, e a busca por soluções verdadeiramente eficazes e seguras nunca esteve tão em alta.
            </p>

            {/* Segundo parágrafo */}
            <p className="text-gray-700 mb-8 leading-relaxed">
              Nos últimos anos, a ciência deu um salto gigantesco, trazendo ao mercado novos medicamentos que prometem <span className="text-green-600 font-medium">resultados reais, com comprovação em rigorosos estudos clínicos</span> e, o mais importante, com um perfil de segurança cada vez maior. Mas, com tantas opções e informações dispersas, como saber quais são os remédios para emagrecer que realmente fazem a diferença? E qual deles é o ideal para a <span className="text-green-600 font-medium">SUA jornada de perda de peso</span>? Nossa análise detalhada vai desvendar tudo isso para você.
            </p>

            {/* Botão CTA */}
            <ScrollLink 
              targetId="ranking"
              className="inline-flex bg-[#00C853] hover:bg-[#00B848] text-white font-medium py-4 px-4 sm:px-8 rounded-lg transition-colors duration-300 items-center justify-between w-full text-sm sm:text-base whitespace-nowrap"
            >
              <span className="flex-1 text-center">Confira a análise remédios para emagrecer</span>
              <svg className="w-5 h-5 ml-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </ScrollLink>
          </div>

          {/* Imagem do lado direito (apenas desktop) */}
          <div className="hidden lg:block relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/onovocomparativo.png"
              alt="Remédios para emagrecer"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;