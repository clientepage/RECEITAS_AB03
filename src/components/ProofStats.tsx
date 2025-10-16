import React from 'react';
import { Moon, Heart, Brain } from 'lucide-react';

const ProofStats: React.FC = () => {
  const stats = [
    {
      icon: Moon,
      percentage: '89%',
      title: 'DORMEM MELHOR',
      description: '1.923 pessoas relataram melhora na insônia'
    },
    {
      icon: Heart,
      percentage: '85%',
      title: 'ALÍVIO DE SINTOMAS',
      description: '2.847 pessoas eliminaram coceiras e alergias'
    },
    {
      icon: Brain,
      percentage: '67%',
      title: 'MENOS ANSIEDADE',
      description: '3.156 pessoas reduziram crises de pânico'
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white to-natural-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-natural-900 mb-4 leading-tight">
              Por Que <span className="text-natural-600">27.142 Brasileiros</span> Confiam Nessas Receitas?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-natural-100 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="bg-natural-100 rounded-full p-4">
                      <Icon size={40} className="text-natural-600" />
                    </div>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-natural-900 mb-2">
                    {stat.percentage}
                  </div>
                  <h3 className="text-xl font-bold text-natural-800 mb-3">
                    {stat.title}
                  </h3>
                  <p className="text-natural-700 text-sm md:text-base">
                    {stat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofStats;
