import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  globalInfo: {},
};

const searchSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    setGlobalInfo: (state, action) => {
      state.globalInfo = {...state.globalInfo, ...action.payload};
    },
  },
});

export const { setGlobalInfo } = searchSlice.actions;
export default searchSlice.reducer;
