'use client';

import { useEffect } from 'react';
import { initPerformanceOptimizations, optimizeAnimations } from '@/utils/performance';

/**
 * Componente para otimizações de performance
 * Executa otimizações no lado do cliente após o carregamento
 */
const PerformanceOptimizer = () => {
  useEffect(() => {
    // Inicializar otimizações de performance
    initPerformanceOptimizations();
    optimizeAnimations();

    // Otimizações adicionais para melhorar INP
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        // Re-inicializar otimizações quando a página volta a ser visível
        initPerformanceOptimizations();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Este componente não renderiza nada visível
  return null;
};

export default PerformanceOptimizer;
