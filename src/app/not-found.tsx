import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">404</h1>
          <h2 className="text-2xl font-medium text-gray-600 mb-8">Página não encontrada</h2>
          <p className="text-gray-500 mb-8">
            A página que você está procurando não existe ou foi removida.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
          >
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  );
} 