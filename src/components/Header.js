import { SITE_LOGO } from "../utils/constants";
import "../index.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { filterhotels, resethotels } from "../components/appStore/hotelSlice";
import { dummydata } from "../utils/dummydata";

const Header = () => {
  const wishlists = useSelector((state) => state.wishlist.items);
  const [query, setquery] = useState("");
  const dispatch = useDispatch();

  function handleSearch(iquery) {
    dispatch(resethotels());
    setquery(iquery);
    dispatch(filterhotels(iquery));
  }
  console.log(query);
  return (
    <header className="border-bottom" id="header">
      <div className="container">
        <div className="row py-3">
          <div className="col-lg-4">
            <Link to="/">
              <img src={SITE_LOGO} alt="Airbnb logo" width="100px" />
            </Link>
          </div>

          <div className="col-lg-4 justify-center text-center">
            <input type="text" className="form-control inputbox" placeholder="Search here..." value={query} onChange={(e) => handleSearch(e.target.value)} />
          </div>
          <div className="col-lg-4 text-end justify-space-between">
            <span className="mx-4">Wishlist{wishlists.length}</span>
            <Link to="/signup">Signin</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
