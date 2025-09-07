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
        <link rel="preload" href="/hmob.png" as="image" type="image/png" media="(max-width: 1024px)" />
        <link rel="preload" href="/hdesk.png" as="image" type="image/png" media="(min-width: 1024px)" />
        
        {/* Preload de fontes críticas */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch para recursos externos */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
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
