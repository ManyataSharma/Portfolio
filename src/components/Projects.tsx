import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ExternalLink, Code, Shield, Users, ShoppingCart, GitBranch, Building } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();

  const projects = [
    {
      icon: <Shield size={24} />,
      title: 'File Hider with OTP & Encryption',
      description: 'Secure desktop app using Java and JavaMail API. OTP-based authentication and file encryption.',
      tech: ['Java', 'JavaMail API', 'Encryption'],
      status: 'Completed'
    },
    {
      icon: <Users size={24} />,
      title: 'Online Poll Voting System',
      description: 'Built with JSP and Java Servlets. Real-time result display, MySQL backend, secure data handling.',
      tech: ['JSP', 'Java Servlets', 'MySQL'],
      status: 'Completed'
    },
    {
      icon: <Building size={24} />,
      title: 'Sheher Connect',
      description: 'Community-driven civic feedback platform. Real-time reporting and UI focused on local governance.',
      tech: ['React', 'Node.js', 'MongoDB'],
      status: 'Completed'
    },
    {
      icon: <ShoppingCart size={24} />,
      title: 'Amazon Clone',
      description: 'Full-stack e-commerce clone. Cart, authentication, responsive product UI.',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      status: 'In Progress'
    },
    {
      icon: <GitBranch size={24} />,
      title: 'GSSoC 2025 Contributions',
      description: 'Contributing to open-source projects under GirlScript Summer of Code. PRs and issues under review.',
      tech: ['Open Source', 'Various Technologies'],
      status: 'Ongoing'
    },
    {
      icon: <Code size={24} />,
      title: 'Jaaago – Co-founder & CTO',
      description: 'CivicTech startup for transparent issue reporting and tracking. Piloted in Jaipur with 300+ issues.',
      tech: ['Full Stack', 'CivicTech', 'Leadership'],
      status: 'Active'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div ref={ref} className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-center mb-4">
                  <div className="text-black mr-3 group-hover:scale-110 transition-transform duration-200">
                    {project.icon}
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    project.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                    project.status === 'Ongoing' ? 'bg-blue-100 text-blue-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <h3 className="font-bold text-lg mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-end">
                  <button className="flex items-center space-x-1 text-black hover:text-gray-600 transition-colors duration-200">
                    <span className="text-sm">View Details</span>
                    <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;