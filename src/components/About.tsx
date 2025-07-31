import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Award, Users, Trophy, Target } from 'lucide-react';

const About: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();

  const achievements = [
    {
      icon: <Users size={24} />,
      title: 'Vice President',
      subtitle: 'VGU Toastmasters Club'
    },
    {
      icon: <Target size={24} />,
      title: 'Student Coordinator',
      subtitle: 'Training & Placement Cell'
    },
    {
      icon: <Trophy size={24} />,
      title: 'Top 10 Performer',
      subtitle: 'Teachnook Web Dev'
    },
    {
      icon: <Award size={24} />,
      title: 'Shark Tank VGU 4.0',
      subtitle: 'Top 6'
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div ref={ref} className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">About Me</h2>
          
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              I'm a second-year B.Tech CSE student and a passionate full-stack developer who loves 
              turning ideas into scalable and user-friendly applications. Recently selected as a 
              Contributor for GirlScript Summer of Code (GSSoC) 2025, I actively contribute to 
              open-source communities while also building projects that solve real-world problems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="flex justify-center mb-4 text-black">
                  {achievement.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{achievement.title}</h3>
                <p className="text-gray-600 text-sm">{achievement.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;