import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle form submission here
  //   console.log('Form submitted:', formData);
  // };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs
    .send(
      'service_fvici6r',        //  Service ID
      'template_00sztj8',       //  Template ID
      formData,                 //  form data
      '4qDFSHnwSIghThl1Y'       //  Public Key
    )
    .then(
      (result) => {
        console.log('Email successfully sent!', result.text);
        // alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          message: ''
        });
      },
      (error) => {
        console.log('Failed to send email.', error.text);
        // alert('Failed to send message. Please try again later.');
      }
    );
};


  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'info@prontobyte.ai',
      link: 'mailto:info@prontobyte.ai'
    },
    // {
    //   icon: Phone,
    //   title: 'Phone',
    //   details: '+254 782 908 709',
    //   link: '.........'
    // },
    {
      icon: MapPin,
      title: 'Office',
      details: 'Kilimani, Nairobi, Kenya',
      link: '#'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Fri: 8:00 AM - 5:00 PM',
      link: '#'
    }
  ];

  return (

    <section id="contact" className="relative py-20 bg-[#243c5a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-pulse ">
            Get In Touch
          </h2>
          <p className="text-xl text-[#9BD6C9] max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with technology? Let's discuss your project 
            and explore how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="custom-development">Custom Development</option>
                    <option value="cloud-solutions">Cloud Solutions</option>
                    <option value="mobile-development">Mobile Development</option>
                    <option value="data-analytics">Data Analytics</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="it-consulting">IT Consulting</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#253874]/75 to-[#9BD6C9]/25 border-2 border-solid border border-x-[#253874]/125 border-y-[#9BD6C9]/25  text-white py-4 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-[#253874]/25 to-[#9BD6C9]/75 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#253874]/25 to-[#9BD6C9]/75 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                      <a 
                        href={info.link}
                        className="text-white hover:text-blue-600 transition-colors duration-300"
                      >
                        {info.details}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Find Us</h3>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center border-x-4 border-y-2 border-solid border-x-[#253874]/125 border-y-[#253874]">
                <iframe
    className="w-full h-full border-0 rounded-lg"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.256562398083!2d36.78699975884978!3d-1.2855113268424825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a0dfd90fa55%3A0x37f5057a6f21bc7c!2sKilimani%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1750069396800!5m2!1sen!2ske"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-[#253874]/25 to-[#9BD6C9]/75 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-blue-100">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">48h</div>
                  <div className="text-blue-100">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">99%</div>
                  <div className="text-blue-100">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">5+</div>
                  <div className="text-blue-100">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[0] w-full h-8 pointer-events-none flex items-center">
  <div className="ml-[97.8%] h-[60vh] bg-[#243c5a] w-2"></div>
  <div className="flex-1"></div> {/* The 20% gap */}
</div>

 {/* Vertical Line with Gap */}
<div className="absolute top-[0] w-full h-8 pointer-events-none flex items-center">
  <div className="ml-[97.8%] h-[160vh] bg-[#9BD6C9] w-2"></div>
  <div className="flex-1"></div> {/* The 20% gap */}
</div>

  <div className="absolute bottom-[0] w-full h-8 pointer-events-none flex items-center">
  <div className="ml-[1.1%] h-[142.5vh] bg-[#9BD6C9] w-2"></div>
  <div className="flex-1"></div> {/* The 20% gap */}
</div>

    </section>
  );
};

export default Contact;