'use client';

interface WhyConsiderSectionProps {
  onQuizComplete?: (completed: boolean) => void;
}

const WhyConsiderSection = ({ onQuizComplete }: WhyConsiderSectionProps) => {
  // Automatically mark as complete since there's no quiz anymore
  if (onQuizComplete) {
    onQuizComplete(true);
  }

  return (
    <section id="quiz" className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            O que consideramos em nossa avaliação?
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed text-left max-w-4xl mx-auto">
            Após 8 meses de uma análise minuciosa, avaliamos 140 produtos considerando fórmula, eficácia, tempo de resultados, depoimentos reais, reputação do fabricante, preço e estudos científicos. Apenas 12 chegaram aos testes finais, e somente 5 se destacaram como os melhores emagrecedores naturais de 2025 – opções seguras, eficazes e sem efeitos colaterais.
            <br/><br/>
            <strong>Conheça agora os 5 melhores emagrecedores naturais de 2025 e descubra qual é o ideal para transformar sua jornada de perda de peso!</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyConsiderSection; 