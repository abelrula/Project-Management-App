import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
 import modalReducer from "./slices/toggleandModal";
 import converationSReducer from "./slices/conversation";
 
const store = configureStore({
  reducer: {
    ToggleandModal:modalReducer,
    converation: converationSReducer,
   },
});

// const persistSto = persistStore(store);
// const { dispatch } = store;


export default store;
