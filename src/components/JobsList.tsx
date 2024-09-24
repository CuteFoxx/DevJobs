import { useSelector } from "react-redux";
import { RootState } from "../state/store";

const JobsList = () => {
  const filteredJobs = useSelector(
    (state: RootState) => state.filteredJobsReducer.value
  );

  return filteredJobs.map((job) => {
    return (
      <>
        <div>{job.company}</div>
        <div>{job.contract}</div>
        <div>{job.location}</div>
        <hr />
      </>
    );
  });
};

export default JobsList;
