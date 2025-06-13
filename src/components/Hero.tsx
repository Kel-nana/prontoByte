// import React from 'react';
import { ArrowRight, Code, Database, Shield } from 'lucide-react';
import heroBg from '../assets/hero_bg.jpeg';

// 1️⃣ Feature Icons Data
const featureIcons = [
  {
    icon: Code,
    label: 'Development',
    colorClass: 'text-blue-400',
  },
  {
    icon: Database,
    label: 'Data Solutions',
    colorClass: 'text-purple-400',
  },
  {
    icon: Shield,
    label: 'Security',
    colorClass: 'text-indigo-400',
  },
];

// 2️⃣ Cycling Text Data
const cyclingText = ['For You', 'Smarter', 'Every Time'];

// 3️⃣ Stats Data
const statsData = [
  { value: '50+', label: 'Projects Completed' },
  { value: '25+', label: 'Happy Clients' },
  { value: '5+', label: 'Years Experience' },
  { value: '24/7', label: 'Support' },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-[#172d2cc9]"></div>
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${heroBg})` }}></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto pt-20 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-[#9BD6C9] leading-tight">
              We Make
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                IT Work
              </span>
            </h1>

            {/* Cycling Text */}
            <div className="content mx-auto mt-4">
              <div className="content__container inline-block relative text-2xl md:text-3xl text-white font-semibold">
                <p className="content__container__text inline-block">—&nbsp;</p>
                <ul className="content__container__list inline-block list-none m-0 p-2">
                  {cyclingText.map((text, index) => (
                    <li
                      key={index}
                      className="content__container__list__item"
                    >
                      {text}
                    </li>
                  ))}
                </ul>
                <p className="content__container__text content__container__text_right inline-block">
                  —&nbsp;
                </p>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-[#9BD6C9] max-w-3xl mx-auto leading-relaxed">
              Transforming businesses through innovative technology solutions,
              expert consulting, and cutting-edge development services.
            </p>
          </div>

          {/* Feature Icons */}
          <div className="flex justify-center space-x-8 md:space-x-12">
            {featureIcons.map(({ icon: Icon, label, colorClass }, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 group"
              >
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full group-hover:bg-white/20 transition-all duration-300">
                  <Icon className={`w-8 h-8 ${colorClass}`} />
                </div>
                <span className="text-sm text-gray-300">{label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#services"
              className="group bg-gradient-to-r from-[#253874]/25 to-[#9BD6C9]/75 border-2 border-solid border border-x-[#253874]/125 border-y-[#9BD6C9]/25 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#portfolio"
              className="bg-gradient-to-r from-[#9BD6C9]/75 to-[#253874]/25 group border-2 border-solid border border-x-[#253874]/125 border-y-[#9BD6C9]/25  text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              View Our Work
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20">
            {statsData.map(({ value, label }, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">
                  {value}
                </div>
                <div className="text-gray-300">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-10 h-14 bg-gradient-to-r from-[#253874]/25 to-[#9BD6C9]/75 rounded-full flex justify-center">
          <div className="w-1 h-4 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
