import ScrollLink from './ScrollLink';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white border-b py-6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-auto flex justify-center md:justify-start">
            <Image
              src="/logo.webp"
              alt="Logo"
              width={280}
              height={100}
              priority
              quality={100}
              className="w-72 md:w-72"
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
                  Ranking 2025
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