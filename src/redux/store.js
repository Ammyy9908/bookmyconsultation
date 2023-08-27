import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSllice";

export default configureStore({
  reducer: {
    appReducer: appSlice,
  },
});
