import Image from 'next/image';

const SpecialistSection = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-4xl mx-auto mb-8">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="relative flex-shrink-0 w-full md:w-auto flex justify-center">
          <div className="w-44 h-44 md:w-72 md:h-72 rounded-full border-4 border-green-500 overflow-hidden">
            <Image
              src="/medica-150.webp"
              alt="Dra. Ana Costa - Especialista em Emagrecimento"
              width={288}
              height={288}
              priority
              quality={100}
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
        <div className="flex-1">
          <p className="text-gray-700 text-base mb-4">
            "Como especialista em saúde e bem-estar, analisei as opções mais modernas e eficazes,
            levando em conta pesquisas recentes, recomendações médicas e relatos de pacientes. O
            resultado? Um ranking atualizado com os 5 melhores remédios para emagrecer em 2025
            — e uma fórmula de fibras que está revolucionando o tratamento da obesidade."
          </p>
          <div>
            <h3 className="text-green-600 font-bold text-lg">Dra. Ana Costa</h3>
            <p className="text-gray-600 text-sm">Especialista em Emagrecimento</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialistSection; 