import React from 'react';
import { CheckCircle } from 'lucide-react';

const SolutionStory: React.FC = () => {
  const results = [
    'Minha pressão normalizou em 3 semanas',
    'Volto a dormir 8 horas por noite',
    'Eliminei as dores nas articulações',
    'Economizo R$3.444/ano (sim, fiz as contas!)'
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-natural-900 mb-4 leading-tight">
              A Descoberta que Libertou <span className="text-natural-600">27.142 Brasileiros</span> da Dependência de Farmácias
            </h2>
          </div>

          <div className="bg-natural-50 rounded-2xl p-6 md:p-8 border border-natural-200 mb-8">
            <div className="prose max-w-none">
              <p className="text-natural-800 text-base md:text-lg leading-relaxed mb-4">
                Há 3 anos, eu gastava <span className="font-bold text-red-600">R$287/mês</span> em remédios para pressão alta, insônia e dores nas articulações.
              </p>

              <p className="text-natural-800 text-base md:text-lg leading-relaxed mb-4">
                Até que descobri algo que a indústria farmacêutica <span className="font-bold">ODEIA:</span>
              </p>

              <p className="text-natural-800 text-base md:text-lg leading-relaxed mb-6">
                Os mesmos ingredientes que você tem na sua cozinha - gengibre, alho, mel, canela, cúrcuma - quando combinados da forma CERTA, tratam naturalmente mais de 60 problemas de saúde.
              </p>

              <div className="bg-white rounded-xl p-6 mb-6 shadow-md">
                <p className="text-natural-800 text-base md:text-lg leading-relaxed mb-4 font-medium">
                  Compilei <span className="text-natural-600 font-bold">980 receitas testadas e comprovadas</span>. O resultado?
                </p>

                <div className="space-y-3">
                  {results.map((result, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle size={24} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-natural-800 text-base md:text-lg">{result}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-natural-800 text-xl md:text-2xl font-bold text-center">
                E não sou só eu...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionStory;
