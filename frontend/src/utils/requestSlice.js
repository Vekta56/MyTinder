import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "requests",
  initialState: [],
  reducers: {
    addRequests: (state, action) => {
      console.log("📥 addRequests payload:", action.payload);
      return action.payload;
    },
    removeRequest: (state, action) => {
      console.log("❌ removeRequest id:", action.payload);
      const newArray = state.filter((r) => r._id !== action.payload);
      console.log("📤 after remove:", newArray);
      return newArray;
    },
  },
});

export const { addRequests, removeRequest } = requestSlice.actions;
export default requestSlice.reducer;
