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
          <div className="space-y-6">
            {/* Data de atualização */}
            <div className="pt-4 md:pt-6">
              <p className="text-gray-600 text-sm">
                Data: {formatDate()}
              </p>
            </div>

            {/* Título principal */}
            <div className="text-left">
              <h1 className="text-3xl lg:text-4xl xl:text-[2.75rem] font-bold text-gray-900 leading-tight mb-4">
                <div><span className="text-slate-700">5 Melhores Remédios</span></div>
                <div>Para <span className="text-slate-700 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-green-500">Emagrecer</span></div>
              </h1>
            </div>

            {/* Subtítulo com destaque */}
            <div className="text-lg text-gray-600 mb-2">
              <span className="text-green-600 font-semibold">Análise Especializada</span>{' '}
              dos produtos mais eficazes e seguros para perda de peso.{' '}
              <span className="text-green-600 font-semibold">melhores fórmulas</span>{' '}
              disponíveis no Brasil.
            </div>

            {/* Imagem em mobile */}
            <div className="block lg:hidden relative h-[350px] w-full px-4 mb-2">
              <Image
                src="/novocomparativo.png"
                alt="Remédios para emagrecer"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Primeiro parágrafo */}
            <p className="text-gray-700 mb-8 leading-relaxed">
              Você já tentou de tudo para emagrecer — <span className="text-slate-700 font-medium">dietas, exercícios, receitas milagrosas</span> — e sente que nada realmente funciona? Se sim, você não está sozinho. A luta contra a balança é uma realidade para <span className="text-slate-700 font-medium">milhões de brasileiros</span>, e a busca por soluções eficazes e seguras nunca esteve tão em alta.
            </p>

            {/* Segundo parágrafo */}
            <p className="text-gray-700 mb-8 leading-relaxed">
              Nos últimos anos, a <span className="text-slate-700 font-medium">ciência avançou muito</span> e trouxe ao mercado novos medicamentos que prometem <span className="text-slate-700 font-medium">resultados reais, comprovados em estudos clínicos</span>, e com cada vez mais segurança. Mas, afinal, <span className="text-slate-700 font-medium">quais são os melhores remédios para emagrecer disponíveis atualmente?</span> E qual deles realmente faz a diferença?
            </p>

            {/* Botão CTA */}
            <ScrollLink 
              targetId="ranking"
              className="inline-flex bg-[#4CAF50] hover:bg-[#45a049] text-white font-medium py-4 px-4 sm:px-8 rounded-lg transition-colors duration-300 items-center justify-between w-full text-sm sm:text-base whitespace-nowrap"
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
              src="/novocomparativo.png"
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