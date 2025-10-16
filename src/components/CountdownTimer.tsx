import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 14,
    seconds: 37
  });

  useEffect(() => {
    const sessionKey = 'countdown_timer_start';
    const sessionStart = sessionStorage.getItem(sessionKey);

    if (!sessionStart) {
      sessionStorage.setItem(sessionKey, Date.now().toString());
    }

    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          hours = 0;
          minutes = 14;
          seconds = 37;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-red-600 text-white p-4 rounded-lg text-center shadow-lg">
      <div className="flex items-center justify-center mb-2">
        <Clock size={20} className="mr-2" />
        <span className="font-bold text-sm">⏰ ATENÇÃO: Oferta especial expira em:</span>
      </div>
      <p className="text-xs mb-2 opacity-90">Apenas 23 vagas restantes neste preço</p>
      <div className="flex justify-center space-x-4">
        <div className="bg-white/20 rounded-lg p-2 min-w-[50px]">
          <div className="text-2xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
          <div className="text-xs">HORAS</div>
        </div>
        <div className="bg-white/20 rounded-lg p-2 min-w-[50px]">
          <div className="text-2xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
          <div className="text-xs">MIN</div>
        </div>
        <div className="bg-white/20 rounded-lg p-2 min-w-[50px]">
          <div className="text-2xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
          <div className="text-xs">SEG</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;