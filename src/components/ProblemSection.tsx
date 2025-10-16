import React from 'react';
import { X, AlertCircle } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const problems = [
    'Gastar centenas de reais TODO MÊS em remédios que só tratam sintomas?',
    'Acordar de madrugada com insônia e passar o dia exausto?',
    'Ver sua pressão alta e não conseguir controlar naturalmente?',
    'Sentir dores nas articulações que limitam seus movimentos?',
    'Depender de remédios com efeitos colaterais horríveis?'
  ];

  const handleScrollToOffers = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const offersSection = document.getElementById('oferta');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-red-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-natural-900 mb-4 leading-tight">
              Você Também Está <span className="text-red-600">CANSADO</span> de:
            </h2>
          </div>

          <div className="space-y-4 mb-8">
            {problems.map((problem, index) => (
              <div key={index} className="bg-white rounded-xl p-4 md:p-6 shadow-md border border-red-100 flex items-start gap-4">
                <X size={24} className="text-red-600 flex-shrink-0 mt-1" />
                <p className="text-natural-800 text-base md:text-lg">{problem}</p>
              </div>
            ))}
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl mb-8">
            <div className="flex items-start gap-4">
              <AlertCircle size={32} className="text-yellow-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-xl text-natural-900 mb-2">
                  E se eu te contar que a SOLUÇÃO está na sua cozinha agora?
                </h3>
                <p className="text-natural-700 text-base md:text-lg">
                  Os mesmos ingredientes que você tem em casa - gengibre, alho, mel, canela, cúrcuma - quando combinados da forma CERTA, tratam naturalmente mais de 60 problemas de saúde.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#oferta"
              onClick={handleScrollToOffers}
              className="inline-block bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-base md:text-lg"
            >
              Quero Conhecer a Solução →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
