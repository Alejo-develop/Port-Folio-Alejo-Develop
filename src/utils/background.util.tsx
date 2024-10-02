import React, { ReactNode } from "react";


interface BackgroundGradientProps {
  children: ReactNode; 
}

const BackgroundGradient: React.FC<BackgroundGradientProps> = ({
  children,
}) => {
  return (
    <div
    className="min-h-screen bg-black -z-10"
  >
      {children}
    </div>
  );
};

export default BackgroundGradient;
