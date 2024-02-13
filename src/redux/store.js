import { configureStore } from "@reduxjs/toolkit";
import programSlice from "./programSlice"

const store = configureStore({
  reducer:{
    programSlice:programSlice.reducer,
  }
})
export default store;