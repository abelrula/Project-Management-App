import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  toggled: false, // documents,
  modalType: "", // notification , memebers info , profile ,
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state, action) {
     const {modalType,toggled}=action.payload
      state.modalType = modalType;
      state.toggled = toggled;
    },
    closeModal(state) {
      state.modalType ="";
      state.toggled = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
