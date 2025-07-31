import React from 'react';

const BackgroundAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#f8f9fa', stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: '#e9ecef', stopOpacity: 0.4 }} />
          </linearGradient>
        </defs>
        
        {/* Floating Wave Lines */}
        <path
          d="M0,300 Q250,200 500,300 T1000,300 L1000,0 L0,0 Z"
          fill="url(#grad1)"
          className="animate-wave-1"
        />
        <path
          d="M0,400 Q300,350 600,400 T1200,400 L1200,0 L0,0 Z"
          fill="url(#grad1)"
          className="animate-wave-2"
          opacity="0.6"
        />
        <path
          d="M0,500 Q200,450 400,500 T800,500 L800,0 L0,0 Z"
          fill="url(#grad1)"
          className="animate-wave-3"
          opacity="0.4"
        />
      </svg>
    </div>
  );
};

export default BackgroundAnimation;