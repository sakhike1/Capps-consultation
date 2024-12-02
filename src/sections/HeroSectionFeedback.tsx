import { useState, useEffect } from "react";
import { review, reviewers, reviews } from "../assets/images";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  AOS.init();
  const testimonials = [
    {
      avatar: review,
      name: "Martin Escobar",
      title: "App Developer",
      quote: "Working with Skipaman's development team was a game-changer! They delivered a flawless app with top-notch functionality and performance. 🚀",
    },
    {
      avatar: reviewers,
      name: "Angela Stian",
      title: "Mobile App Designer",
      quote: "I’m thrilled with the app Skipaman developed! The design and usability are spot on, making my user experience seamless. Can’t wait to see the future updates! 🙌",
    },
    {
      avatar: reviews,
      name: "Karim Ahmed",
      title: "Tech Enthusiast",
      quote: "The app Skipaman developed exceeded all my expectations! From smooth navigation to fast performance, it's a must-have. 🏆",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Automatically cycle through testimonials every 10 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 10000); // Change every 10 seconds

    return () => clearInterval(intervalId);
  }, [testimonials.length]);

  return (
    <div className="bg-gradient-to-t from-gray-100 via-gray-50 to-gray-50 -mt-[400px] px-6 py-12 w-full rounded font-[sans-serif]">
      <div className="max-w-2xl mx-auto text-center">
       
        

        <div
          className="mt-10 flex justify-center items-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="text-center">
            <div className="mb-6">
              
              <h3 className="text-lg font-semibold mt-4">
                {testimonials[currentTestimonial].name}
              </h3>
              <p className="text-gray-600">{testimonials[currentTestimonial].title}</p>
            </div>
            <p className="text-gray-800 text-sm italic">
              "{testimonials[currentTestimonial].quote}"
            </p>
          </div>
        </div>

        <div className="mt-6">
          <button
            type="button"
            onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
            className="px-6 py-3 rounded text-white text-sm tracking-wider font-semibold border border-gray-800 outline-none bg-gray-800 hover:bg-transparent hover:text-gray-800 transition-all duration-300"
          >
            Next Testimonial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
