import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JobsState } from "../../interfaces/JobsState.ts";

const initialState: JobsState = {
  value: [],
};

const filteredJobsSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setFilteredJobs: (state, action: PayloadAction<any>) => {
      state.value = action.payload;
    },
  },
});

export const { setFilteredJobs } = filteredJobsSlice.actions;

export default filteredJobsSlice.reducer;
