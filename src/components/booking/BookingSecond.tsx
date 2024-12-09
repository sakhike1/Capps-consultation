import { AnimatedBackground } from "./AnimatedBackground";
import { ConsultationGrid } from "./ConsultationGrid";
import { ConsultationHeader } from "./ConsultationHeader";

const BookingSecond = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <AnimatedBackground />
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -m-4 items-center">
            <div className="w-full lg:w-1/2 p-4">
              <ConsultationHeader />
            </div>
            <div className="w-full lg:w-1/2 p-4">
              <ConsultationGrid />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingSecond;