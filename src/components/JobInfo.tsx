import { JobInterface } from "../interfaces/JobInterface";

const JobInfo = ({
  job,
  className,
}: {
  job: JobInterface;
  className: string;
}) => {
  console.log(job);
  return (
    <div className={className}>
      <div className={className + "-wrapper"}>
        <div className={className + "-header"}>
          <div className={className + "-header-inner"}>
            <div className={className + "-posted"}>{job?.postedAt}</div>
            <div className={className + "-contract"}>{job?.contract}</div>
          </div>
          <div className={className + "-header-inner"}>
            <div className={className + "-position"}>{job?.position}</div>
            <a
              className={className + "-apply"}
              href={job?.apply}
              target="_blank"
            >
              Apply Now
            </a>
          </div>
          <div className={className + "-header-inner"}>
            <div className={className + "-location"}>{job?.location}</div>
          </div>
        </div>
      </div>
      <div className={className + "-content"}>{job?.description}</div>
      <div className={className + "-requirements"}>
        <h2>Requirements</h2>
        <p>{job?.requirements?.content}</p>
        <ul>
          {job?.requirements?.items?.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
      <div className={className + "-responsibilities"}>
        <h2>What You Will Do</h2>
        <p>{job?.role?.content}</p>
        <ol>
          {job?.role?.items?.map((item) => {
            return <li>{item}</li>;
          })}
        </ol>
      </div>
    </div>
  );
};

export default JobInfo;
