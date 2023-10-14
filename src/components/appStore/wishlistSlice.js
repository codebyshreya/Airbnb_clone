import { createSlice } from "@reduxjs/toolkit";

const wishList = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
  },
  reducers: {
    addwishlist(state, action) {
      state.items.push(action.payload);
    },
  },
});
export const { addwishlist } = wishList.actions;
export default wishList.reducer;
