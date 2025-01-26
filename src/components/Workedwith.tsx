import React, { useState, useEffect } from 'react';

const AILogoSlider = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeSet, setActiveSet] = useState(0);

  // Sample client data - replace with actual clients
  const allClients = [
    // First Set
    { id: 1, name: 'Neural Labs', industry: 'AI Research' },
    { id: 2, name: 'Deep Mind Tech', industry: 'Machine Learning' },
    { id: 3, name: 'Data Nexus', industry: 'Big Data' },
    { id: 4, name: 'AI Solutions', industry: 'Enterprise AI' },
    { id: 5, name: 'Future Systems', industry: 'Robotics' },
    // Second Set
    { id: 6, name: 'Smart Analytics', industry: 'Data Science' },
    { id: 7, name: 'Cloud AI', industry: 'Cloud Computing' },
    { id: 8, name: 'Vision Corp', industry: 'Computer Vision' },
    { id: 9, name: 'Neural Networks', industry: 'Deep Learning' },
    { id: 10, name: 'AI Security', industry: 'Cybersecurity' },
  ];

  // Split clients into two sets
  const firstSet = allClients.slice(0, 5);
  const secondSet = allClients.slice(5, 10);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveSet((prev) => (prev === 0 ? 1 : 0));
        setIsTransitioning(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentSet = activeSet === 0 ? firstSet : secondSet;

  return (
    <div className="w-full bg-slate-900 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4 relative inline-block">
            <span className="relative z-10">Trusted by Innovation Leaders</span>
            <div className="absolute -inset-1 bg-blue-500/20 blur-lg"></div>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Empowering the future through AI collaboration
          </p>
        </div>

        <div className="relative">
          {/* Animated background elements */}
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
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {/* Logo placeholder */}
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

        {/* Progress indicator */}
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
};

export default AILogoSlider;