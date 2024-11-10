// LoadingSpinner.tsx
import React from "react";

interface LoadingSpinnerProps {
  size?: number; // The overall size of the loading spinner
  color?: string; // The color of the loading spinner
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 32,
  color = "purple-500",
}) => {
  return (
    <div className="flex items-center space-x-2">
      {[...Array(16)].map((_, index) => (
        <div
          key={index}
          className={`animate-spin rounded-full border-t-2 border-${color}`}
          style={{
            width: size - index * 4,
            height: size - index * 4,
            borderTopColor: `rgba(128, 0, 128, ${1 - index * 0.2})`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default LoadingSpinner;
