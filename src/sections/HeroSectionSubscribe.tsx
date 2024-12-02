import { useState } from 'react';
import { gift } from '../assets/images';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Subscribe = () => {
    AOS.init();
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the email submission logic here
        console.log("Email submitted:", email);
        // Clear the input after submission if needed
        setEmail('');
    };

    return (
        <div className="font-[sans-serif] px-6 py-16 bg-gradient-to-t from-gray-300 via-gray-50 to-gray-50">
      <div className="text-center max-w-3xl max-md:max-w-md mx-auto">
        <p className="text-sm font-bold text-blue-600 mb-4"><span className="rotate-90 inline-block mr-2">|</span> ALL IN ONE IN READYMADEUI</p>
        <h2 className="text-gray-800 md:text-5xl text-3xl font-extrabold md:!leading-[55px]">Call To Action Section, Elevate Your Experience</h2>
        <div className="mt-8">
          <p className="text-base text-gray-500 leading-relaxed">Upgrade to our premium plan and unlock a world of possibilities. Enjoy exclusive features, enhanced performance, and a seamless journey towards success.</p>
        </div>

        <div className="bg-white mt-12 flex px-1 py-1.5 rounded-full shadow-[0_5px_22px_-8px_rgba(93,96,127,0.2)] md:w-4/5 mx-auto overflow-hidden">
          <input type='email' placeholder='Enter your email' className="w-full outline-none bg-white pl-4 text-gray-800 text-sm" />
          <button type='button'
            className="bg-blue-600 hover:bg-blue-700 transition-all text-white text-sm rounded-full px-4 py-2.5">Subscribe</button>
        </div>
      </div>
    </div>
    );
};

export default Subscribe;
