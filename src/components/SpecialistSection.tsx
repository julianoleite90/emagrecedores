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
          <div className="text-gray-700 space-y-4">
            <p className="text-sm md:text-base">
              &ldquo;Como especialista em nutrição e emagrecimento, analiso constantemente a eficácia e segurança dos suplementos disponíveis no mercado. Esta análise é baseada em evidências científicas e resultados reais de pacientes.&rdquo;
            </p>
          </div>
          <div className="mt-2">
            <h3 className="text-green-600 font-bold text-base md:text-lg">Dra. Ana Costa</h3>
            <p className="text-gray-600 text-xs md:text-sm">Especialista em Emagrecimento</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialistSection; 