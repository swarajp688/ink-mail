import {createSlice} from "@reduxjs/toolkit";
import {EmailType, ReduxStateType} from "./reduxState.type";

const initialState: ReduxStateType = {
  emails: [] as EmailType[],
  loading: false,
  visibleEmails: [] as EmailType[],
};

const emailSlice = createSlice({
  name: "ink-mail",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.emails = action.payload;
      state.visibleEmails = action.payload;
      state.loading = false;
    },
  },
});

export const {setEmail} = emailSlice.actions;

export default emailSlice.reducer;
