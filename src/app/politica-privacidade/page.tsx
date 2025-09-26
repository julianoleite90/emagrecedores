import { Metadata } from 'next'
import Link from 'next/link'
import { Apple } from 'lucide-react'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Política de Privacidade - Emagrecedores ADV',
  description: 'Política de privacidade e proteção de dados do site Emagrecedores ADV',
  robots: 'index, follow',
}

export default function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative flex items-center justify-center h-16 lg:h-24">
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <Link className={`text-xl lg:text-2xl font-light tracking-wide text-emerald-600 flex items-center gap-2 ${playfair.className}`} href="/">
                <span>SAÚDE</span>
                <Apple className="h-5 w-5 lg:h-6 lg:w-6 text-red-500" strokeWidth={1.5} />
                <span>EVERYDAY</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Política de Privacidade</h1>
          
          <p className="text-gray-600 mb-6">
            <strong>Última atualização:</strong> 22 de julho de 2025
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Informações Gerais</h2>
              <p className="text-gray-700 leading-relaxed">
                Esta Política de Privacidade descreve como o site Emagrecedores ADV (&quot;nós&quot;, &quot;nosso&quot; ou &quot;site&quot;) 
                coleta, usa e protege suas informações pessoais quando você visita nosso site. 
                Respeitamos sua privacidade e estamos comprometidos em proteger seus dados pessoais.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Informações que Coletamos</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-gray-800 mb-2">2.1 Informações Fornecidas Voluntariamente</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Nome e endereço de e-mail quando você se inscreve em nossa newsletter</li>
                  <li>Comentários e feedback que você nos envia</li>
                  <li>Informações de contato quando você nos contata diretamente</li>
                </ul>

                <h3 className="text-xl font-medium text-gray-800 mb-2">2.2 Informações Coletadas Automaticamente</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Endereço IP e localização geográfica aproximada</li>
                  <li>Tipo de navegador e sistema operacional</li>
                  <li>Páginas visitadas e tempo gasto no site</li>
                  <li>Data e hora das visitas</li>
                  <li>Referência de sites que o direcionaram ao nosso site</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Como Usamos suas Informações</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Utilizamos as informações coletadas para:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Fornecer e melhorar nossos serviços</li>
                <li>Enviar newsletters e comunicações relacionadas ao conteúdo</li>
                <li>Responder às suas perguntas e solicitações</li>
                <li>Analisar o uso do site para melhorar a experiência do usuário</li>
                <li>Detectar e prevenir fraudes e atividades maliciosas</li>
                <li>Cumprir obrigações legais</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Cookies e Tecnologias Similares</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Utilizamos cookies e tecnologias similares para:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Lembrar suas preferências e configurações</li>
                <li>Analisar o tráfego e uso do site</li>
                <li>Personalizar conteúdo e anúncios</li>
                <li>Melhorar a funcionalidade do site</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Você pode controlar o uso de cookies através das configurações do seu navegador.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Compartilhamento de Informações</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Com seu consentimento explícito</li>
                <li>Para cumprir obrigações legais</li>
                <li>Com prestadores de serviços que nos auxiliam na operação do site (sob acordos de confidencialidade)</li>
                <li>Em caso de fusão, aquisição ou venda de ativos (com notificação prévia)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Segurança dos Dados</h2>
              <p className="text-gray-700 leading-relaxed">
                Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger 
                suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. 
                No entanto, nenhum método de transmissão pela internet é 100% seguro.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Seus Direitos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Você tem o direito de:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Acessar suas informações pessoais</li>
                <li>Corrigir informações incorretas ou incompletas</li>
                <li>Solicitar a exclusão de suas informações</li>
                <li>Retirar seu consentimento a qualquer momento</li>
                <li>Portabilidade dos dados</li>
                <li>Opor-se ao processamento de suas informações</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Retenção de Dados</h2>
              <p className="text-gray-700 leading-relaxed">
                Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir os 
                propósitos descritos nesta política, a menos que um período de retenção mais longo 
                seja exigido ou permitido por lei.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Menores de Idade</h2>
              <p className="text-gray-700 leading-relaxed">
                Nosso site não é direcionado a menores de 18 anos. Não coletamos intencionalmente 
                informações pessoais de menores de idade. Se tomarmos conhecimento de que coletamos 
                informações de um menor, tomaremos medidas para excluir essas informações.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Alterações nesta Política</h2>
              <p className="text-gray-700 leading-relaxed">
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre 
                mudanças significativas publicando a nova política nesta página e atualizando a 
                data de &quot;última atualização&quot;.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contato</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos 
                suas informações pessoais, entre em contato conosco:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  <strong>E-mail:</strong> privacidade@melhores-emagrecedores.com<br />
                  <strong>Site:</strong> https://melhores-emagrecedores.com
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-10">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <span className={`text-xl lg:text-2xl font-light tracking-wide text-emerald-600 flex items-center gap-2 ${playfair.className}`}>
                <span>SAÚDE</span>
                <Apple className="h-5 w-5 lg:h-6 lg:w-6 text-red-500" strokeWidth={1.5} />
                <span>EVERYDAY</span>
              </span>
            </div>
            <p className="text-sm text-gray-600">
              As informações contidas neste site são apenas para fins informativos. Consulte sempre um profissional de saúde antes de iniciar qualquer tratamento.
            </p>
            <div className="text-xs text-gray-500 space-y-1">
              <p>© 2025 Todos os direitos reservados</p>
              <p>Este site não é afiliado a nenhuma marca específica. Os resultados podem variar de pessoa para pessoa.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
