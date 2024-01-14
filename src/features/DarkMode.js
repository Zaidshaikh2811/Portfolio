import { Slice, createSlice } from "@reduxjs/toolkit";

const dark = createSlice({
  name: "dark",
  initialState: false,
  reducers: {
    darkToggle: (state) => {
      console.log("HELLO");
      return !state;
    },
  },
});

export default dark.reducer;
export const { darkToggle } = dark.actions;
