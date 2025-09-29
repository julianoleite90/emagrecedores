import ScrollLink from './ScrollLink';
import { trackHeroCTA } from '@/utils/analytics';
import Image from 'next/image';

const HeroSection = () => {
  const formatDate = () => {
    return "Revisado por: Alessandra Duran";
  };

  const handleCTAClick = () => {
    trackHeroCTA();
  };

  return (
    <section className="hero-section bg-gradient-to-b from-gray-50 to-gray-100 pt-0 pb-8 md:pb-12">
      <div className="max-w-7xl mx-auto px-6">


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo do lado esquerdo */}
          <div className="space-y-4">
            {/* Data de atualização */}
            <div className="pt-2 md:pt-6">
              <p className="text-gray-600 text-sm italic">
                {formatDate()}
              </p>
            </div>

            {/* Título principal */}
            <div className="text-left">
              <h1 className="hero-title text-gray-900 leading-tight mb-2">
                <div className="text-gray-900">
                  Conheça:<br />
                  5 Remédios mais usados para Emagrecer
                </div>
              </h1>
            </div>

            {/* Imagem em mobile */}
            <div className="block lg:hidden w-full mt-[2px] mb-6">
              <div className="hero-image relative h-[450px] w-full">
                <Image
                  src="/hdesk.png"
                  alt="Remédios para emagrecer"
                  fill
                  className="object-cover object-top"
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 100vw, 0px"
                  quality={60}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
              <p className="text-xs text-gray-500 italic mt-2 text-center">
                Editorial: Análise imparcial dos melhores suplementos para emagrecimento de 2025
              </p>
            </div>

            {/* Subtítulo com destaque */}
            <p className="hero-text text-gray-700 leading-relaxed">
            Você já se sentiu frustrada, olhando no espelho e vendo que, apesar de dietas rigorosas, treinos exaustivos e até produtos para emagrecer, o corpo que você sonha simplesmente não aparece? Aquele aperto no peito ao perceber que a roupa favorita não cabe mais e a autoestima vai ficando pelo caminho? Você não está sozinha! A verdade é que 7 em cada 10 pessoas não conseguem perder peso, e 86% dos produtos do mercado não cumprem o que prometem.
            </p>

            <p className="hero-text text-gray-700 leading-relaxed">
            <strong>Mas a culpa não é sua! Mesmo com todo o esforço, o corpo muitas vezes não queima calorias como deveria. Por isso, minha equipe foi atrás dos melhores emagrecedores naturais de 2025: seguros, acessíveis e realmente eficazes.</strong>
            </p>

            <p className="hero-text text-gray-700 leading-relaxed">
            Nada de injeções caras ou promessas vazias! Continue lendo e descubra o emagrecedor natural perfeito para transformar seu corpo e resgatar sua confiança.
            </p>

            {/* Botão CTA */}
            <div className="mt-6 mb-8">
              <ScrollLink 
                targetId="quiz"
                className="hero-cta inline-flex hover:bg-[#008F35] text-white font-medium py-4 px-4 sm:px-8 rounded-lg transition-colors duration-300 items-center justify-between w-full text-sm sm:text-base"
                onClick={handleCTAClick}
              >
                <span className="flex-1 text-center leading-tight">CONHEÇA OS 5 MELHORES DE 2025</span>
                <span className="ml-2">↓</span>
              </ScrollLink>
            </div>

          </div>

      {/* Imagem do lado direito (apenas desktop) */}
      <div className="hidden lg:block">
        <div className="hero-image relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/hdesk.png"
            alt="Remédios para emagrecer"
            fill
            className="object-cover"
            priority
            fetchPriority="high"
            sizes="(min-width: 1024px) 50vw, 0px"
            quality={60}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        </div>
            <p className="text-xs text-gray-500 italic mt-3 text-center">
              Editorial: Análise imparcial dos melhores suplementos para emagrecimento de 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;