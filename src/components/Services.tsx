import React from 'react';
import { Code, Cloud, Smartphone, Database, Shield, Cog } from 'lucide-react';
import ZippingText from '../animations/ZippingText/zippingText';
import TurningText from '../animations/TurningText/turningText'


const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built to meet your specific business requirements and scale with your growth.',
      features: ['Web Applications', 'Enterprise Software', 'API Development', 'System Integration']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Migrate to the cloud and leverage scalable, secure, and cost-effective cloud infrastructure.',
      features: ['Cloud Migration', 'AWS/Azure Setup', 'DevOps', 'Cloud Security']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter']
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and business intelligence.',
      features: ['Data Warehousing', 'Business Intelligence', 'Machine Learning', 'Data Visualization']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with comprehensive security solutions and best practices.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Security Training']
    },
    {
      icon: Cog,
      title: 'IT Consulting',
      description: 'Strategic technology consulting to help you make informed decisions and optimize your IT infrastructure.',
      features: ['Technology Strategy', 'Digital Transformation', 'Process Optimization', 'Vendor Selection']
    }
  ];

  return (
    <section id="services" className="relative py-20 bg-[#243c5a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <ZippingText text="Our Services" />
          </h2>
          <p className="text-xl text-[#9BD6C9] max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to accelerate your business growth 
            and digital transformation journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200">
              <div className="mb-6">
                <div className="icon--zipping w-16 h-16 bg-gradient-to-r from-[#253874]/75 to-[#9BD6C9]/25 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                <ZippingText text={service.title} />
              </h3>
              
              {/* <div className="text-gray-600 mb-6 leading-relaxed"> */}
                <TurningText text={service.description} />
                {/* {service.description} */}
              {/* </div> */}
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    <ZippingText text={feature} />
                  </li>
                ))}
              </ul>
              {/* bg-gradient-to-r from-[#253874]/75 to-[#9BD6C9]/25 */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <a 
                  href="#contact" 
                  className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-300 group-hover:underline"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20 bg-gradient-to-r from-[#253874]/25 to-[#9BD6C9]/75 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Process</h3>
            <p className="text-blue-100 text-lg">
              A proven methodology that ensures successful project delivery
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your needs and goals' },
              { step: '02', title: 'Planning', description: 'Creating a detailed roadmap' },
              { step: '03', title: 'Development', description: 'Building your solution' },
              { step: '04', title: 'Delivery', description: 'Launch and ongoing support' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">{phase.step}</span>
                </div>
                <h4 className="text-xl font-bold mb-2">{phase.title}</h4>
                <p className="text-blue-100">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
        {/* Vertical Line with Gap */}
      {/* Vertical Line with Gap */}
<div className="absolute bottom-[0] w-full h-8 pointer-events-none flex items-center">
  <div className="ml-[1.1%] h-[300vh] bg-[#243c5a] w-2"></div>
  <div className="flex-1"></div> {/* The 20% gap */}
</div>

 {/* Vertical Line with Gap */}
<div className="absolute top-[0] w-full h-8 pointer-events-none flex items-center">
  <div className="ml-[97.8%] h-[350vh] bg-[#9BD6C9] w-2"></div>
  <div className="flex-1"></div> {/* The 20% gap */}
</div>
    </section>
  );
};

export default Services;