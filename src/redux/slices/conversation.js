import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    Latestmessage:"",
    conversations: [],
};

const conversationSlice = createSlice( {
    name: "conversations",
    initialState,
    reducers: {
        
    }
} )
export default conversationSlice.reducer
