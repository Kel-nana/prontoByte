import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import ZippingText from '../animations/ZippingText/zippingText';
import BulgeText from '../animations/BulgeText/BulgeText';
import Cloud_Solutions from '../assets/Cloud_Solutions.jpeg';
import Data_Analytics from '../assets/Data_Analytics.jpeg';
import Enterprise_Software from '../assets/Enterprise_Software.jpeg';
import IoT_Development from '../assets/IoT_Development.jpeg';
// import Mobile_Development from '../assets/Mobile_Development.jpeg';
import Web_Development from '../assets/Web_Development.jpeg';
import Hosting_Services from '../assets/Hosting_Services.png';
import Automation from '../assets/Automation.png';
import Cybersecurity from '../assets/Cybersecurity.jpg';


const Portfolio = () => {
  const projects = [
      {
    title: 'Workflow Automation for Legal Firm',
    category: 'Process Automation',
    description: 'Streamlined case intake, document generation, and client notifications through no-code automation tools.',
    image: Automation,
    technologies: ['Zapier', 'Make.com', 'Google Workspace', 'Power Automate'],
    link: '#',
    github: '#'
  },
  {
    title: 'Secure Email & Domain Hosting Setup',
    category: 'Email & Domain Hosting',
    description: 'Business-grade email setup with domain registration, DNS management, and spam protection for a growing SME.',
    image: Hosting_Services,
    technologies: ['Zoho Mail', 'Namecheap', 'Cloudflare', 'Google Domains'],
    link: '#',
    github: '#'
  },
  {
    title: 'Endpoint Security Deployment',
    category: 'Cybersecurity',
    description: 'Company-wide rollout of endpoint protection and backup strategy to guard against ransomware and data loss.',
    image: Cybersecurity,
    technologies: ['Bitdefender EDR', 'Acronis', 'Google Workspace Backup', 'EDR Dashboard'],
    link: '#',
    github: '#'
  },
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'A modern e-commerce platform with real-time inventory management, integrated payments, and a data-rich analytics dashboard.',
    image: Web_Development,
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
    github: '#'
  },
  // {
  //   title: 'Healthcare Management System',
  //   category: 'Enterprise Software',
  //   description: 'A secure and scalable hospital management solution featuring digital patient records, staff scheduling, and automated billing.',
  //   image: Enterprise_Software,
  //   technologies: ['Angular', 'Java', 'PostgreSQL', 'AWS'],
  //   link: '#',
  //   github: '#'
  // },
  // {
  //   title: 'Financial Analytics Dashboard',
  //   category: 'Data Analytics',
  //   description: 'Interactive dashboard for real-time financial insights, trend forecasting, and KPI tracking with advanced data visualization.',
  //   image: Data_Analytics,
  //   technologies: ['Python', 'Django', 'D3.js', 'TensorFlow'],
  //   link: '#',
  //   github: '#'
  // },
  {
    title: 'Cloud Infrastructure Migration',
    category: 'Cloud Solutions',
    description: 'Full migration of on-premise systems to AWS Cloud, improving performance, scalability, and disaster recovery.',
    image: Cloud_Solutions,
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    link: '#',
    github: '#'
  },
  {
    title: 'IoT Monitoring System',
    category: 'IoT Development',
    description: 'An industrial IoT solution for live equipment monitoring and predictive maintenance with smart alerts.',
    image: IoT_Development,
    technologies: ['IoT', 'MQTT', 'InfluxDB', 'Grafana'],
    link: '#',
    github: '#'
  }

];


const categories = [
  'All',
  'Cybersecurity',
  'Process Automation',
  'Email & Domain Hosting',
  'Web Development',
  // 'Data Analytics',
  'Cloud Solutions',
  // 'Enterprise Software',
  'IoT Development'
];

  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-[#9BD6C9]/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Portfolio
          </h2> */}
          <BulgeText text="Our Portfolio" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"/>

          <p className="text-xl text-[#243c5a] max-w-3xl mx-auto leading-relaxed">
            Explore our recent projects and see how we've helped businesses 
            achieve their digital transformation goals.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-[#253874]/98 to-[#9BD6C9]/2 border-solid border-4 border-x-[#253874]/125 border-y-[#9BD6C9]/25 text-white shadow-lg'
                  : 'bg-gradient-to-r from-[#253874]/75 to-[#9BD6C9]/25 border-2 border-solid border border-x-[#253874]/125 border-y-[#9BD6C9]/25  border border-gray-200'
              }`}
            >
              {/* {category} */}
              <BulgeText text={category} />
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.link}
                    className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4 text-gray-700" />
                  </a>
                  <a 
                    href={project.github}
                    className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-300"
                  >
                    <Github className="w-4 h-4 text-gray-700" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  <ZippingText text={project.title} />
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded"
                    >
                      {/* {tech} */}
                      <ZippingText text={tech} />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to start your next project?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-gradient-to-r from-[#253874]/75 to-[#9BD6C9]/25 border-2 border-solid border border-x-[#253874]/125 border-y-[#9BD6C9]/25 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <BulgeText text= "Let's Work Together" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;