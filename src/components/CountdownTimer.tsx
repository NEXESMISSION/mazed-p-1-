import React, { useState, useEffect } from 'react';
import { initializeProductTimer, calculateTimeLeft, formatNumber } from '../utils/TimerUtils';

export const CountdownTimer = () => {
  // Product ID for this timer - matches the route parameter in App.tsx
  const productId = 's-plus-2-gremda';
  
  // Initialize timer with product ID to ensure persistence and unique timers per product
  const [timerDates, setTimerDates] = useState(() => initializeProductTimer(productId));
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const updateTimeLeft = () => {
      setTimeLeft(calculateTimeLeft(timerDates.endDate));
    };

    updateTimeLeft();
    const timer = setInterval(updateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [timerDates.endDate]);

  // Format date to display
  const formattedDate = timerDates.endDate.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 sm:py-4 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <div className="text-center mb-2 sm:mb-0">
            <div className="mb-1 text-sm sm:text-base font-medium">
              <span className="hidden sm:inline">Offre spéciale: </span>
              <span>Réservez avant le {formattedDate}</span>
            </div>
            <div className="flex justify-center items-center space-x-2 sm:space-x-4">
              <div className="flex flex-col items-center">
                <div className="text-xl sm:text-2xl font-bold">{formatNumber(timeLeft.days)}</div>
                <div className="text-xs sm:text-sm">JOURS</div>
              </div>
              <div className="text-xl sm:text-2xl font-bold">:</div>
              <div className="flex flex-col items-center">
                <div className="text-xl sm:text-2xl font-bold">{formatNumber(timeLeft.hours)}</div>
                <div className="text-xs sm:text-sm">HEURES</div>
              </div>
              <div className="text-xl sm:text-2xl font-bold">:</div>
              <div className="flex flex-col items-center">
                <div className="text-xl sm:text-2xl font-bold">{formatNumber(timeLeft.minutes)}</div>
                <div className="text-xs sm:text-sm">MIN</div>
              </div>
              <div className="text-xl sm:text-2xl font-bold">:</div>
              <div className="flex flex-col items-center">
                <div className="text-xl sm:text-2xl font-bold">{formatNumber(timeLeft.seconds)}</div>
                <div className="text-xs sm:text-sm">SEC</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
