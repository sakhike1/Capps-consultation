import Hero from "../sections/Hero";
import HeroSection from "../sections/HeroSection";
import HeroSection4 from "../sections/HeroSection4";
import HeroSectionThree from "../sections/HeroSectionThree";
import HeroSection5 from "../sections/HeroSection5";
import HeroSection6 from "../sections/HeroSection6";
import HeroSection7 from "../sections/HeroSection7";
import HeroSection8 from "../sections/HeroSection8";
import HeroSection9 from "../sections/HeroSection9";
import {Subscribe} from "./../sections/Subscribe";
import Testimonials from "../components/Testimonials";
import Workedwith from "../components/Workedwith";


const Home = () => {
    return (
        <>
            <section className="xl:padding-l  wide:padding-r padding-b">
                <Hero />
            </section>
            <section className="mb-96">
                <HeroSection />
            </section>
            <section className="mb-96">
                <HeroSectionThree />
            </section>
            <section className="mb-96">
                <HeroSection4 />
            </section>
            <section className="mb-96">
                <HeroSection5 />
            </section>

            <section className="mb-96">
                <HeroSection6 />
            </section>
            <section className="mb-96">
                <HeroSection7 />
            </section>
            <section className="mb-96">
                <HeroSection8 />
            </section>
            <section className="mb-96">
                <HeroSection9 />
            </section>

            <section className=" mb-[300px] -mt-[500px]">
                <Testimonials />
            </section>

           
            <section className="-mt-[300px] ">
                <Workedwith />
            </section>
            <section className="">
                <Subscribe />
            </section>
        </>
    );
};

export default Home;
