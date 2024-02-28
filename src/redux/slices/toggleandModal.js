import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  toggle: false, // documents,
  modal: "profile", // notification , memebers info ..
};
const ToggleAndModal = createSlice({
  name: "Toggle",
  initialState,
  reducers: {
    sideOpenClose(state, action) {
      state.toggle = !state.toggle;
    },
    modalOpenClose(state, action) {
      state.modal = action.payload;
    },
  },
});

export const { sideOpenClose, modalOpenClose } = ToggleAndModal.actions;
// export const (state)=>state
export default ToggleAndModal.reducer;
