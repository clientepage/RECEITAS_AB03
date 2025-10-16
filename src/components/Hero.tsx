import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, BookOpen, Users, Award } from 'lucide-react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      setIsLoaded(true);
    });
  }, []);

  const handleScrollToOffers = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const offersSection = document.getElementById('oferta');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToNext = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const nextSection = document.getElementById('depoimentos');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen pt-16 pb-12 md:pt-20 md:pb-20 bg-gradient-to-b from-natural-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center pt-4 md:pt-8">
          <h1
            className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-natural-900 mb-4 md:mb-6 leading-tight px-2 transition-opacity duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Pare de Gastar R$300/Mês em Farmácia: <span className="text-natural-600">Descubra as 980 Receitas Naturais que 27.142 Brasileiros Usam</span> para Tratar Pressão Alta, Insônia, Diabetes e Mais 60 Problemas de Saúde
          </h1>

          <p
            className={`text-lg md:text-xl lg:text-2xl text-natural-800 mb-6 md:mb-8 px-2 leading-relaxed transition-opacity duration-500 delay-100 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Ingredientes simples da sua cozinha + receitas comprovadas = <span className="font-bold text-natural-900">Economia de até R$3.600/ano com sua saúde</span>
          </p>

          <div className={`bg-white/90 backdrop-blur-sm rounded-xl p-4 md:p-6 max-w-xl mx-auto mb-6 shadow-lg border border-natural-200 transition-opacity duration-500 delay-150 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}>
            <div className="flex items-center justify-center mb-2">
              <div className="flex text-yellow-500 mr-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <span className="font-bold text-natural-900">4.9/5 estrelas</span>
            </div>
            <p className="text-natural-700 font-medium">27.142 pessoas compraram e aprovaram</p>
          </div>

          
          <div
            className={`space-y-4 transition-opacity duration-500 delay-200 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#oferta"
                onClick={handleScrollToOffers}
                className="btn-mobile inline-block bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transform hover:scale-105 touch-optimized text-lg md:text-xl"
                aria-label="Ir para oferta especial"
              >
                🌿 QUERO ACESSO POR R$27 AGORA 🌿
              </a>

              <a
                href="#depoimentos"
                onClick={handleScrollToNext}
                className="btn-mobile inline-block border-2 border-natural-600 text-natural-700 hover:bg-natural-600 hover:text-white font-semibold rounded-full transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-natural-500 focus:ring-offset-2 touch-optimized"
                aria-label="Ver depoimentos"
              >
                <ArrowDown size={18} className="inline mr-2" aria-hidden="true" />
                Ver Depoimentos
              </a>
            </div>

            <p className="text-natural-700 text-base md:text-lg font-medium mt-4">
              ✅ Acesso imediato após pagamento<br/>
              ✅ Garantia incondicional de 7 dias<br/>
              ✅ Suporte via WhatsApp incluído
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;