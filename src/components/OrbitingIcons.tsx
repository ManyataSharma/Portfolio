import React from 'react';

const OrbitingIcons: React.FC = () => {
  const techIcons = [
    { name: 'React', symbol: '⚛️', delay: '0s', size: 'text-lg' },
    { name: 'JavaScript', symbol: 'JS', delay: '2s', size: 'text-xs' },
    { name: 'TypeScript', symbol: 'TS', delay: '4s', size: 'text-xs' },
    { name: 'Node.js', symbol: 'Node', delay: '6s', size: 'text-xs' },
    { name: 'Git', symbol: 'Git', delay: '8s', size: 'text-xs' },
    { name: 'HTML', symbol: 'HTML', delay: '10s', size: 'text-xs' },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
      <div className="relative w-64 h-64">
        {techIcons.map((tech, index) => (
          <div
            key={tech.name}
            className={`absolute w-10 h-10 bg-white border-2 border-black rounded-full flex items-center justify-center font-bold shadow-lg animate-orbit ${tech.size}`}
            style={{
              animationDelay: tech.delay,
              animationDuration: '15s',
              transformOrigin: '32px 32px',
              top: '50%',
              left: '50%',
              marginTop: '-20px',
              marginLeft: '-20px',
            }}
          >
            {tech.symbol}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrbitingIcons;