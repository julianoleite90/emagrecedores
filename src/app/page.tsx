'use client';
import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import ExpertSection from '@/components/ExpertSection';
import WhyConsiderSection from '@/components/WhyConsiderSection';
import RankingSection from '@/components/RankingSection';

export default function Home() {
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  return (
    <>
      <HeroSection />
      <ExpertSection />
      <WhyConsiderSection onQuizComplete={setIsQuizCompleted} />
      
      {/* Conteúdo do ranking - só exibe quando quiz completado */}
      {isQuizCompleted && (
        <div className="animate-fadeIn">
          <RankingSection />
        </div>
      )}

      {/* Rodapé - sempre visível */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Encontre o Emagrecedor Ideal Para Você</h3>
            <p className="text-gray-300 text-sm">
              Nossa análise é baseada em mais de 300 estudos científicos e depoimentos reais de usuários.
            </p>
          </div>
          
          <div className="border-t border-gray-700 pt-4">
            <p className="text-gray-400 text-sm">
              © 2025 Análise Emagrecedores. Todas as informações são baseadas em pesquisas científicas.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Consulte sempre um profissional de saúde antes de iniciar qualquer tratamento.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
