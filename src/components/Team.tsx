import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';

const Team = () => {
  const team = [
    {
      name: 'Dennis Kailikia',
      role: 'C.E.O',
      bio: 'Role : .........................................................',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      skills: [],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Dennis Wambugu',
      role: 'Sales Director',
      bio: 'Role : .........................................................',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      skills: [],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Kelvin Irungu',
      role: 'Account Manager',
      bio: 'Role : ........................................................ ',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      skills: [],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    }
    // {
    //   name: 'Emily Davis',
    //   role: 'Data Scientist',
    //   bio: 'Analytics expert with expertise in machine learning, data visualization, and business intelligence.',
    //   image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
    //   skills: ['Python', 'TensorFlow', 'SQL', 'Tableau'],
    //   social: {
    //     linkedin: '#',
    //     twitter: '#',
    //     github: '#'
    //   }
    // }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our diverse team of experts brings together years of experience 
            and passion for creating exceptional technology solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="relative mb-6">
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex space-x-2 bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={member.social.linkedin}
                      className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a 
                      href={member.social.twitter}
                      className="p-2 text-gray-600 hover:text-blue-400 transition-colors duration-300"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a 
                      href={member.social.github}
                      className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-center space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>

                <div className="flex flex-wrap gap-2 justify-center">
                  {member.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="text-xs font-medium text-gray-500 bg-gray-200 px-2 py-1 rounded group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Join Our Team</h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion 
            for technology and innovation. Explore career opportunities with us.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            View Open Positions
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;