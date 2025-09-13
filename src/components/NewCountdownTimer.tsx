import React, { useState, useEffect } from 'react';

export const NewCountdownTimer = () => {
  // Calculate target date (10 days from now) - Reset for the new product
  const calculateTargetDate = () => {
    const now = new Date();
    const targetDate = new Date(now);
    targetDate.setDate(now.getDate() + 10);
    return targetDate;
  };

  const [targetDate] = useState(calculateTargetDate());
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Format to ensure two digits (e.g., 01, 02, etc.)
  const formatNumber = (num: number) => {
    return num < 10 ? `0${num}` : num;
  };

  // Format date to display
  const formattedDate = targetDate.toLocaleDateString('fr-FR', {
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
