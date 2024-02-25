import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};


export const countTimerLoginExpireReducer = createSlice({
  name: "countTimerLoginExpire",
  initialState,
  reducers: {
    countTimerLoginExpire: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { countTimerLoginExpire } = countTimerLoginExpireReducer.actions;

export default countTimerLoginExpireReducer.reducer;
