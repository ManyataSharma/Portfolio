import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      color: 'bg-blue-100'
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'Java', 'Spring Boot'],
      color: 'bg-green-100'
    },
    {
      title: 'Database',
      skills: ['MySQL', 'MongoDB'],
      color: 'bg-yellow-100'
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Figma'],
      color: 'bg-purple-100'
    },
    {
      title: 'Learning',
      skills: ['TypeScript', 'REST APIs', 'DSA in Java'],
      color: 'bg-pink-100'
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div ref={ref} className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="font-bold text-xl mb-4 text-center">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-2 rounded-full text-sm font-medium ${category.color} hover:scale-105 transition-transform duration-200 cursor-pointer`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;