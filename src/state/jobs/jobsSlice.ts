import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JobsState } from "../../interfaces/JobsState.ts";

const initialState: JobsState = {
  value: [],
};

const jobsSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setJobs: (state, action: PayloadAction<any>) => {
      state.value = action.payload;
    },
  },
});

export const { setJobs } = jobsSlice.actions;

export default jobsSlice.reducer;
