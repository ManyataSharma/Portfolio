import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div ref={ref} className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Education</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="text-black mr-4">
                <GraduationCap size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Vivekananda Global University</h3>
                <p className="text-gray-600">B.Tech in Computer Science</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center">
                <Calendar size={20} className="text-black mr-3" />
                <div>
                  <p className="font-medium">Passing Year</p>
                  <p className="text-gray-600">2027</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin size={20} className="text-black mr-3" />
                <div>
                  <p className="font-medium">Current Status</p>
                  <p className="text-gray-600">Second Year Student</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-700">
                Actively pursuing Computer Science Engineering while gaining hands-on experience 
                through open-source contributions, internships, and building real-world projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;