import React from 'react';
import { Target, Users, Award, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We are committed to delivering exceptional technology solutions that drive business growth and innovation.'
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Our clients success is our success. We build lasting partnerships through trust and exceptional service.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of technology trends to provide cutting-edge solutions for modern challenges.'
    }
  ];

  return (
    <section id="about" className="relative py-20 bg-[#9BD6C9]/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text_perspective">
            About ProntoByte
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a technology consulting company dedicated to helping businesses 
            leverage the power of modern technology to achieve their goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Transforming Ideas into Digital Reality
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded with a vision to bridge the gap between complex technology and business needs, 
              ProntoByte has grown into a trusted partner for organizations seeking digital transformation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our team of experienced professionals combines technical expertise with business acumen 
              to deliver solutions that not only work but drive measurable results. We believe in the 
              power of technology to transform businesses and improve lives.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                Custom Development
              </div>
              <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                Cloud Solutions
              </div>
              <div className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
                Digital Transformation
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-[#253874]/75 to-[#9BD6C9]/25 rounded-2xl p-8 text-white">
              <div className="h-full flex flex-col justify-center space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold">5+</div>
                  <div className="text-[#243c5a] font-black">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold">50+</div>
                  <div className="text-[#243c5a] font-black">Successful Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold">25+</div>
                  <div className="text-[#243c5a] font-black">Satisfied Clients</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center">
              <Award className="w-12 h-12 text-yellow-800" />
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#253874]/75 to-[#9BD6C9]/25 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Vertical Line with Gap */}
<div className="absolute bottom-[0] w-full h-8 pointer-events-none flex items-center">
  <div className="ml-[1.1%] h-[200vh] bg-[#243c5a] w-2"></div>
  <div className="flex-1"></div> {/* The 20% gap */}
</div>

    </section>
  );
};

export default About;