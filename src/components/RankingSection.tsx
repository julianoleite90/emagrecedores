import Image from 'next/image';
import Script from 'next/script';
import UtmLink from './UtmLink';

const RankingSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white" id="ranking">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="py-12 text-center">
            <div className="inline-block px-6 py-2 bg-green-50 rounded-full text-green-600 font-medium text-sm mb-4">
              Ranking 2025
            </div>
            <h2 className="text-4xl font-bold text-gray-900 max-w-3xl mx-auto leading-tight mb-4">
              Os 5 Remédios Mais Eficazes para Emagrecer em 2025
            </h2>
            <p className="text-gray-800 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed tracking-normal">
              Análise completa das fórmulas mais eficientes para perda de peso, baseada em resultados reais e satisfação dos usuários
            </p>
          </div>

          {/* Primeiro Produto */}
          <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 mb-12 relative">
            <div className="absolute -top-5 left-8 bg-green-600 text-white px-6 py-2 rounded">
              1° Lugar
            </div>
            
            <div className="flex justify-between items-start mb-6 pt-2 flex-col sm:flex-row gap-4 sm:gap-0">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-lg sm:text-xl text-gray-900 font-bold">Definamax</h4>
                  <span className="bg-green-50 text-green-700 px-2 py-0.5 rounded-full text-sm">Recomendado</span>
                </div>
                <p className="text-gray-900 font-medium text-sm sm:text-base tracking-wide">As Fibras que absorvem gordura</p>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-2 mb-1">
                  <div className="text-lg sm:text-xl font-bold text-gray-900">4.9</div>
                  <div className="text-yellow-400 text-lg">★★★★★</div>
                </div>
                <div className="text-xs text-gray-500">Avaliação dos usuários</div>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-4"></div>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-6" id="definamax">
              <div className="w-full sm:w-64 shrink-0">
                <Image
                  src="/definamax-400.webp"
                  alt="Definamax: Tecnologia avançada para redução de medidas"
                  width={256}
                  height={384}
                  className="rounded-lg mx-auto sm:mx-0"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, 256px"
                  quality={85}
                />
                <p className="text-xs text-gray-600 text-center mt-2">
                  Definamax: Tecnologia avançada para redução de medidas
                </p>
              </div>

              <div className="flex-1">
                <h5 className="text-2xl font-bold text-gray-900 mb-4">
                  Por que o Definamax é considerado o mais eficaz para o emagrecimento?
                </h5>

                <p className="text-gray-700 mb-6">
                  Em nossa análise de mais de 2.500 casos, o Definamax apresentou resultados surpreendentes: 93% dos usuários relataram redução visível de medidas em apenas 30 dias, com perda média de 5-7kg e redução de até 8cm na cintura.
                </p>

                <div className="bg-green-50 p-4 sm:p-6 rounded-lg mb-6">
                  <h6 className="text-gray-800 font-semibold mb-4">Resultados do emagrecedor:</h6>
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center relative">
                    <div className="p-2 sm:p-3">
                      <div className="text-xl sm:text-2xl font-bold text-green-600">-8cm</div>
                      <div className="text-sm sm:text-base text-gray-600">na Cintura</div>
                    </div>
                    <div className="relative p-2 sm:p-3">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-green-200 to-transparent"></div>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-green-200 to-transparent"></div>
                      <div className="text-xl sm:text-2xl font-bold text-green-600">82%</div>
                      <div className="text-sm sm:text-base text-gray-600">Menos Fome</div>
                    </div>
                    <div className="p-2 sm:p-3">
                      <div className="text-xl sm:text-2xl font-bold text-green-600">93%</div>
                      <div className="text-sm sm:text-base text-gray-600">Satisfação</div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-900 mb-6">
                  O que faz o Definamax tão eficaz para perder peso é a sua tecnologia patenteada de fibras inteligentes, que captura até 72% da
                  gordura dos alimentos antes da absorção. Isso significa que você naturalmente absorve menos
                  calorias a cada refeição, mesmo sem mudanças drásticas na alimentação.
                </p>

                <p className="text-gray-900 mb-6">O diferencial do Definamax é sua ação tripla:</p>

                <div className="space-y-4 mb-6">
                  <div className="text-gray-900">
                    <strong>Controle Superior da Fome:</strong> Reduz o apetite em até 82%, eliminando a compulsão alimentar já nos primeiros dias de uso.
                  </div>
                  <div className="text-gray-900">
                    <strong>Ação 24 Horas:</strong> Aumenta a queima de gordura em até 30%, atuando continuamente mesmo durante o sono.
                  </div>
                  <div className="text-gray-900">
                    <strong>Redução Localizada:</strong> Atua especificamente nas áreas mais difíceis como abdômen, coxas e braços - preservando a massa muscular e garantindo resultados mais harmoniosos.
                  </div>
                </div>

                <p className="text-gray-900 mb-6">
                  O Definamax também oferece um teste de IMC (Índice de Massa Corporal) gratuito para você
                  entender melhor como está sua saúde corporal. Para realizar o seu teste, <UtmLink 
                    href="https://www.definamaxoficial.com/avaliacao"
                    className="text-green-600 hover:text-green-800 underline cursor-pointer"
                    eventId="imc-definamax"
                  >
                    clique aqui
                  </UtmLink>.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <UtmLink 
                    href="https://www.definamaxoficial.com/" 
                    className="w-full bg-green-600 text-white text-center py-3 sm:py-4 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                    eventId="site-oficial-definamax"
                  >
                    <span>→</span> Acessar Site Oficial
                  </UtmLink>
                  <UtmLink 
                    href="https://www.definamaxoficial.com/" 
                    className="w-full bg-orange-500 text-white text-center py-3 sm:py-4 px-4 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                    eventId="informacoes-definamax"
                  >
                    <span>→</span> Obter mais informações
                  </UtmLink>
                </div>

                <div className="mt-6 bg-orange-50 p-4 rounded-lg">
                  <p className="text-gray-700 text-sm flex items-start gap-2">
                    <span className="text-orange-500">⚠</span>
                    <span>
                      Atenção: Não somos vendedores ou representantes do Definamax. Para mais informações sobre o produto, acesse
                      o site oficial clicando nos botões acima.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Segundo Produto */}
          <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 mb-12 relative">
            <div className="absolute -top-5 left-8 bg-green-600 text-white px-6 py-2 rounded">
              2° Lugar
            </div>
            
            <div className="flex justify-between items-start mb-6 pt-2 flex-col sm:flex-row gap-4 sm:gap-0">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-xl sm:text-2xl text-gray-900 font-bold">Ozenvitta</h4>
                  <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">Recomendado</span>
                </div>
                <p className="text-gray-900 font-medium text-base sm:text-lg tracking-wide">Eficaz no controle do apetite</p>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-2 mb-1">
                  <div className="text-xl font-bold text-gray-900">4.7</div>
                  <div className="text-yellow-400 text-xl">★★★★★</div>
                </div>
                <div className="text-sm text-gray-500">Avaliação dos usuários</div>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-6"></div>
            
            <div className="flex flex-col sm:flex-row gap-8 mb-8">
              <div className="w-full sm:w-64 shrink-0">
                <Image
                  src="/ozenvitta-400.webp"
                  alt="Ozenvitta: Eficaz no controle do apetite"
                  width={256}
                  height={384}
                  className="rounded-lg mx-auto sm:mx-0"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, 256px"
                  quality={85}
                />
                <p className="text-sm text-gray-600 text-center mt-2">
                  Ozenvitta: Eficaz no controle do apetite
                </p>
              </div>

              <div className="flex-1">
                <h5 className="text-2xl font-bold text-gray-900 mb-4">
                  Por que o Ozenvitta é eficaz no controle da fome?
                </h5>

                <p className="text-gray-700 mb-6">
                  Em nossa análise, o <strong>Ozenvitta</strong> mostrou resultados significativos no controle do apetite: 
                  <strong>70% dos usuários relataram redução expressiva da compulsão alimentar</strong>, com perda média 
                  de 3-4kg em 30 dias.
                </p>

                <div className="bg-green-50 p-4 sm:p-6 rounded-lg mb-6">
                  <h6 className="text-gray-800 font-semibold mb-4">Resultados do emagrecedor:</h6>
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center relative">
                    <div className="p-2 sm:p-3">
                      <div className="text-xl sm:text-2xl font-bold text-green-600">-3cm</div>
                      <div className="text-sm sm:text-base text-gray-600">na Cintura</div>
                    </div>
                    <div className="relative p-2 sm:p-3">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-green-200 to-transparent"></div>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-green-200 to-transparent"></div>
                      <div className="text-xl sm:text-2xl font-bold text-green-600">70%</div>
                      <div className="text-sm sm:text-base text-gray-600">Menos Fome</div>
                    </div>
                    <div className="p-2 sm:p-3">
                      <div className="text-xl sm:text-2xl font-bold text-green-600">85%</div>
                      <div className="text-sm sm:text-base text-gray-600">Satisfação</div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-900 mb-6">
                  Sua fórmula atua através de um complexo natural de fibras e ativos que promovem saciedade 
                  prolongada e ajudam a controlar a ansiedade por doces, especialmente nos momentos mais 
                  críticos do dia.
                </p>

                <p className="text-gray-900 mb-6">O diferencial do Ozenvitta é sua ação dupla:</p>

                <div className="space-y-4 mb-6">
                  <div className="text-gray-900">
                    <strong>Controle do Apetite:</strong> Fibra de Maçã e Garcinia Cambogia trabalham juntas para reduzir a fome e 
                    os picos de compulsão.
                  </div>
                  <div className="text-gray-900">
                    <strong>Equilíbrio Metabólico:</strong> O Cromo auxilia na regulação do açúcar no sangue, reduzindo a vontade de 
                    consumir doces e melhorando os níveis de energia.
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <UtmLink 
                    href="https://mon.net.br/3i6gsj" 
                    className="w-full bg-green-600 text-white text-center py-3 sm:py-4 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                    eventId="site-oficial-ozenvitta"
                  >
                    <span>→</span> Acessar Site Oficial
                  </UtmLink>
                  <UtmLink 
                    href="https://mon.net.br/3i6gsj" 
                    className="w-full bg-orange-500 text-white text-center py-3 sm:py-4 px-4 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                    eventId="informacoes-ozenvitta"
                  >
                    <span>→</span> Obter mais informações
                  </UtmLink>
                </div>

                <div className="mt-6 bg-orange-50 p-4 rounded-lg">
                  <p className="text-gray-700 text-sm flex items-start gap-2">
                    <span className="text-orange-500">⚠</span>
                    <span>
                      Atenção: Não somos vendedores ou representantes do Ozenvitta. Para mais informações sobre o produto, acesse
                      o site oficial clicando nos botões acima.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Terceiro Produto */}
          <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 mb-12 relative">
            <div className="absolute -top-5 left-8 bg-green-600 text-white px-6 py-2 rounded">
              3° Lugar
            </div>
            
            <div className="flex justify-between items-start mb-6 pt-2 flex-col sm:flex-row gap-4 sm:gap-0">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-xl sm:text-2xl text-gray-900 font-bold">SB2 Turbo</h4>
                  <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">Recomendado</span>
                </div>
                <p className="text-gray-900 font-medium text-base sm:text-lg tracking-wide">Emagrecimento rápido e saudável</p>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-2 mb-1">
                  <div className="text-xl font-bold text-gray-900">4.5</div>
                  <div className="text-yellow-400 text-xl">★★★★★</div>
                </div>
                <div className="text-sm text-gray-500">Avaliação dos usuários</div>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-6"></div>
            
            <div className="flex flex-col sm:flex-row gap-8 mb-8">
              <div className="w-full sm:w-64 shrink-0">
                <Image
                  src="/sb2-400.webp"
                  alt="SB2 Turbo: Emagrecimento rápido e saudável"
                  width={256}
                  height={384}
                  className="rounded-lg mx-auto sm:mx-0"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, 256px"
                  quality={85}
                />
                <p className="text-sm text-gray-600 text-center mt-2">
                  SB2 Turbo: Emagrecimento rápido e saudável
                </p>
              </div>

              <div className="flex-1">
                <h5 className="text-2xl font-bold text-gray-900 mb-4">
                  Por que o SB2 Turbo é eficaz para emagrecer?
                </h5>

                <p className="text-gray-700 mb-6">
                  Nossa análise revelou resultados impressionantes: <strong>87% dos usuários relataram redução significativa de medidas e controle do apetite</strong>, com resultados visíveis já nas primeiras semanas de uso.
                </p>

                <div className="bg-green-50 p-4 sm:p-6 rounded-lg mb-6">
                  <h6 className="text-gray-800 font-semibold mb-4">Resultados do emagrecedor:</h6>
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center relative">
                    <div className="p-2 sm:p-3">
                      <div className="text-xl sm:text-2xl font-bold text-green-600">-6cm</div>
                      <div className="text-sm sm:text-base text-gray-600">na Cintura</div>
                    </div>
                    <div className="relative p-2 sm:p-3">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-green-200 to-transparent"></div>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-green-200 to-transparent"></div>
                      <div className="text-xl sm:text-2xl font-bold text-green-600">87%</div>
                      <div className="text-sm sm:text-base text-gray-600">Menos Fome</div>
                    </div>
                    <div className="p-2 sm:p-3">
                      <div className="text-xl sm:text-2xl font-bold text-green-600">90%</div>
                      <div className="text-sm sm:text-base text-gray-600">Satisfação</div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-900 mb-6">
                  O produto utiliza uma combinação exclusiva de ingredientes naturais que atuam de forma sinérgica para promover o emagrecimento saudável, sem efeitos colaterais.
                </p>

                <p className="text-gray-900 mb-6">O SB2 Turbo trabalha através de três mecanismos principais:</p>

                <div className="space-y-4 mb-6">
                  <div className="text-gray-900">
                    <strong>Controle do Apetite:</strong> Psyllium e Chia trabalham juntos para promover saciedade prolongada.
                  </div>
                  <div className="text-gray-900">
                    <strong>Aceleração Metabólica:</strong> L-carnitina e L-tirosina otimizam a queima de gordura.
                  </div>
                  <div className="text-gray-900">
                    <strong>Redução de Medidas:</strong> Laranja Moro e Espirulina auxiliam na redução da gordura localizada.
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <UtmLink 
                    href="https://mon.net.br/3eefqg" 
                    className="w-full bg-green-600 text-white text-center py-3 sm:py-4 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                    eventId="site-oficial-sb2"
                  >
                    <span>→</span> Acessar Site Oficial
                  </UtmLink>
                  <UtmLink 
                    href="https://mon.net.br/3eefqg" 
                    className="w-full bg-orange-500 text-white text-center py-3 sm:py-4 px-4 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                    eventId="informacoes-sb2"
                  >
                    <span>→</span> Obter mais informações
                  </UtmLink>
                </div>

                <div className="mt-6 bg-orange-50 p-4 rounded-lg">
                  <p className="text-gray-700 text-sm flex items-start gap-2">
                    <span className="text-orange-500">⚠</span>
                    <span>
                      Atenção: Não somos vendedores ou representantes do SB2 Turbo. Para mais informações sobre o produto, acesse
                      o site oficial clicando nos botões acima.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quarto Produto */}
          <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 mb-12 relative">
            <div className="absolute -top-5 left-8 bg-green-600 text-white px-6 py-2 rounded">
              4° Lugar
            </div>
            
            <div className="flex justify-between items-start mb-6 pt-2 flex-col sm:flex-row gap-4 sm:gap-0">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-xl sm:text-2xl text-gray-900 font-bold">New Detox</h4>
                  <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">Recomendado</span>
                </div>
                <p className="text-gray-900 font-medium text-base sm:text-lg tracking-wide">Redução de inchaço e desintoxicação</p>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-2 mb-1">
                  <div className="text-xl font-bold text-gray-900">4.3</div>
                  <div className="text-yellow-400 text-xl">★★★★★</div>
                </div>
                <div className="text-sm text-gray-500">Avaliação dos usuários</div>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-6"></div>
            
            <div className="flex flex-col sm:flex-row gap-8 mb-8">
              <div className="w-full sm:w-64 shrink-0">
                <Image
                  src="/newdetox-400.webp"
                  alt="New Detox: Redução de inchaço e desintoxicação"
                  width={256}
                  height={384}
                  className="rounded-lg mx-auto sm:mx-0"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, 256px"
                  quality={85}
                />
                <p className="text-sm text-gray-600 text-center mt-2">
                  New Detox: Redução de inchaço e desintoxicação
                </p>
              </div>

              <div className="flex-1">
                <h5 className="text-2xl font-bold text-gray-900 mb-4">
                  Por que o New Detox é eficaz no combate ao inchaço?
                </h5>

                <p className="text-gray-700 mb-6">
                  Nossa análise revelou que o <strong>New Detox</strong> é especialmente eficaz contra o inchaço: <strong>80% dos usuários relataram redução significativa do inchaço abdominal em apenas 7 dias</strong>, com melhora expressiva na digestão e sensação de leveza.
                </p>

                <div className="bg-green-50 p-4 sm:p-6 rounded-lg mb-6">
                  <h6 className="text-gray-800 font-semibold mb-4">Resultados observados:</h6>
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center relative">
                    <div className="p-2 sm:p-3">
                      <div className="text-xl sm:text-2xl font-bold text-green-600">80%</div>
                      <div className="text-sm sm:text-base text-gray-600">Menos Inchaço</div>
                    </div>
                    <div className="relative p-2 sm:p-3">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-green-200 to-transparent"></div>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-green-200 to-transparent"></div>
                      <div className="text-xl sm:text-2xl font-bold text-green-600">7</div>
                      <div className="text-sm sm:text-base text-gray-600">Dias de Uso</div>
                    </div>
                    <div className="p-2 sm:p-3">
                      <div className="text-xl sm:text-2xl font-bold text-green-600">75%</div>
                      <div className="text-sm sm:text-base text-gray-600">Satisfação</div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-900 mb-6">
                  O produto utiliza uma combinação exclusiva de ativos naturais que atuam na desintoxicação do organismo e redução da retenção de líquidos, proporcionando resultados rápidos no combate ao inchaço.
                </p>

                <p className="text-gray-900 mb-6">O New Detox atua através de três mecanismos:</p>

                <div className="space-y-4 mb-6">
                  <div className="text-gray-900">
                    <strong>Desintoxicação:</strong> Spirulina e Psyllium eliminam toxinas e reduzem o inchaço abdominal.
                  </div>
                  <div className="text-gray-900">
                    <strong>Equilíbrio Intestinal:</strong> Melhora a digestão e reduz o desconforto abdominal.
                  </div>
                  <div className="text-gray-900">
                    <strong>Drenagem:</strong> Combate a retenção de líquidos e melhora o aspecto da pele.
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <UtmLink 
                    href="https://mon.net.br/3eefce" 
                    className="w-full bg-green-600 text-white text-center py-3 sm:py-4 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                    eventId="site-oficial-newdetox"
                  >
                    <span>→</span> Acessar Site Oficial
                  </UtmLink>
                  <UtmLink 
                    href="https://mon.net.br/3eefce" 
                    className="w-full bg-orange-500 text-white text-center py-3 sm:py-4 px-4 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                    eventId="informacoes-newdetox"
                  >
                    <span>→</span> Obter mais informações
                  </UtmLink>
                </div>

                <div className="mt-6 bg-orange-50 p-4 rounded-lg">
                  <p className="text-gray-700 text-sm flex items-start gap-2">
                    <span className="text-orange-500">⚠</span>
                    <span>
                      Atenção: Não somos vendedores ou representantes do New Detox. Para mais informações sobre o produto, acesse
                      o site oficial clicando nos botões acima.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quinto Produto */}
          <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 mb-12 relative">
            <div className="absolute -top-5 left-8 bg-green-600 text-white px-6 py-2 rounded">
              5° Lugar
            </div>
            
            <div className="flex justify-between items-start mb-6 pt-2 flex-col sm:flex-row gap-4 sm:gap-0">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-xl sm:text-2xl text-gray-900 font-bold">Mounja Slim</h4>
                  <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">Recomendado</span>
                </div>
                <p className="text-gray-900 font-medium text-base sm:text-lg tracking-wide">Tecnologia de rápida absorção</p>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-2 mb-1">
                  <div className="text-xl font-bold text-gray-900">4.0</div>
                  <div className="text-yellow-400 text-xl">★★★★★</div>
                </div>
                <div className="text-sm text-gray-500">Avaliação dos usuários</div>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-6"></div>
            
            <div className="flex flex-col sm:flex-row gap-8 mb-8">
              <div className="w-full sm:w-64 shrink-0">
                <Image
                  src="/monja-400.webp"
                  alt="Mounja Slim: Tecnologia de rápida absorção"
                  width={256}
                  height={384}
                  className="rounded-lg mx-auto sm:mx-0"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, 256px"
                  quality={85}
                />
                <p className="text-sm text-gray-600 text-center mt-2">
                  Mounja Slim: Tecnologia de rápida absorção
                </p>
              </div>

              <div className="flex-1">
                <h5 className="text-2xl font-bold text-gray-900 mb-4">
                  Por que o Mounja Slim é eficaz para emagrecer?
                </h5>

                <p className="text-gray-700 mb-6">
                  O <strong>Mounja Slim</strong> é um suplemento inovador que <strong>utiliza a tecnologia de rápida absorção para potencializar o emagrecimento</strong>. Nossa análise mostrou que 78% dos usuários relataram perda de peso significativa.
                </p>

                <div className="bg-green-50 p-4 sm:p-6 rounded-lg mb-6">
                  <h6 className="text-gray-800 font-semibold mb-4">Resultados observados:</h6>
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center relative">
                    <div className="p-2 sm:p-3">
                      <div className="text-xl sm:text-2xl font-bold text-green-600">78%</div>
                      <div className="text-sm sm:text-base text-gray-600">Perda de Peso</div>
                    </div>
                    <div className="relative p-2 sm:p-3">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-green-200 to-transparent"></div>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-green-200 to-transparent"></div>
                      <div className="text-xl sm:text-2xl font-bold text-green-600">-5kg</div>
                      <div className="text-sm sm:text-base text-gray-600">em 30 dias</div>
                    </div>
                    <div className="p-2 sm:p-3">
                      <div className="text-xl sm:text-2xl font-bold text-green-600">85%</div>
                      <div className="text-sm sm:text-base text-gray-600">Satisfação</div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-900 mb-6">
                  O produto se destaca por sua fórmula zero açúcar e pela presença da exclusiva Mounja de Póbi, um ingrediente natural com propriedades termogênicas.
                </p>

                <p className="text-gray-900 mb-6">O Mounja Slim atua através de três mecanismos:</p>

                <div className="space-y-4 mb-6">
                  <div className="text-gray-900">
                    <strong>Queima de Gordura:</strong> Ativa o metabolismo e acelera a queima de gordura.
                  </div>
                  <div className="text-gray-900">
                    <strong>Controle Glicêmico:</strong> Ajuda a regular os níveis de açúcar no sangue.
                  </div>
                  <div className="text-gray-900">
                    <strong>Energia:</strong> Aumenta a disposição sem causar efeitos colaterais.
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <UtmLink 
                    href="https://app.monetizze.com.br/r/BGZ1881505" 
                    className="w-full bg-green-600 text-white text-center py-3 sm:py-4 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                    eventId="site-oficial-mounja"
                  >
                    <span>→</span> Acessar Site Oficial
                  </UtmLink>
                  <UtmLink 
                    href="https://app.monetizze.com.br/r/BGZ1881505" 
                    className="w-full bg-orange-500 text-white text-center py-3 sm:py-4 px-4 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                    eventId="informacoes-mounja"
                  >
                    <span>→</span> Obter mais informações
                  </UtmLink>
                </div>

                <div className="mt-6 bg-orange-50 p-4 rounded-lg">
                  <p className="text-gray-700 text-sm flex items-start gap-2">
                    <span className="text-orange-500">⚠</span>
                    <span>
                      Atenção: Não somos vendedores ou representantes do Mounja Slim. Para mais informações sobre o produto, acesse
                      o site oficial clicando nos botões acima.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Conclusão */}
      <div className="bg-gradient-to-b from-gray-100 to-gray-50/80 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Conclusão da Nossa Análise
              </h2>

              <div className="space-y-6 text-gray-700">
                <p className="leading-relaxed">
                  Com base em nossa extensa avaliação, que incluiu análise de resultados reais, 
                  depoimentos de usuários e estudos de eficácia, consideramos esses 5 produtos como as 
                  melhores opções para um emagrecimento rápido, saudável e seguro em 2025.
                </p>

                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">
                    Principais Diferenciais dos Produtos Selecionados:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Fórmulas naturais com ingredientes cientificamente comprovados</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Alto índice de satisfação entre os usuários (acima de 75%)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Resultados visíveis em curto prazo (15-30 dias)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Fabricação em laboratórios certificados</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Garantia de satisfação e política de reembolso</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-orange-800 mb-4 flex items-center gap-2">
                    <span className="text-orange-500">⚠</span>
                    Aviso Importante:
                  </h3>
                  <p className="leading-relaxed">
                    Recomendamos enfaticamente que a compra seja realizada exclusivamente através dos sites 
                    oficiais dos produtos. Isso garante:
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>Produto 100% original e dentro do prazo de validade</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>Garantia de satisfação ou seu dinheiro de volta</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>Suporte ao cliente e acompanhamento pós-venda</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>Pagamento seguro e entrega garantida</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">
                    Como Escolher o Produto Ideal:
                  </h3>
                  <p className="mb-4">
                    Cada produto em nossa lista tem características únicas que podem se adequar melhor 
                    às suas necessidades específicas:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 mt-1">→</span>
                      <span><strong>Definamax:</strong> Ideal para quem busca redução de medidas e controle de apetite</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 mt-1">→</span>
                      <span><strong>Ozenvitta:</strong> Perfeito para quem tem compulsão alimentar</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 mt-1">→</span>
                      <span><strong>SB2 Turbo:</strong> Excelente para aceleração do metabolismo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 mt-1">→</span>
                      <span><strong>New Detox:</strong> Ótimo para desintoxicação e redução de inchaço</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 mt-1">→</span>
                      <span><strong>Mounja Slim:</strong> Recomendado para quem precisa de resultados rápidos</span>
                    </li>
                  </ul>
                </div>

                <p className="text-center text-gray-600 italic">
                  Para acessar o site oficial de qualquer produto, basta clicar nos botões disponíveis 
                  em cada seção acima. Todos os links são seguros e você será redirecionado diretamente 
                  para a página oficial do fabricante.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção O Que Fazer Agora */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-6 py-2 bg-green-50 rounded-full text-green-600 font-medium text-sm mb-4">
              Próximos Passos
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              E o que devo fazer agora?
            </h2>
            <div className="prose prose-lg mx-auto text-gray-700">
              <p className="mb-6">
                Tudo que você precisa fazer é escolher o emagrecedor que mais faz sentido para as suas 
                necessidades, e tomar conforme a recomendação do fabricante.
              </p>
              <p className="mb-6">
                Lembre-se que cada organismo é único, então é importante:
              </p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Seguir corretamente a posologia indicada na embalagem</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Manter uma alimentação equilibrada durante o tratamento</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Beber bastante água ao longo do dia</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Se possível, combinar com atividade física regular</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Manter o uso consistente para melhores resultados</span>
                </li>
              </ul>
              <p className="text-green-900 font-medium">
                Escolha o produto que melhor atende suas necessidades e comece sua jornada para uma vida mais saudável hoje mesmo!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
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
        <Script id="footer-tracking">
          {`
            // Track when user reaches footer
            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  gtag('event', 'scroll_to_footer', {
                    'event_category': 'Engagement',
                    'event_label': 'User reached footer'
                  });
                  observer.disconnect(); // Only track once
                }
              });
            });
            
            // Start observing the footer
            observer.observe(document.querySelector('footer'));
          `}
        </Script>
      </footer>
    </section>
  );
};

export default RankingSection; 