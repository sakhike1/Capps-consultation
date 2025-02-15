import React from 'react';
import { Check, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import useNotificationStore from '../store/notificationStore';

export default function PricingPackages() {
  const { addNotification } = useNotificationStore();
  
  const packages = [
    {
      name: 'Basic',
      price: 8000,
      features: [
        'UI/UX Design Consultation',
        'Basic Frontend Development',
        '2 Revision Rounds',
        '30-Day Support',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: 50000,
      features: [
        'Advanced UI/UX Design',
        'Full Frontend Development',
        'Unlimited Revisions',
        '90-Day Support',
        'Performance Optimization',
        'SEO Integration',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 150000,
      features: [
        'Complete Design System',
        'Full-Stack Development',
        'Priority Support',
        '1-Year Maintenance',
        'Custom Integrations',
        'Advanced Analytics',
        'Team Training',
      ],
      popular: false,
    },
  ];

  const handlePackageSelect = (pkg: typeof packages[0]) => {
    addNotification({
      title: 'Payment Required',
      message: `Please complete the payment for ${pkg.name} package (R${pkg.price})`,
      type: 'billing'
    });
  };

  return (
    <div className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-pink-400 via-slate-100 to-indigo-200 hover:shadow-2xl rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-8 text-gray-800">Available Packages</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className={`rounded-xl p-6 ${
              pkg.popular
                ? 'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-pink-400 via-slate-100 to-indigo-200 text-white '
                : 'bg-gray-50 text-gray-800'
            }`}
          >
            {pkg.popular && (
              <div className="flex items-center gap-1 mb-4">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="text-sm text-slate-900 font-medium">Most Popular</span>
              </div>
            )}
            <h3 className="text-xl text-black font-bold mb-2">{pkg.name}</h3>
            <div className="mb-4">
              <span className="text-3xl text-black font-bold">R{pkg.price}</span>
              <span className={pkg.popular ? 'text-black' : 'text-gray-500'}>
                /project
              </span>
            </div>
            <ul className="space-y-3 mb-6">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex  text-black items-center gap-2">
                  <Check className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => handlePackageSelect(pkg)}
              className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                pkg.popular
                  ? 'bg-white text-black hover:bg-gray-100'
                  : 'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-pink-400 via-slate-100 to-indigo-200 text-black hover:shadow-2xl hover:bg-blue-700'
              }`}
            >
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}