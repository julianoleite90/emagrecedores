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
              <p className="text-gray-600 text-sm italic">
                {formatDate()}
              </p>
            </div>

            {/* Título principal */}
            <div className="text-left">
              <h1 className="text-3xl lg:text-4xl xl:text-[2.75rem] font-bold text-gray-900 leading-tight mb-2">
                <div className="text-gray-900">5 Remédios para Emagrecer que Realmente Funcionam em 2025</div>
              </h1>
              <h2 className="text-xl lg:text-2xl text-gray-600 mb-4 italic">Aprovados pela anvisa</h2>
            </div>

            {/* Imagem em mobile */}
            <div className="block lg:hidden w-full mt-[2px] mb-6">
              <div className="relative h-[450px] w-full">
                <img
                  src="/hmob.png"
                  alt="Remédios para emagrecer"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>
              <p className="text-xs text-gray-500 italic mt-2 text-center">
                Editorial: Análise imparcial dos melhores suplementos para emagrecimento de 2025
              </p>
            </div>

            {/* Subtítulo com destaque */}
            <p className="text-gray-700 leading-relaxed">
            Perder peso pode parecer uma batalha impossível: dietas exaustivas, academia e remédios de farmácias ou online para eliminar gordura teimosa. Mas estudos revelam que 80% das pessoas falham em manter a perda a longo prazo, apesar dos esforços. E isso não é culpa sua – o erro está nos produtos que prometem milagres sem entregar.
            </p>

            <p className="text-gray-700 leading-relaxed">
            A verdade: a maioria dos suplementos carece de provas científicas, com revisões mostrando que nenhum supera placebos em testes rigorosos. Muitos têm ingredientes insuficientes ou mal regulados, causando decepções e riscos à saúde.
            </p>

            <p className="text-gray-700 leading-relaxed">
            Por isso, investigamos as fórmulas mais eficazes de 2025. Liderada pela Especialista Ana Albuquerque, analisamos dezenas de opções e selecionamos os 5 melhores com base em: tempo de resultados, ingredientes, preço, opiniões de usuários e segurança por estudos independentes.
            </p>

            {/* Botão CTA */}
            <ScrollLink 
              targetId="quiz"
              className="inline-flex bg-[#00A040] hover:bg-[#008F35] text-white font-medium py-4 px-4 sm:px-8 rounded-lg transition-colors duration-300 items-center justify-between w-full text-sm sm:text-base"
              onClick={handleCTAClick}
            >
                              <span className="flex-1 text-center leading-tight">DESCUBRA OS 5 MELHORES DE 2025</span>
              <span className="ml-2">↓</span>
            </ScrollLink>


          </div>

          {/* Imagem do lado direito (apenas desktop) */}
          <div className="hidden lg:block">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/hdesk.png"
                alt="Remédios para emagrecer"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <p className="text-xs text-gray-500 italic mt-3 text-center">
              Editorial: Análise imparcial dos melhores suplementos para emagrecimento de 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;