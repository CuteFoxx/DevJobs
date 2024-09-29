import { useParams } from "react-router-dom";
import Header from "./components/Header";
import { RootState } from "./state/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";
import { JobInterface } from "./interfaces/JobInterface";
import CompanyInfo from "./components/CompanyInfo";
import JobInfo from "./components/JobInfo";

const JobPage = () => {
  const { id } = useParams();
  const { isLoading, data } = useFetch("/data.json");
  const theme = useSelector((state: RootState) => state.themeReducer.value);

  const [job, setJob] = useState<JobInterface>(data);

  useEffect(() => {
    if (!isLoading) {
      setJob(data.filter((item: any) => item.id == id)[0]);
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className={`${theme} app job-page`}>
        <Header />
        <div className="loading">Loading...</div>
      </div>
    );
  } else {
    return (
      <>
        <div className={`${theme} app job-page`}>
          <Header />
          <div className="job-page__inner">
            <CompanyInfo job={job} className="job-page__company" />
            <JobInfo job={job} className="job-page__info" />
          </div>
        </div>
        <footer className="job-page__footer">
          <div className="job-page__footer-wrapper">
            <div className="job-page__footer-group">
              <h2 className="job-page__footer-position">{job?.position}</h2>
              <h2 className="job-page__footer-company">{job?.company}</h2>
            </div>
            <a
              className="job-page__footer-apply"
              href={job?.apply}
              target="_blank"
            >
              Apply Now
            </a>
          </div>
        </footer>
      </>
    );
  }
};

export default JobPage;
