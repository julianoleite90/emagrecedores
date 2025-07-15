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
            Quais Emagrecedores Realmente Valem a Pena em 2025?
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed text-left max-w-4xl mx-auto">
            Você já se sentiu tentado(a) a comprar um 'remédio milagroso' depois de ver anúncios no TikTok ou depoimentos bombásticos no Facebook?
            A verdade é que muitos desses produtos são furadas — alguns até perigosos para a saúde.
            Mas calma! Existem, sim, remédios para emagrecer que funcionam, desde que você escolha os certos e use da forma correta.
            Neste guia, vamos revelar: Os 5 melhores emagrecedores de 2025, testados e aprovados por especialistas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyConsiderSection; 