import { Apple } from 'lucide-react'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
})

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <div className="mb-4">
          <div className={`text-2xl font-light tracking-wide text-emerald-600 flex items-center justify-center gap-2 ${playfair.className}`}>
            <span>SAÚDE</span>
            <Apple className="h-6 w-6 text-red-500" strokeWidth={1.5} />
            <span>EVERYDAY</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-2">
          As informações contidas neste site são apenas para fins informativos. Consulte sempre um profissional de saúde antes de iniciar qualquer tratamento.
        </p>

        <p className="text-gray-600 text-sm mb-2">
          © 2025 Todos os direitos reservados
        </p>

        <p className="text-gray-600 text-sm mb-4">
          Este site não é afiliado a nenhuma marca específica. Os resultados podem variar de pessoa para pessoa.
        </p>

        <div className="flex justify-center space-x-6">
          <a 
            href="/politica-privacidade" 
            className="text-sm text-gray-500 hover:text-emerald-600 transition-colors"
          >
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  )
} 