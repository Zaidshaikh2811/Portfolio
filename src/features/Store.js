import { configureStore } from "@reduxjs/toolkit";
import DarkMode from "./DarkMode";

const store = configureStore({
  reducer: {
    user: DarkMode,
  },
});

export default store;
