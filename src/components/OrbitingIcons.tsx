import React from 'react';

const OrbitingIcons: React.FC = () => {
  const techIcons = [
    { name: 'HTML', symbol: 'HTML', delay: '0s' },
    { name: 'CSS', symbol: 'CSS', delay: '1s' },
    { name: 'JS', symbol: 'JS', delay: '2s' },
    { name: 'React', symbol: 'React', delay: '3s' },
    { name: 'Node', symbol: 'Node', delay: '4s' },
    { name: 'Git', symbol: 'Git', delay: '5s' },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {techIcons.map((tech, index) => (
        <div
          key={tech.name}
          className="absolute w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold animate-orbit"
          style={{
            animationDelay: tech.delay,
            transformOrigin: '120px 120px',
            top: '50%',
            left: '50%',
            marginTop: '-96px',
            marginLeft: '-24px',
          }}
        >
          {tech.symbol}
        </div>
      ))}
    </div>
  );
};

export default OrbitingIcons;