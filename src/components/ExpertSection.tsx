import Image from 'next/image';

const ExpertSection = () => {
  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="bg-white rounded-2xl shadow-xl p-4 md:p-12">
          <div className="grid grid-cols-3 gap-4 md:flex md:flex-row md:items-center md:gap-12">
            {/* COLUNA DA ESQUERDA - APENAS IMAGEM */}
            <div className="col-span-1 md:w-48 md:h-48 relative shrink-0">
              <div className="w-full aspect-square rounded-full border-4 border-green-500 shadow-lg overflow-hidden">
                <Image
                  src="/medica-150.webp"
                  alt="Especialista Ana Costa"
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>

            {/* COLUNA DA DIREITA - APENAS CONTEÚDO */}
            <div className="col-span-2 md:flex-1 text-left">
              {/* Título */}
              <div className="mb-3 md:mb-4">
                <h3 className="text-sm md:text-xl font-semibold text-green-600 mb-2">
                  Análise Liderada por Especialistas
                </h3>
              </div>

              {/* Descrição */}
              <div className="text-gray-700">
                <p className="text-xs md:text-base leading-relaxed">
                  Especialista Ana Costa, com 15 anos de experiência, liderou nossa análise rigorosa de eficácia, segurança e satisfação dos usuários, garantindo recomendações confiáveis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertSection; 