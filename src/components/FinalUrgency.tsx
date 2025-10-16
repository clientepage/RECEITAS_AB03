import React from 'react';
import { AlertTriangle } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const FinalUrgency: React.FC = () => {
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
          <div className="bg-white rounded-2xl shadow-xl border-2 border-red-200 overflow-hidden">
            <div className="bg-red-600 text-white py-4 px-6 text-center">
              <div className="flex items-center justify-center mb-2">
                <AlertTriangle size={28} className="mr-2" />
                <h2 className="text-xl md:text-2xl font-bold">
                  ATENÇÃO: Esta Página Pode Sair do Ar a Qualquer Momento
                </h2>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <p className="text-natural-800 text-base md:text-lg mb-6 leading-relaxed">
                A indústria farmacêutica não gosta que informações como essas se espalhem. Já recebemos <span className="font-bold text-red-600">3 notificações</span> para remover este material.
              </p>

              <p className="text-natural-800 text-base md:text-lg mb-6 leading-relaxed">
                Por isso, esta oferta especial de <span className="font-bold text-green-600">R$27</span> pode não estar disponível amanhã.
              </p>

              <div className="bg-natural-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-xl text-natural-900 mb-4 text-center">
                  Você tem 2 opções:
                </h3>

                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border-2 border-red-200">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">1️⃣</span>
                      <p className="text-natural-800">
                        Continuar gastando <span className="font-bold text-red-600">R$200-400/mês</span> em farmácias pelos próximos anos{' '}
                        <span className="font-bold">(= R$14.400 em 5 anos)</span>
                      </p>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4 border-2 border-green-300">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">2️⃣</span>
                      <p className="text-natural-800">
                        Investir <span className="font-bold text-green-600">R$27 HOJE</span> e ter acesso vitalício a{' '}
                        <span className="font-bold">980 receitas</span> que podem transformar sua saúde
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-natural-800 text-base md:text-lg mb-6 text-center">
                A decisão é sua. Mas lembre-se:{' '}
                <span className="font-bold text-green-600">você tem GARANTIA de 7 dias.</span>{' '}
                Não há risco.
              </p>

              <div className="mb-6">
                <CountdownTimer />
              </div>

              <a
                href="#oferta"
                onClick={handleScrollToOffers}
                className="block w-full text-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-8 py-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg md:text-xl animate-pulse"
              >
                🚨 SIM! QUERO MEU ACESSO AGORA (R$27) 🚨
              </a>

              <div className="text-center mt-4 space-y-1 text-sm text-natural-600">
                <p className="font-bold">🔥 Apenas 23 vagas restantes</p>
                <p>✅ Acesso em 2 minutos</p>
                <p>✅ Garantia de 7 dias</p>
                <p>✅ +R$97 em bônus grátis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalUrgency;
