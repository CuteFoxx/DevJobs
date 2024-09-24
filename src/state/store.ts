import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme/themeSlice";
import jobsReducer from "./jobs/jobsSlice";
import filteredJobsReducer from "./filteredJobs/filteredJobsSlice";

export const store = configureStore({
  reducer: {
    themeReducer,
    jobsReducer,
    filteredJobsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
