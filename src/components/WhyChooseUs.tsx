import React from 'react';
import { Shield, Zap, Users, Trophy } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "Proven Expertise",
      description: "Over a decade of experience delivering exceptional digital solutions"
    },
    {
      icon: <Zap className="h-12 w-12 text-blue-600" />,
      title: "Fast Delivery",
      description: "Efficient development process with quick turnaround times"
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Dedicated Support",
      description: "24/7 customer support and maintenance services"
    },
    {
      icon: <Trophy className="h-12 w-12 text-blue-600" />,
      title: "Award-Winning",
      description: "Recognized for excellence in digital innovation"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine innovation with reliability to deliver exceptional results for our clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{reason.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}