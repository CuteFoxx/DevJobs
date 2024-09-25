import { Link } from "react-router-dom";
import { JobInterface } from "../interfaces/JobInterface";

const Job = ({ job }: { job: JobInterface }) => {
  return (
    <div className="job-card">
      <Link
        aria-label={`to the ${job.company} job page`}
        to={`/job/${job.id}`}
        className="job-card__logo-wrapper"
        style={{ background: job.logoBackground }}
      >
        <img className="job-card__logo" src={job.logo} alt={job.company} />
      </Link>

      <div className="job-card__header">
        <div className="job-card__posted">{job.postedAt}</div>
        <div className="job-card__contract">{job.contract}</div>
      </div>
      <div className="job-card__postion">{job.position}</div>
      <div className="job-card__company">{job.company}</div>
      <div className="job-card__location">{job.location}</div>
      <Link to={`/job/${job.id}`} className="job-card__link">
        {`to the ${job.company} job page`}
      </Link>
    </div>
  );
};

export default Job;
