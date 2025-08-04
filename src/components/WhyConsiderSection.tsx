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
            O que consideramos em nossa análise?
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed text-left max-w-4xl mx-auto">
            Nossa análise foi rigorosa: analisamos os 140 produtos mais citados no Brasil, verificando fórmulas, dosagens, fabricantes e coletando avaliações de consumidores. Desses, 94 foram descartados por terem menos de 600mg de bioativos. Dos restantes, selecionamos os 5 melhores, priorizando tempo para emagrecimento, ingredientes que combatem a compulsão e estimulam a queima de gordura.
            <br/><br/>
            <strong>Conheça agora os 5 melhores remédios para emagrecer em 2025</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyConsiderSection; 