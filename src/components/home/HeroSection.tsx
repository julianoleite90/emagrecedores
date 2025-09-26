'use client'

import Image from 'next/image'
import { CalendarDays, Apple } from 'lucide-react'
import { ProductCard } from './ProductCard'
import { ProductCard2 } from './ProductCard2'
import { ProductCard3 } from './ProductCard3'
import { ProductCard4 } from './ProductCard4'
import { ProductCard5 } from './ProductCard5'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
})

export function HeroSection() {
  return (
    <>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Conteúdo */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-sm text-emerald-700">
                <CalendarDays className="h-4 w-4" />
                <span>Atualização: 22 de Julho de 2025</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Os 5 Melhores Remédios para Emagrecer em 2025 – Análise Completa e Imparcial
                </h1>

                <p className="text-xl text-gray-700">
                  (Análise Exclusiva)
                </p>
              </div>

              <div className="space-y-4 text-gray-700">
                <p>
                <span className="text-emerald-700 font-medium">Você já tentou de tudo para emagrecer e nada funcionou? Não se culpe. A verdade é que 95% das dietas falham — e isso não é por falta de esforço seu.</span>
                </p>
              </div>

              {/* Imagem no Mobile */}
              <div className="block lg:hidden">
                <div className="relative aspect-square bg-white rounded-3xl overflow-hidden shadow-lg">
                  <div className="absolute inset-4 bg-emerald-50/50 rounded-2xl overflow-hidden">
                    <Image
                      src="/images/img-hero-mob.png"
                      alt="Balança com pés femininos e elementos decorativos"
                      fill
                      className="object-cover"
                      priority
                    />
                    
                    {/* Overlay com informações do autor */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white p-6 rounded-t-2xl">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-emerald-100 relative">
                          <Image
                            src="/images/oavatar.png"
                            alt="Maria Silva"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Por</div>
                          <div className="text-lg font-medium text-gray-900">Maria Silva</div>
                          <div className="text-sm text-emerald-600">Especialista em emagrecimento</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-gray-700">
                <p>
                Nesta página, você não vai encontrar apenas uma lista comum de remédios. Aqui, apresentamos uma <span className="text-emerald-700 font-medium">análise profunda e detalhada dos 5 tratamentos para emagrecer mais potentes e promissores de 2025</span> — selecionados com rigor científico, baseados em pesquisas clínicas recentes, opiniões médicas especializadas e relatos reais de quem já obteve resultados transformadores.
                </p>

                <p>
                Prepare-se para descobrir qual desses medicamentos inovadores pode ser o seu aliado ideal para conquistar uma perda de peso consistente, saudável e duradoura.
                </p>

                <div className="pt-4">
                  <button 
                    onClick={(e) => {
                      e.preventDefault()
                      const rankingSection = document.getElementById('ranking')
                      if (rankingSection) {
                        const headerOffset = 64
                        const elementPosition = rankingSection.getBoundingClientRect().top
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth'
                        })
                      }
                    }}
                    className="w-full lg:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                  >
                    Conheça os 5 Melhores Remédios para Emagrecer
                  </button>
                </div>
              </div>
            </div>

            {/* Imagem no Desktop */}
            <div className="hidden lg:block relative aspect-square lg:aspect-auto lg:h-[600px] bg-white rounded-3xl overflow-hidden shadow-lg">
              <div className="absolute inset-4 bg-emerald-50/50 rounded-2xl overflow-hidden">
                <Image
                  src="/images/img-hero-desk.png"
                  alt="Balança com pés femininos e elementos decorativos"
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Overlay com informações do autor */}
                <div className="absolute bottom-0 left-0 right-0 bg-white p-6 rounded-t-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-emerald-100 relative">
                      <Image
                        src="/images/oavatar.png"
                        alt="Maria Silva"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Por</div>
                      <div className="text-lg font-medium text-gray-900">Maria Silva</div>
                      <div className="text-sm text-emerald-600">Especialista em emagrecimento</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nova seção com fundo cinza */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="col-span-1 lg:col-span-2 space-y-4 lg:space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
              Por que escolher o remédio certo para emagrecer pode transformar a sua vida?
              </h2>
              <div className="prose prose-lg text-gray-700">
                <p>
                Emagrecer vai muito além da aparência: é uma questão de <span className="text-emerald-700 font-medium">saúde, disposição e qualidade de vida</span>. Se você já tentou inúmeras dietas e exercícios e sentiu que seu corpo simplesmente não responde, saiba que essa resistência é mais comum do que você imagina — e não é culpa sua.
                </p>

                <div className="my-6"></div>

                <p>
                A boa notícia é que, graças aos avanços da ciência, hoje existem medicamentos modernos que atuam diretamente nos <span className="text-emerald-700 font-medium">mecanismos biológicos que controlam o apetite, a saciedade e o armazenamento de gordura</span>, oferecendo um suporte real para quem enfrenta dificuldades para perder peso.
                </p>
              </div>
            </div>
            <div className="col-span-1 bg-white rounded-2xl p-6 shadow-sm">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Destaques da nossa análise:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    </div>
                    <span className="text-gray-700">Pesquisas clínicas recentes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    </div>
                    <span className="text-gray-700">Avaliação de eficácia comprovada</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    </div>
                    <span className="text-gray-700">Análise de efeitos colaterais</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    </div>
                    <span className="text-gray-700">Comparação de custo-benefício</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção do Ranking */}
      <section id="ranking" className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          {/* Cabeçalho do Ranking */}
          <div className="py-12 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ranking dos 5 Remédios para Emagrecer Mais Eficazes e Seguros em 2025
            </h2>
                          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
                Selecionamos com rigor os medicamentos que apresentam os melhores resultados comprovados em estudos clínicos recentes, combinando eficácia e segurança. Esta lista é baseada não apenas em dados científicos, mas também na satisfação real dos usuários que já experimentaram esses tratamentos inovadores.
              </p>
          </div>

          {/* Container dos Produtos */}
          <div className="pb-16">
            <div className="space-y-8 md:space-y-12">
              {/* Cards dos Produtos */}
              <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <ProductCard />
              </div>
              <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <ProductCard2 />
              </div>
              <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <ProductCard3 />
              </div>
              <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <ProductCard4 />
              </div>
              <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <ProductCard5 />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Conclusão */}
      <section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
              Conclusão da Nossa Análise
            </h2>
            
            <div className="space-y-8 text-lg lg:text-xl">
              <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
                <p className="text-gray-700 leading-relaxed mb-8">
                  Após uma análise minuciosa dos principais remédios para emagrecimento disponíveis em 2025, 
                  consideramos diversos fatores cruciais como eficácia comprovada, segurança, relação custo-benefício, 
                  satisfação dos usuários e resultados científicos. Nossa avaliação levou em conta:
                </p>
                
                <div className="grid gap-6 md:grid-cols-2 mb-8">
                  <div className="bg-emerald-50 rounded-xl p-6">
                    <h3 className="text-xl lg:text-2xl font-semibold text-emerald-800 mb-4">
                      Critérios Técnicos
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        </div>
                        <span className="text-gray-700">Composição e qualidade dos ingredientes</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        </div>
                        <span className="text-gray-700">Velocidade e sustentabilidade dos resultados</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        </div>
                        <span className="text-gray-700">Presença ou ausência de efeitos colaterais</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="text-xl lg:text-2xl font-semibold text-blue-800 mb-4">
                      Critérios Práticos
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        </div>
                        <span className="text-gray-700">Feedback real de usuários e resultados comprovados</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        </div>
                        <span className="text-gray-700">Custo-benefício e acessibilidade ao consumidor</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        </div>
                        <span className="text-gray-700">Facilidade de uso e praticidade no dia a dia</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 lg:p-8">
                  <p className="text-gray-700 leading-relaxed">
                    É importante ressaltar que cada produto tem seus pontos fortes específicos, atendendo a diferentes 
                    necessidades e objetivos. Recomendamos que você escolha o remédio que melhor se alinha com suas 
                    metas pessoais de emagrecimento e condições individuais.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  Ranking Final dos Produtos
                </h3>

                {/* Lista Resumida dos Produtos */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-emerald-50 to-white rounded-xl p-4 md:p-6 border border-emerald-100">
                    <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4">
                      <div className="w-16 h-16 md:w-20 md:h-20 relative flex-shrink-0">
                        <Image
                          src="/images/phyna-400.png"
                          alt="Phynamax"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="text-center sm:text-left">
                            <div className="flex items-baseline justify-center sm:justify-start gap-3">
                              <span className="text-xl md:text-2xl font-bold text-emerald-600">1°</span>
                              <h3 className="text-xl md:text-2xl font-bold text-gray-900">Phynamax</h3>
                            </div>
                            <p className="text-base md:text-lg text-gray-600 mt-1">Líder absoluto com resultados excepcionais (6-8kg em 30 dias)</p>
                          </div>
                          <a
                            href="https://www.phynamaxoficial.com/phynamax-2/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-[#40B37C] hover:opacity-90 rounded-lg transition-colors"
                          >
                            Acessar Site Oficial
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-4 md:p-6 border border-gray-200">
                    <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4">
                      <div className="w-16 h-16 md:w-20 md:h-20 relative flex-shrink-0">
                        <Image
                          src="/images/definamax-400.webp"
                          alt="Definamax"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="text-center sm:text-left">
                            <div className="flex items-baseline justify-center sm:justify-start gap-3">
                              <span className="text-xl md:text-2xl font-bold text-gray-600">2°</span>
                              <h3 className="text-xl md:text-2xl font-bold text-gray-900">Definamax</h3>
                            </div>
                            <p className="text-base md:text-lg text-gray-600 mt-1">Melhor custo-benefício e resultados rápidos (5-7kg em 30 dias)</p>
                          </div>
                          <a
                            href="https://www.definamaxoficial.com/produto"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-[#40B37C] hover:opacity-90 rounded-lg transition-colors"
                          >
                            Acessar Site Oficial
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-4 md:p-6 border border-gray-200">
                    <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4">
                      <div className="w-16 h-16 md:w-20 md:h-20 relative flex-shrink-0">
                        <Image
                          src="/images/ozenvitta-400.webp"
                          alt="Ozenvitta"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="text-center sm:text-left">
                            <div className="flex items-baseline justify-center sm:justify-start gap-3">
                              <span className="text-xl md:text-2xl font-bold text-gray-600">3°</span>
                              <h3 className="text-xl md:text-2xl font-bold text-gray-900">Ozenvitta</h3>
                            </div>
                            <p className="text-base md:text-lg text-gray-600 mt-1">Excelente para controle do apetite e saciedade prolongada</p>
                          </div>
                          <a
                            href="https://mon.net.br/3i6gsj"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-[#40B37C] hover:opacity-90 rounded-lg transition-colors"
                          >
                            Acessar Site Oficial
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-4 md:p-6 border border-gray-200">
                    <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4">
                      <div className="w-16 h-16 md:w-20 md:h-20 relative flex-shrink-0">
                        <Image
                          src="/images/sb2-400.webp"
                          alt="Sb2 Turbo"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="text-center sm:text-left">
                            <div className="flex items-baseline justify-center sm:justify-start gap-3">
                              <span className="text-xl md:text-2xl font-bold text-gray-600">4°</span>
                              <h3 className="text-xl md:text-2xl font-bold text-gray-900">Sb2 Turbo</h3>
                            </div>
                            <p className="text-base md:text-lg text-gray-600 mt-1">Destaque em energia e queima de gordura localizada</p>
                          </div>
                          <a
                            href="https://mon.net.br/3eefqg"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-[#40B37C] hover:opacity-90 rounded-lg transition-colors"
                          >
                            Acessar Site Oficial
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-4 md:p-6 border border-gray-200">
                    <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4">
                      <div className="w-16 h-16 md:w-20 md:h-20 relative flex-shrink-0">
                        <Image
                          src="/images/newdetox-400.webp"
                          alt="New Detox"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="text-center sm:text-left">
                            <div className="flex items-baseline justify-center sm:justify-start gap-3">
                              <span className="text-xl md:text-2xl font-bold text-gray-600">5°</span>
                              <h3 className="text-xl md:text-2xl font-bold text-gray-900">New Detox</h3>
                            </div>
                            <p className="text-base md:text-lg text-gray-600 mt-1">Especialista em desintoxicação e redução de inchaço</p>
                          </div>
                          <a
                            href="https://mon.net.br/3eefce"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-[#40B37C] hover:opacity-90 rounded-lg transition-colors"
                          >
                            Acessar Site Oficial
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
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

            <div className="flex justify-center space-x-6">
              <a 
                href="/politica-privacidade" 
                className="text-sm text-gray-500 hover:text-emerald-600 transition-colors"
              >
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
} 