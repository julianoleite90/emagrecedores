'use client';
import { useState, lazy, Suspense, useEffect } from 'react';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import ExpertSection from '@/components/ExpertSection';
import WhyConsiderSection from '@/components/WhyConsiderSection';

// Lazy loading para componentes não críticos
const RankingSection = lazy(() => import('@/components/RankingSection'));

// Hook para otimização de performance e Web Vitals
const usePerformanceOptimization = () => {
  useEffect(() => {
    // Preload de recursos críticos
    const preloadResources = () => {
      const criticalImages = ['/hmob.png', '/hdesk.png'];
      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        link.fetchPriority = 'high';
        document.head.appendChild(link);
      });
    };

    // Otimizações para Web Vitals
    const optimizeWebVitals = () => {
      // Prevenir layout shift em imagens
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.style.aspectRatio && img.naturalWidth && img.naturalHeight) {
          img.style.aspectRatio = `${img.naturalWidth} / ${img.naturalHeight}`;
        }
      });

      // Otimizar event listeners para FID/INP
      const passiveEvents = ['scroll', 'touchstart', 'touchmove', 'wheel'];
      passiveEvents.forEach(eventType => {
        document.addEventListener(eventType, () => {}, { passive: true });
      });

      // Defer scripts não críticos
      const scripts = document.querySelectorAll('script[src]');
      scripts.forEach(script => {
        if (!script.hasAttribute('data-critical')) {
          (script as HTMLScriptElement).defer = true;
        }
      });
    };

    // Executar otimizações
    requestIdleCallback(() => {
      preloadResources();
      optimizeWebVitals();
    }, { timeout: 2000 });
  }, []);
};

export default function Home() {
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  
  // Aplicar otimizações de performance
  usePerformanceOptimization();

  return (
    <>
      <HeroSection />
      <ExpertSection />
      <WhyConsiderSection onQuizComplete={setIsQuizCompleted} />
      
      {/* Conteúdo do ranking - só exibe quando quiz completado */}
      {isQuizCompleted && (
        <div className="animate-fadeIn layout-shift">
          <Suspense fallback={
            <div className="flex justify-center items-center py-12">
              <div className="animate-pulse bg-gray-200 rounded-lg h-8 w-64"></div>
            </div>
          }>
            <RankingSection />
          </Suspense>
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
                  src="/logo.png"
                  alt="Logo"
                  width={240}
                  height={86}
                  quality={85}
                  className="w-60"
                  loading="lazy"
                  sizes="240px"
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
