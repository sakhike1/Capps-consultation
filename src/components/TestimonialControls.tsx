import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialControlsProps {
    onPrevious: () => void;
    onNext: () => void;
    currentIndex: number;
    total: number;
}

export const TestimonialControls = ({
    onPrevious,
    onNext,
    currentIndex,
    total,
}: TestimonialControlsProps) => {
    return (
        <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onPrevious}
                className="p-2 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-200 transition-colors"
            >
                <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <div className="flex gap-2">
                {[...Array(total)].map((_, idx) => (
                    <motion.div
                        key={idx}
                        initial={false}
                        animate={{
                            scale: currentIndex === idx ? 1.2 : 1,
                            backgroundColor: currentIndex === idx ? '#4F46E5' : '#E0E7FF',
                        }}
                        className="w-2 h-2 rounded-full"
                    />
                ))}
            </div>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onNext}
                className="p-2 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-200 transition-colors"
            >
                <ChevronRight className="w-6 h-6" />
            </motion.button>
        </div>
    );
};