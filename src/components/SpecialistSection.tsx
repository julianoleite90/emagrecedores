import Image from 'next/image';

const SpecialistSection = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-4xl mx-auto mb-8">
      <div className="flex flex-row items-start gap-4">
        <div className="relative flex-shrink-0">
          <div className="w-32 h-32 md:w-72 md:h-72 rounded-full border-4 border-green-500 overflow-hidden">
            <Image
              src="/medica-150.webp"
              alt="Dra. Ana Costa - Especialista em Emagrecimento"
              width={288}
              height={288}
              priority
              quality={100}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="mb-3">
            <h3 className="text-green-600 font-bold text-base md:text-lg">Análise Liderada por Especialistas</h3>
          </div>
          <div className="text-gray-700 space-y-4">
            <p className="text-sm md:text-base">
              Dra. Ana Costa, especialista com 15 anos de experiência, liderou nossa análise rigorosa de eficácia, segurança e satisfação dos usuários, garantindo recomendações confiáveis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialistSection; 