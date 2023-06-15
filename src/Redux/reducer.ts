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
        state.visibleEmails = [...state.emails];
      } else {
        state.visibleEmails = [...state.emails].filter(
          (email) => email.tag === action.payload.tag,
        );
      }
      if (action.payload.query) {
        state.visibleEmails = [...state.visibleEmails].filter(
          (email) =>
            email.body.includes(action.payload.query) ||
            email.subject.includes(action.payload.query),
        );
      }
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {setEmail, setVisibleEmails, setLoading} = emailSlice.actions;

export default emailSlice.reducer;
