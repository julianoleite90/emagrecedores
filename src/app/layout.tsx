import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Script from "next/script";
import PerformanceOptimizer from "@/components/PerformanceOptimizer";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "Os 5 Melhores Remédios para Emagrecer Aprovados pela Anvisa em 2025",
  description: "Análise completa dos remédios mais eficazes para emagrecer em 2025. Descubra quais são os produtos que realmente funcionam.",
  keywords: "remédios para emagrecer, emagrecimento, perda de peso, suplementos emagrecedores",
  robots: "index, follow",
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    title: "Os 5 Melhores Remédios para Emagrecer Aprovados pela Anvisa em 2025",
    description: "Análise completa dos remédios mais eficazes para emagrecer em 2025. Descubra quais são os produtos que realmente funcionam.",
    siteName: "Análise de Emagrecedores",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        
        {/* Preload de recursos críticos para melhorar LCP */}
        <link rel="preload" href="/hmob.png" as="image" type="image/png" media="(max-width: 1024px)" fetchPriority="high" />
        <link rel="preload" href="/hdesk.png" as="image" type="image/png" media="(min-width: 1024px)" fetchPriority="high" />
        
        {/* Preload de recursos críticos do Next.js */}
        <link rel="preload" href="/_next/static/css/app/layout.css" as="style" />
        <link rel="preload" href="/_next/static/chunks/webpack.js" as="script" />
        
        {/* Preload de fontes críticas */}
        <link rel="preload" href="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Resource Hints mais agressivos */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Prefetch de recursos críticos */}
        <link rel="prefetch" href="/_next/static/chunks/pages/_app.js" />
        <link rel="prefetch" href="/_next/static/chunks/pages/index.js" />
        
        {/* Critical CSS inline para LCP */}
        <style dangerouslySetInnerHTML={{
          __html: `
            .hero-section { 
              contain: layout style paint; 
              will-change: transform; 
              transform: translateZ(0);
              backface-visibility: hidden;
            }
            .hero-image { 
              contain: layout style paint; 
              will-change: transform; 
              transform: translateZ(0);
              backface-visibility: hidden;
            }
            .hero-title { 
              font-size: 2.75rem; 
              font-weight: 700; 
              line-height: 1.1; 
              font-display: swap;
              text-rendering: optimizeSpeed;
            }
            .hero-subtitle { 
              font-size: 1.25rem; 
              color: #6b7280; 
              font-display: swap;
            }
            .hero-text { 
              color: #374151; 
              line-height: 1.6; 
              font-display: swap;
              text-rendering: optimizeSpeed;
            }
            .hero-cta { 
              background: #00A040; 
              color: white; 
              padding: 1rem 2rem; 
              border-radius: 0.5rem; 
              transform: translateZ(0);
            }
            @media (max-width: 1024px) {
              .hero-title { font-size: 2rem; }
              .hero-image { height: 450px; }
            }
            @media (min-width: 1024px) {
              .hero-image { height: 400px; }
            }
            /* Otimizações de renderização */
            * { box-sizing: border-box; }
            html { scroll-behavior: smooth; }
            body { 
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              text-rendering: optimizeLegibility;
            }
          `
        }} />
        
        {/* Preload de fontes críticas */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" />
        
        {/* Preload de fontes críticas */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch para recursos externos */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Prefetch de recursos críticos */}
        <link rel="prefetch" href="/_next/static/css/app/layout.css" />
        <link rel="prefetch" href="/_next/static/chunks/webpack.js" />
        
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GEJ71JEFEM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-GEJ71JEFEM');

            // Definindo funções de rastreamento globalmente
            window.trackSectionView = function(sectionId) {
              console.log('Tracking section view:', sectionId);
              gtag('event', 'section_view', {
                section_id: sectionId,
                section_name: sectionId.replace(/-/g, ' ').toLowerCase()
              });
            };

            window.trackCTAClick = function(productId, ctaType) {
              console.log('Tracking CTA click:', productId, ctaType);
              gtag('event', 'click_cta', {
                product_id: productId,
                cta_type: ctaType,
                content_type: 'cta_button',
                item_id: productId + '-' + ctaType
              });
            };

            // Verificar se as funções foram definidas corretamente
            console.log('GA4 tracking functions initialized:', {
              trackSectionView: typeof window.trackSectionView === 'function',
              trackCTAClick: typeof window.trackCTAClick === 'function'
            });
          `}
        </Script>
        
        {/* Service Worker para cache agressivo */}
        <Script id="service-worker" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                  .then((registration) => {
                    console.log('SW registered: ', registration);
                  })
                  .catch((registrationError) => {
                    console.log('SW registration failed: ', registrationError);
                  });
              });
            }
          `}
        </Script>
        
        {/* Web Vitals monitoring */}
        <Script id="web-vitals" strategy="afterInteractive">
          {`
            // Web Vitals monitoring inline
            function sendToAnalytics(metric) {
              if (window.gtag) {
                window.gtag('event', metric.name, {
                  event_category: 'Web Vitals',
                  event_label: metric.id,
                  value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
                  non_interaction: true,
                });
              }
              console.log('Web Vital:', metric.name, metric.value);
            }
            
            // Importar e inicializar Web Vitals
            import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
              onCLS(sendToAnalytics);
              onINP(sendToAnalytics);
              onFCP(sendToAnalytics);
              onLCP(sendToAnalytics);
              onTTFB(sendToAnalytics);
            });
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <PerformanceOptimizer />
      </body>
    </html>
  );
}
