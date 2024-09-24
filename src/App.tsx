import { useEffect } from "react";
import ThemeSwitch from "./components/ThemeSwitch";
import useFetch from "./hooks/useFetch";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./state/store";
import { setJobs } from "./state/jobs/jobsSlice";
import { setFilteredJobs } from "./state/filteredJobs/filteredJobsSlice";
import Filters from "./components/Filters";
import JobsList from "./components/JobsList";

function App() {
  const { isLoading, error, data } = useFetch("./src/assets/data.json");
  const theme = useSelector((state: RootState) => state.themeReducer.value);
  const jobs = useSelector((state: RootState) => state.jobsReducer.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading) {
      dispatch(setJobs(data));
      dispatch(setFilteredJobs(data));
    }
  });

  return (
    <div className={`${theme} app`}>
      <header className="header">
        <div className="header__container">
          <a href="/" className="header__logo">
            <img src="./src/assets/desktop/logo.svg" alt="Logo" />
          </a>
          <ThemeSwitch />
        </div>
      </header>
      <main className="main">
        <Filters />
        <JobsList />
      </main>
    </div>
  );
}

export default App;
