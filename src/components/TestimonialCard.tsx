import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TestimonialType } from '../types/testimonial';

interface TestimonialCardProps {
    testimonial: TestimonialType;
    isVisible: boolean;
}

export const TestimonialCard = ({ testimonial, isVisible }: TestimonialCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="relative"
        >
            <div className="bg-gradient-to-bl from-stone-100 via-teal-100 to-purple-300 rounded-xl p-8 shadow-lg">
                <Quote className="w-10 h-10 text-indigo-500 mb-4" />
                <p className="text-gray-700 text-lg italic mb-6">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                    <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                        <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                        <p className="text-gray-600 text-sm">{testimonial.title}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};