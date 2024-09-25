import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../state/store";
import { setFilteredJobs } from "../state/filteredJobs/filteredJobsSlice";
import { useState } from "react";

const Filters = () => {
  const jobs = useSelector((state: RootState) => state.jobsReducer.value);
  const dispatch = useDispatch();
  const [query, setQuery] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [contract, setContract] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    let data;

    e.preventDefault();

    data = jobs
      .filter((item) =>
        item.company.toLowerCase().includes(query.toLowerCase().trim())
      )
      .filter((item) =>
        item.location.toLowerCase().includes(location.toLowerCase().trim())
      )
      .filter((item) => {
        return contract ? item.contract === "Full Time" : item.contract;
      });
    dispatch(setFilteredJobs(data));
  };

  return (
    <form className="filters" onSubmit={(e) => handleSubmit(e)}>
      <div className="filters__wrapper">
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          className="filters__name"
          type="name"
          placeholder="Filter by title, companies, expertise…"
        />
      </div>
      <div className="filters__wrapper">
        <input
          className="filters__location"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          type="text"
          placeholder="Filter by location…"
        />
      </div>

      <input
        className="filters__full-time"
        checked={contract}
        onChange={(e) => {
          setContract(e.target.checked);
        }}
        type="checkbox"
        name="full-time"
        id="full-time"
      />
      <label htmlFor="full-time">Full Time Only</label>
      <input className="filters__submit" type="submit" value="Search" />
    </form>
  );
};

export default Filters;
