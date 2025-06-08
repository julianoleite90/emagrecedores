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
            Descubra como os melhores remédios para emagrecer podem transformar seu corpo de forma segura e eficaz
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed text-left max-w-4xl mx-auto">
            Antes de sair atrás do &ldquo;remédio milagroso&rdquo;, porque você viu uma publicidade no facebook ou no tiktok é essencial entender como esses produtos realmente funcionam e o que esperar deles. Nem todo remédio é igual, e saber a diferença entre as opções disponíveis pode fazer toda a diferença nos seus resultados — e na sua saúde. Neste momento, você vai descobrir os principais segredos por trás dos remédios para emagrecer, quais cuidados tomar e como escolher a opção certa para o seu corpo. Prepare-se para tomar uma decisão informada e segura! Conheça a lista com os 5 melhores para emagrecer, por ordem de eficácia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyConsiderSection; 