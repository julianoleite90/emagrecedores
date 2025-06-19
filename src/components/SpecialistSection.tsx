import Image from 'next/image';

const SpecialistSection = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 max-w-4xl mx-auto mb-8">
      <div className="grid grid-cols-3 gap-4">
        {/* COLUNA DA ESQUERDA - APENAS IMAGEM */}
        <div className="col-span-1">
          <div className="w-full aspect-square rounded-full border-4 border-green-500 overflow-hidden">
            <Image
              src="/medica-150.webp"
              alt="Especialista Ana Costa - Especialista em Emagrecimento"
              width={288}
              height={288}
              priority
              quality={100}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>
        </div>
        
        {/* COLUNA DA DIREITA - APENAS CONTEÚDO */}
        <div className="col-span-2">
          <div className="mb-3">
            <h3 className="text-green-600 font-bold text-sm md:text-lg">Análise Liderada por Especialistas</h3>
          </div>
          <div className="text-gray-700">
            <p className="text-xs md:text-base leading-relaxed">
              Especialista Ana Costa, com 15 anos de experiência, liderou nossa análise rigorosa de eficácia, segurança e satisfação dos usuários, garantindo recomendações confiáveis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialistSection; 