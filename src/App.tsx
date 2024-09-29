import { useEffect } from "react";
import useFetch from "./hooks/useFetch";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./state/store";
import { setJobs } from "./state/jobs/jobsSlice";
import { setFilteredJobs } from "./state/filteredJobs/filteredJobsSlice";
import Filters from "./components/Filters";
import JobsList from "./components/JobsList";
import Header from "./components/Header";

function App() {
  const { isLoading, data } = useFetch("/data.json");
  const theme = useSelector((state: RootState) => state.themeReducer.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading) {
      dispatch(setJobs(data));
      dispatch(setFilteredJobs(data));
    }
  });

  return (
    <div className={`${theme} app`}>
      <Header />
      <main className="main">
        <Filters />
        <JobsList />
      </main>
    </div>
  );
}

export default App;
