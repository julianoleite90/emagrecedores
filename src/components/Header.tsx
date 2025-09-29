import ScrollLink from './ScrollLink';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white border-b py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-auto flex justify-start">
            <Image
              src="/logo-melhores.png"
              alt="Logo"
              width={350}
              height={125}
              priority
              quality={100}
              className="w-96 md:w-96"
            />
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex gap-6">
              <li>
                <ScrollLink
                  targetId="ranking"
                  className="text-gray-900 font-medium hover:text-gray-600 transition-colors cursor-pointer"
                >
                  Remédios Avaliados
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  targetId="ranking"
                  className="text-gray-900 font-medium hover:text-gray-600 transition-colors cursor-pointer"
                >
                  Ranking atualizado 2025
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  targetId="ranking"
                  className="text-gray-900 font-medium hover:text-gray-600 transition-colors cursor-pointer"
                >
                  Como Escolher
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  targetId="ranking"
                  className="text-gray-900 font-medium hover:text-gray-600 transition-colors cursor-pointer"
                >
                  Perguntas Frequentes
                </ScrollLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 