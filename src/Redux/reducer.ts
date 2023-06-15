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
    },
    setVisibleEmails: (state, action) => {
      if (action.payload.tag === "all") {
        state.visibleEmails = state.emails;
      } else {
        const filteredData = state.emails.filter(
          (email) => email.tag === action.payload.tag,
        );
        state.visibleEmails = filteredData;
      }
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {setEmail, setVisibleEmails, setLoading} = emailSlice.actions;

export default emailSlice.reducer;
