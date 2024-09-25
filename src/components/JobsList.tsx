import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import Job from "./Job";

const JobsList = () => {
  const filteredJobs = useSelector(
    (state: RootState) => state.filteredJobsReducer.value
  );

  return (
    <div className="jobs">
      {filteredJobs.map((job) => {
        return <Job job={job} key={job.id} />;
      })}
    </div>
  );
};

export default JobsList;
