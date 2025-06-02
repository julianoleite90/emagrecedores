import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Script from 'next/script'

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const GA_MEASUREMENT_ID = 'G-RTEPB48RDY';

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
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
                transport_type: 'beacon',
                debug_mode: true
              });

              // Handle client-side navigation
              if (typeof window !== 'undefined') {
                const handleRouteChange = (url) => {
                  gtag('event', 'page_view', {
                    page_path: url,
                    page_title: document.title,
                    page_location: window.location.href
                  });
                  console.log('Analytics: Page view sent for', url);
                };

                window.addEventListener('popstate', () => {
                  handleRouteChange(window.location.pathname);
                });

                // Observe DOM changes for SPA navigation
                const observer = new MutationObserver((mutations) => {
                  mutations.forEach((mutation) => {
                    if (mutation.type === 'childList' && mutation.target.nodeName === 'TITLE') {
                      handleRouteChange(window.location.pathname);
                    }
                  });
                });

                observer.observe(document.querySelector('head'), {
                  childList: true,
                  subtree: true
                });
              }
            `
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <footer className="bg-gray-900 text-gray-300 py-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-white font-semibold text-lg mb-4">Aviso Legal</h3>
                  <p className="text-sm leading-relaxed">
                    Este site tem como objetivo fornecer informações sobre suplementos para emagrecimento. 
                    Não somos fabricantes ou revendedores dos produtos mencionados. As informações apresentadas 
                    não substituem orientações médicas profissionais.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-4">Importante</h3>
                  <p className="text-sm leading-relaxed">
                    Os resultados podem variar de pessoa para pessoa. Consulte seu médico antes de iniciar 
                    qualquer tratamento para emagrecimento. Todos os produtos mencionados são registrados 
                    e aprovados pelos órgãos competentes.
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
                <p>© 2025 Todos os direitos reservados. Este site não é afiliado a nenhuma marca mencionada.</p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
