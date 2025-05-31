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
                <div className="text-gray-900">Descubra os 5 Melhores Remédios para <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-green-500">Emagrecer</span></div>
              </h1>
              <h2 className="text-xl lg:text-2xl text-gray-600 mb-4">Com resultados comprovados</h2>
            </div>

            {/* Subtítulo com destaque */}
            <p className="text-gray-700 leading-relaxed">
              Você pesquisou por um remédio para emagrecer porque busca uma solução segura, eficaz e que realmente funcione para alcançar seus objetivos? Então você está no <span className="font-medium">lugar certo</span>! Nesta análise, vamos revelar o <span className="text-slate-700 font-medium">ranking dos 5 melhores remédios</span> disponíveis no mercado, todos com <span className="text-slate-700 font-medium">resultados comprovados por estudos clínicos</span>.
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
              Agora é o momento de transformar sua jornada! Emagrecer envolve diversos fatores, e muitas vezes dieta e exercícios sozinhos não são suficientes para superar as barreiras do corpo. Felizmente, a ciência e a natureza trazem aliados poderosos: <span className="text-slate-700 font-medium">remédios que realmente fazem a diferença</span>.
            </p>

            {/* Segundo parágrafo */}
            <p className="text-gray-700 mb-8 leading-relaxed">
            Nossa equipe, liderada pela Dra. Ana Costa, especialista em emagrecimento, analisou centenas de estudos e depoimentos reais para trazer uma seleção confiável. Mais abaixo, você vai conhecer o ranking com os 5 melhores remédios para emagrecer de 2025 e entender qual deles é o mais indicado para a sua jornada.
            </p>

            {/* Botão CTA */}
            <ScrollLink 
              targetId="ranking"
              className="inline-flex bg-[#00A040] hover:bg-[#008F35] text-white font-medium py-4 px-4 sm:px-8 rounded-lg transition-colors duration-300 items-center justify-between w-full text-sm sm:text-base whitespace-nowrap"
            >
              <span className="flex-1 text-center">Clique e confira o ranking agora!</span>
              <span>↓</span>
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