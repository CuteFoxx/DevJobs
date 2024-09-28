import { JobInterface } from "../interfaces/JobInterface";

const CompanyInfo = ({
  job,
  className,
}: {
  job: JobInterface;
  className: string;
}) => {
  return (
    <div className={className}>
      <img
        className={`${className}-logo`}
        src={job?.logo}
        style={{ background: job?.logoBackground }}
        alt={job?.company}
      />
      <div className={`${className}-wrapper`}>
        <h2 className={`${className}-name`}>{job?.company}</h2>
        <a
          className={`${className}-website`}
          href={job?.website}
          target="_blank"
        >
          {job?.website.replace(/https?:\/\/(www\.)?/, "")}
        </a>
      </div>
      <a className={`${className}-btn`} href={job?.website} target="_blank">
        Company Site
      </a>
    </div>
  );
};

export default CompanyInfo;
