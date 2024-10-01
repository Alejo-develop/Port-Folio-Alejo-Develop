import React, { ReactNode } from "react";
import background from '../assets/gradienteFondo.jpg'

interface BackgroundGradientProps {
  children: ReactNode; 
}

const BackgroundGradient: React.FC<BackgroundGradientProps> = ({
  children,
}) => {
  return (
    <div
    className="h-screen bg-cover bg-center -z-10"
    style={{
      backgroundImage: `url(${background})`,
      backgroundPosition: 'center', 
      backgroundSize: '99%',
    }}
  >
      {children}
    </div>
  );
};

export default BackgroundGradient;
