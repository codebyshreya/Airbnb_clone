import { useParams } from "react-router-dom";
import { dummydata } from "../../utils/dummydata";
const HotelDetails = () => {
  const params = useParams();
  const hoteldetails = dummydata.filter((items) => items.hotelId == params.hotelid);
  const hotel = hoteldetails[0];
  return (
    <section className="HotelDetails">
      <h1>{hotel.name}</h1>
    </section>
  );
};
export default HotelDetails;
