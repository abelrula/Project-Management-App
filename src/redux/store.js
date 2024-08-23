import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
 import modalReducer from "./slices/modalSlice";
//  import conversationReducer from "./slices/conversation";
 
const store = configureStore({
  reducer: {
     modal:modalReducer,
   //  conversation: conversationReducer,
   },
});

// const persistSto = persistStore(store);
// const { dispatch } = store;


export default store;
