import { configureStore } from "@reduxjs/toolkit";
import Hotelreducer from "./hotelSlice";
import wishListreducer from "./wishlistSlice";

const appStore = configureStore({
  reducer: {
    wishlist: wishListreducer,
    hotelinfo: Hotelreducer,
  },
});

export default appStore;
