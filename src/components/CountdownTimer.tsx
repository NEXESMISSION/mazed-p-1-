import React, { useState, useEffect } from 'react';

export const CountdownTimer = () => {
  // Calculate target date (7 days from now)
  const calculateTargetDate = () => {
    const now = new Date();
    const targetDate = new Date(now);
    targetDate.setDate(now.getDate() + 7);
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
  const formattedDate = targetDate.toLocaleDateString('ar-SA', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="bg-gradient-to-r from-[#76B935] to-[#4D8F1C] text-white py-3 sm:py-4 px-4" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="text-center mb-2 w-full">
            <div className="mb-1 text-sm sm:text-base font-medium">
              <span className="hidden sm:inline">العرض الخاص: </span>
              <span>احجز قبل {formattedDate}</span>
            </div>
            <div className="flex justify-center items-center space-x-2 sm:space-x-4 rtl:space-x-reverse">
              <div className="flex flex-col items-center">
                <div className="text-xl sm:text-2xl font-bold">{formatNumber(timeLeft.days)}</div>
                <div className="text-xs sm:text-sm">أيام</div>
              </div>
              <div className="text-xl sm:text-2xl font-bold">:</div>
              <div className="flex flex-col items-center">
                <div className="text-xl sm:text-2xl font-bold">{formatNumber(timeLeft.hours)}</div>
                <div className="text-xs sm:text-sm">ساعات</div>
              </div>
              <div className="text-xl sm:text-2xl font-bold">:</div>
              <div className="flex flex-col items-center">
                <div className="text-xl sm:text-2xl font-bold">{formatNumber(timeLeft.minutes)}</div>
                <div className="text-xs sm:text-sm">دقائق</div>
              </div>
              <div className="text-xl sm:text-2xl font-bold">:</div>
              <div className="flex flex-col items-center">
                <div className="text-xl sm:text-2xl font-bold">{formatNumber(timeLeft.seconds)}</div>
                <div className="text-xs sm:text-sm">ثواني</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
