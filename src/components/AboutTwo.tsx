import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Code, Smartphone, Cloud, Shield, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeSet, setActiveSet] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveSet((prev) => (prev === 0 ? 1 : 0));
        setIsTransitioning(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Logo slider data
  const allClients = [
    // First Set
    { id: 1, name: 'App Innovators', industry: 'App Development' },
    { id: 2, name: 'Tech Pioneers', industry: 'Software Solutions' },
    { id: 3, name: 'Cloud Masters', industry: 'Cloud Services' },
    { id: 4, name: 'Secure Apps', industry: 'Cybersecurity' },
    { id: 5, name: 'Mobile Experts', industry: 'Mobile Development' },
    // Second Set
    { id: 6, name: 'Data Wizards', industry: 'Data Analytics' },
    { id: 7, name: 'AI Visionaries', industry: 'Artificial Intelligence' },
    { id: 8, name: 'Web Gurus', industry: 'Web Development' },
    { id: 9, name: 'IoT Innovators', industry: 'Internet of Things' },
    { id: 10, name: 'Blockchain Pros', industry: 'Blockchain Technology' },
  ];

  const firstSet = allClients.slice(0, 5);
  const secondSet = allClients.slice(5, 10);
  const currentSet = activeSet === 0 ? firstSet : secondSet;

  const features = [
    {
      icon: Code,
      title: "Custom App Development",
      description: "We build custom applications tailored to your business needs, ensuring high performance and scalability."
    },
    {
      icon: Smartphone,
      title: "Mobile App Solutions",
      description: "Our mobile app solutions are designed to provide a seamless user experience across all devices."
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "Leverage the power of cloud technology to enhance your app's performance and reliability."
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "We create responsive and engaging websites that drive business growth and user engagement."
    }
  ];

  // Logo Slider Component
  const LogoSlider = () => (
    <div className="w-full bg-slate-900 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4 relative inline-block">
            <span className="relative z-10">Trusted by Industry Leaders</span>
            <div className="absolute -inset-1 bg-blue-500/20 blur-lg"></div>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Empowering businesses through innovative app and web development
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 grid grid-cols-8 gap-2 opacity-10">
            {[...Array(32)].map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-blue-500/30 rounded-lg"
                style={{
                  animation: `pulse ${2 + (i % 3)}s infinite ${i * 0.1}s`,
                }}
              />
            ))}
          </div>

          <div className="relative">
            <div
              className={`flex justify-center gap-8 transition-all duration-1000 ${
                isTransitioning
                  ? 'opacity-0 transform translate-x-full'
                  : 'opacity-100 transform translate-x-0'
              }`}
            >
              {currentSet.map((client) => (
                <div
                  key={client.id}
                  className="group relative"
                >
                  <div className="w-32 h-32 bg-slate-800 rounded-xl flex items-center justify-center border border-slate-700 group-hover:border-blue-500 transition-all duration-300">
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                        {client.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-white font-medium">{client.name}</h3>
                    <p className="text-sm text-slate-400">{client.industry}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12 gap-2">
          <div
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSet === 0 ? 'bg-blue-500' : 'bg-slate-700'
            }`}
          />
          <div
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSet === 1 ? 'bg-blue-500' : 'bg-slate-700'
            }`}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-blue-500/10 rounded-full"
              style={{
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `pulse ${3 + Math.random() * 4}s infinite ${Math.random() * 2}s`,
                filter: 'blur(50px)',
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative">
        {/* Hero Section */}
        <div className="container mx-auto px-4 pt-20 pb-12">
          <div className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-5xl font-bold text-white mb-6 relative">
              <span className="relative z-10">Transforming Businesses Through App and Web Development</span>
              <div className="absolute -inset-2 bg-blue-500/20 blur-xl"></div>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              At Capps Consultation, we leverage cutting-edge technology to create impactful app and web solutions that drive business success. Our team of experts is dedicated to delivering high-quality applications tailored to your unique needs.
            </p>
            <button 
              onClick={() => navigate('/book-consultation')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl 
              hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group">
              <span className="flex items-center gap-2">
                Schedule Consultation
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`backdrop-blur-lg bg-slate-800/50 p-6 rounded-xl border border-slate-700 
                  hover:border-blue-500/50 transition-all duration-500 transform
                  ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="mb-4">
                  <feature.icon className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Integrated Logo Slider */}
        <LogoSlider />

        {/* Stats Section */}
        <div className="w-full px-4 py-16 bg-gradient-to-r from-violet-600 via-teal-50 to-gray-800">
          <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "98%", label: "Client Satisfaction" },
              { value: "200+", label: "Projects Delivered" },
              { value: "50+", label: "Industry Experts" },
              { value: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute -inset-2 bg-blue-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <h4 className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</h4>
                  <p className="text-gray-700">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;