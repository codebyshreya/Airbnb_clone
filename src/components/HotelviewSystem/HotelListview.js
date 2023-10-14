import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addwishlist } from "../appStore/wishlistSlice";

const HotelListview = () => {
  const hotellists = useSelector((state) => state.hotelinfo.items);
  // function handlecategory(cat_value) {
  //   dummydata.filter((item) => item.categories.includes(item.cat_value));
  // }
  return (
    <div className="row">
      <div className="col-lg-12">
        <ul className="list-none d-flex " style={{ listStyle: "none" }}>
          <li className="px-2 cursor-pointer">Farms!!</li>
          <li className="px-2">Rooms..</li>
        </ul>
      </div>
      {hotellists.map((item) => (
        <HotelCard dummydata={item} key={item.hotelId} />
      ))}
    </div>
  );
};

const HotelCard = ({ dummydata }) => {
  const dispatch = useDispatch();
  function handlewishlist(items) {
    dispatch(addwishlist(items));
  }
  return (
    <div className="col-lg-3 p-3">
      <Link to={`hotel/${dummydata.hotelId}`} className="card" style={{ textDecoration: "none" }}>
        <img src={dummydata.thumbNailUrl} alt={dummydata.name} className="w-100 object-fit" style={{ height: "255px" }} />
        <p className="text-center">{dummydata.name}</p>
      </Link>
      <button className="btn" onClick={() => handlewishlist(dummydata)}>
        &#9829;
      </button>
    </div>
  );
};

export default HotelListview;
