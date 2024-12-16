import Booking from "../sections/Booking";
import BookingSecond from '../components/booking/BookingSecond';
import BookingThree from "../components/booking/BookingThree";







const Home = () => {
    return (
        <>
            <section className=''>
                <Booking />
            </section>
            <div className="min-h-screen bg-gray-900">
      <BookingSecond />
    </div>

<div className="min-h-screen">
    <BookingThree/>
</div>







        </>
    )
}

export default Home
