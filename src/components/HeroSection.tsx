import Image from 'next/image';
import ScrollLink from './ScrollLink';

const HeroSection = () => {
  const formatDate = () => {
    return "Tempo de leitura: 3 minutos";
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
                <div className="text-gray-900">Perca Peso com Segurança: Os 5 Melhores <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-green-500">Remédios Para Emagrecer de 2025</span></div>
              </h1>
              <h2 className="text-lg lg:text-xl text-gray-600 mb-4">Frustrado com dietas que não funcionam? Descubra os emagrecedores naturais que já ajudaram milhares a perder até 8 cm de cintura em até 30 dias!</h2>
            </div>

            {/* Subtítulo com destaque */}
            <p className="text-gray-700 leading-relaxed">
            <strong>Emagrecer Não Precisa Ser um Desafio</strong> - Cansado de tentar perder peso sem sucesso? Você não está sozinho. Nossa equipe, liderada pela Dra. Ana Costa, analisou mais de 300 estudos e depoimentos reais para trazer o ranking dos melhores emagrecedores de 2025. Encontre o emagrecedor ideal para perder peso de forma segura e eficaz.
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