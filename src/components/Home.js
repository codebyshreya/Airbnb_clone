import HotelListview from "./HotelviewSystem/HotelListview";
import Hotelnavigate from "./HotelviewSystem/Hotelnavigate";
const Home = () => {
  return (
    <section className="home py-4">
      <div className="container">
        <Hotelnavigate />
        <HotelListview />
      </div>
    </section>
  );
};
export default Home;
