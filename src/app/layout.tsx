import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Script from "next/script";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "5 Melhores Remédios Para Emagrecer em 2025",
  description: "Análise completa dos remédios mais eficazes para emagrecer em 2025. Descubra quais são os produtos que realmente funcionam.",
  keywords: "remédios para emagrecer, emagrecimento, perda de peso, suplementos emagrecedores",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#ffffff",
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    title: "5 Melhores Remédios Para Emagrecer em 2025",
    description: "Análise completa dos remédios mais eficazes para emagrecer em 2025. Descubra quais são os produtos que realmente funcionam.",
    siteName: "Análise de Emagrecedores",
  },
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

      </body>
    </html>
  );
}
