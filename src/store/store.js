import { configureStore } from '@reduxjs/toolkit';
import { UserReducer } from "./reducers"



export default configureStore({
  reducer: {
    User: UserReducer,
  },
});
