import { createSlice } from "@reduxjs/toolkit";
import { dummydata } from "../../utils/dummydata";

const hotel = createSlice({
  name: "hotelinfo",
  initialState: {
    items: dummydata,
  },
  reducers: {
    filterhotels(state, action) {
      state.items = state.items.filter((hotels) => hotels?.name?.includes(action.payload));
    },
    resethotels(state) {
      state.items = dummydata;
    },
  },
});
export const { resethotels, filterhotels } = hotel.actions;
export default hotel.reducer;
