'use client';
import { useState } from 'react';
import Image from 'next/image';
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
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Logo centralizado */}
          <div className="mb-8">
            <div className="flex justify-center">
              <div className="bg-white rounded-lg p-4 shadow-lg">
                <Image
                  src="/2logo.png"
                  alt="Logo"
                  width={240}
                  height={86}
                  quality={100}
                  className="w-60"
                />
              </div>
            </div>
          </div>
          
          {/* Conteúdo do footer */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Análise Especializada de Emagrecedores</h3>
            <p className="text-gray-300 text-sm max-w-2xl mx-auto leading-relaxed">
              Informações baseadas em análises técnicas e avaliações de especialistas para ajudar você a fazer a melhor escolha.
            </p>
          </div>
          
          {/* Links úteis */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-sm">
            <div>
              <h4 className="font-semibold mb-2 text-gray-200">Produtos Analisados</h4>
              <p className="text-gray-400">5 melhores opções avaliadas</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-gray-200">Metodologia</h4>
              <p className="text-gray-400">Análise técnica rigorosa</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-gray-200">Atualização</h4>
              <p className="text-gray-400">Ranking 2025 atualizado</p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 text-sm">
              © 2025 Análise de Emagrecedores. Conteúdo informativo e educacional.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Este site fornece informações para fins educacionais. Consulte um profissional de saúde antes de iniciar qualquer tratamento.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
