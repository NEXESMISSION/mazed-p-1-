import React from 'react';

interface AvailableLandCounterProps {
  count: number;
  variant?: 'default' | 'compact' | 'highlight';
  className?: string;
}

export function AvailableLandCounter({ 
  count, 
  variant = 'default',
  className = '' 
}: AvailableLandCounterProps) {
  // Color schemes for different variants
  const colorSchemes = {
    default: {
      container: 'bg-red-50 border border-red-200',
      text: 'text-red-700',
      count: 'text-red-800 font-bold'
    },
    compact: {
      container: 'bg-red-600',
      text: 'text-white',
      count: 'font-bold'
    },
    highlight: {
      container: 'bg-gradient-to-r from-red-500 to-orange-500 shadow-md',
      text: 'text-white',
      count: 'font-bold'
    }
  };

  const colors = colorSchemes[variant];
  
  // Determine styling based on variant
  if (variant === 'compact') {
    return (
      <div className={`${colors.container} ${colors.text} rounded-full px-3 py-1 inline-flex items-center ${className}`}>
        <span className="text-sm">
          <span className={colors.count}>{count}</span> parcelles restantes
        </span>
      </div>
    );
  }
  
  return (
    <div className={`${colors.container} ${colors.text} rounded-lg px-4 py-2 flex items-center justify-between ${className}`}>
      <div className="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <span>Disponibilité limitée</span>
      </div>
      <span className={`${colors.count} text-lg`}>{count} parcelles restantes</span>
    </div>
  );
}
