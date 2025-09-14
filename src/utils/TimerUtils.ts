// TimerUtils.ts - Utility functions for product timers

/**
 * Creates a start date (yesterday) and end date (10 days from yesterday)
 * @param productId Unique identifier for the product
 * @returns Object containing start and end dates for the timer
 */
export const initializeProductTimer = (productId: string): { startDate: Date; endDate: Date } => {
  // Check if timer data exists in localStorage
  const savedTimerData = localStorage.getItem(`timer-${productId}`);
  
  if (savedTimerData) {
    // If timer data exists, parse and return it
    const timerData = JSON.parse(savedTimerData);
    return {
      startDate: new Date(timerData.startDate),
      endDate: new Date(timerData.endDate)
    };
  } else {
    // If no timer data exists, create new start and end dates
    // Start date = yesterday
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 1);
    
    // End date = 10 days after yesterday (9 days from today)
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 10);
    
    // Save timer data to localStorage
    const timerData = {
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString()
    };
    localStorage.setItem(`timer-${productId}`, JSON.stringify(timerData));
    
    return { startDate, endDate };
  }
};

/**
 * Calculate the time remaining between now and the end date
 * @param endDate End date of the timer
 * @returns Object containing days, hours, minutes, and seconds remaining
 */
export const calculateTimeLeft = (endDate: Date): { 
  days: number; 
  hours: number; 
  minutes: number; 
  seconds: number;
} => {
  const difference = endDate.getTime() - new Date().getTime();
  
  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    return { days, hours, minutes, seconds };
  }
  
  return { days: 0, hours: 0, minutes: 0, seconds: 0 };
};

/**
 * Format a number to ensure it's displayed with two digits (e.g., 01, 02)
 * @param num Number to format
 * @returns Formatted number as string with leading zero if needed
 */
export const formatNumber = (num: number): string => {
  return num < 10 ? `0${num}` : `${num}`;
};
