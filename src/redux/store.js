import { configureStore } from "@reduxjs/toolkit";
// reducerlari import et
import counterReducer from "./slices/CounterSlice";
import crudReducer from "./slices/crudSlice";

export default configureStore({
  reducer: { counterReducer, crudReducer },
});
