import React, { useState, useCallback, useRef } from 'react';
import { ArrowDown, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface VideoTestimonial {
  src: string;
  name: string;
  age: number;
  city: string;
  benefit: string;
  condition: string;
}

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleScrollToOffers = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const offersSection = document.getElementById('oferta');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleScrollToNext = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const nextSection = document.getElementById('conhecimento');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const menTestimonials: VideoTestimonial[] = [
    {
      src: "https://i.imgur.com/u6bF0FY.mp4",
      name: "Roberto L.",
      age: 58,
      city: "Porto Alegre, RS",
      benefit: "Controlei meu diabetes sem remédios",
      condition: "Diabetes tipo 2 controlado"
    },
    {
      src: "https://i.imgur.com/rzUgSjC.mp4",
      name: "Carlos M.",
      age: 52,
      city: "Belo Horizonte, MG",
      benefit: "Pressão normalizada em 3 semanas",
      condition: "Pressão alta controlada"
    },
    {
      src: "https://i.imgur.com/t0TYi4W.mp4",
      name: "João P.",
      age: 61,
      city: "Curitiba, PR",
      benefit: "Voltei a dormir 8 horas por noite",
      condition: "Insônia crônica curada"
    }
  ];

  const womenTestimonials: VideoTestimonial[] = [
    {
      src: "https://i.imgur.com/77TNpQy.mp4",
      name: "Maria S.",
      age: 48,
      city: "São Paulo, SP",
      benefit: "Eliminei dores nas articulações",
      condition: "Artrite controlada naturalmente"
    },
    {
      src: "https://i.imgur.com/CF3SOWj.mp4",
      name: "Ana C.",
      age: 43,
      city: "Rio de Janeiro, RJ",
      benefit: "Ansiedade reduzida em 80%",
      condition: "Crises de pânico eliminadas"
    },
    {
      src: "https://i.imgur.com/OLiohVn.mp4",
      name: "Carla M.",
      age: 55,
      city: "Brasília, DF",
      benefit: "Economizei mais de R$2.000",
      condition: "Múltiplos problemas resolvidos"
    }
  ];

  const imageTestimonials = [
    {
      src: "https://i.imgur.com/vGqGD7K.png",
      alt: "Depoimento verificado via WhatsApp"
    },
    {
      src: "https://i.imgur.com/jbFseZ6.png",
      alt: "Depoimento verificado via WhatsApp"
    },
    {
      src: "https://i.imgur.com/H01gx2C.png",
      alt: "Depoimento verificado via WhatsApp"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % imageTestimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + imageTestimonials.length) % imageTestimonials.length);
  };

  const VideoCard = ({ testimonial, viewCount }: { testimonial: VideoTestimonial; viewCount: number }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
          setIsPlaying(false);
        } else {
          videoRef.current.play();
          setIsPlaying(true);
          if (typeof window !== 'undefined' && window.trackEvent) {
            window.trackEvent('VideoPlay', {
              video_title: testimonial.name,
              video_src: testimonial.src
            });
          }
        }
      }
    };

    const handleVideoClick = () => {
      togglePlay();
    };

    return (
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="relative group cursor-pointer" onClick={handleVideoClick}>
          <div className="absolute top-3 left-3 z-30 bg-green-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1 pointer-events-none">
            <span>✅</span>
            <span>Verificado</span>
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-4 pt-16 pointer-events-none">
            <div className="flex text-yellow-400 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-4 h-4 fill-current drop-shadow-lg" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
              ))}
            </div>
            <p className="text-white font-bold text-base mb-2 drop-shadow-lg">"{testimonial.benefit}"</p>
            <p className="text-white font-semibold text-sm mb-1 drop-shadow-lg">{testimonial.name}</p>
            <p className="text-white/90 text-xs mb-2 drop-shadow-lg">{testimonial.age} anos • {testimonial.city}</p>
            <div className="flex items-start gap-1.5 text-green-300 text-xs">
              <span className="font-bold drop-shadow-lg">✅</span>
              <span className="font-medium drop-shadow-lg">{testimonial.condition}</span>
            </div>
          </div>

          {!isPlaying && (
            <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/95 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 md:w-10 md:h-10 text-green-600 ml-1" fill="currentColor" />
              </div>
            </div>
          )}

          {!isPlaying && (
            <div className="absolute inset-0 z-10 bg-gradient-to-br from-gray-900/40 via-green-900/30 to-gray-900/40 pointer-events-none" />
          )}

          <video
            ref={videoRef}
            className="w-full h-auto bg-black"
            preload="metadata"
            loading="lazy"
            playsInline
            disablePictureInPicture
            onEnded={() => setIsPlaying(false)}
            onPause={() => setIsPlaying(false)}
            onPlay={() => setIsPlaying(true)}
          >
            <source src={testimonial.src} type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>
        </div>
        <div className="text-center py-2 px-3 bg-gray-50">
          <p className="text-gray-600 text-xs md:text-sm flex items-center justify-center gap-1.5">
            <span>👁️</span>
            <span>Assistido por {viewCount.toLocaleString('pt-BR')} pessoas</span>
          </p>
        </div>
      </div>
    );
  };

  return (
    <section id="depoimentos" className="py-8 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 md:mb-4 leading-tight">
            Depoimentos Reais de <span className="text-green-700">Transformação</span>
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto px-2">
            Veja pessoas reais contando como as receitas naturais transformaram sua saúde
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-lg md:text-xl font-bold text-gray-800 text-center mb-6">
            Homens que Transformaram Sua Saúde
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {menTestimonials.map((testimonial, index) => (
              <VideoCard key={`men-${index}`} testimonial={testimonial} viewCount={2847 + index * 234} />
            ))}
          </div>
        </div>

        <div className="text-center my-8 md:my-12 max-w-2xl mx-auto px-4">
          <p className="text-lg md:text-xl font-bold text-gray-900 mb-6">
            Quer os mesmos resultados?
          </p>
          <a
            href="#oferta"
            onClick={handleScrollToOffers}
            className="inline-block bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold px-8 md:px-10 py-4 rounded-full transition-all shadow-lg hover:shadow-xl text-base md:text-lg transform hover:scale-105"
          >
            🌿 Sim! Quero Meu Acesso por R$27 🌿
          </a>
        </div>

        <div className="mb-12">
          <h3 className="text-lg md:text-xl font-bold text-gray-800 text-center mb-6">
            Mulheres que Transformaram Sua Saúde
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {womenTestimonials.map((testimonial, index) => (
              <VideoCard key={`women-${index}`} testimonial={testimonial} viewCount={3156 + index * 189} />
            ))}
          </div>
        </div>

        <div className="text-center my-8 md:my-12 max-w-2xl mx-auto px-4">
          <p className="text-lg md:text-xl font-bold text-gray-900 mb-6">
            Quer os mesmos resultados?
          </p>
          <a
            href="#oferta"
            onClick={handleScrollToOffers}
            className="inline-block bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold px-8 md:px-10 py-4 rounded-full transition-all shadow-lg hover:shadow-xl text-base md:text-lg transform hover:scale-105"
          >
            🌿 Sim! Quero Meu Acesso por R$27 🌿
          </a>
        </div>

        <div className="text-center mb-12">
          <div className="inline-block bg-green-50 border-2 border-green-600 rounded-xl px-6 py-4">
            <p className="text-gray-900 font-bold text-lg md:text-xl">
              Junte-se a essas <span className="text-green-600">27.142 pessoas</span> que transformaram sua saúde
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative bg-white rounded-xl shadow-lg overflow-hidden mx-auto" style={{ maxWidth: '600px' }}>
            <div className="relative w-full" style={{ paddingBottom: '133.33%' }}>
              {imageTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.alt}
                    className="absolute inset-0 w-full h-full object-contain p-4"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200"
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={20} />
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {imageTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                    index === currentSlide
                      ? 'bg-green-600 w-6'
                      : 'bg-white/60 hover:bg-white/80'
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 md:mt-12 text-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg md:rounded-xl p-6 md:p-8 lg:p-10 max-w-3xl mx-auto border-2 border-green-200 shadow-lg">
          <p className="text-lg md:text-xl text-gray-900 mb-4 md:mb-6 font-bold">
            Mais de 27 mil pessoas compraram e aprovaram as nossas receitas naturais. Você também pode transformar sua saúde com ingredientes simples da sua cozinha.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#oferta"
              onClick={handleScrollToOffers}
              className="inline-block bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl text-base md:text-lg transform hover:scale-105"
            >
              🌿 QUERO ACESSO POR R$27 AGORA 🌿
            </a>

            <a
              href="#conhecimento"
              onClick={handleScrollToNext}
              className="inline-block border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-sm md:text-base"
            >
              <ArrowDown size={16} className="inline mr-2" />
              Ver Mais Detalhes
            </a>
          </div>
          <p className="text-gray-700 text-sm mt-4 font-medium">
            ✅ Acesso imediato • ✅ Garantia de 7 dias • ✅ Apenas R$27
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
