import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../state/store";
import { setFilteredJobs } from "../state/filteredJobs/filteredJobsSlice";
import { useState, useRef, useEffect } from "react";

const Filters = () => {
  const jobs = useSelector((state: RootState) => state.jobsReducer.value);
  const dispatch = useDispatch();
  const [query, setQuery] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [contract, setContract] = useState<boolean>(false);

  const [show, setShow] = useState<boolean>(false);
  const groupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", ({ target }: MouseEvent) => {
      if (!groupRef.current?.contains(target as Node)) {
        setShow(false);
        document.body.classList.remove("fixed");
      }
    });
  });

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
    setShow(false);
    document.body.classList.remove("fixed");
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
      <div className={`filters__group-bg  ${show ? "show" : ""}`}></div>
      <div ref={groupRef} className={`filters__group  ${show ? "show" : ""}`}>
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

        <div className="full-time__wrapper">
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
          <label className="label-mob" htmlFor="full-time">
            Full Time
          </label>
        </div>

        <input className="filters__submit" type="submit" value="Search" />
      </div>
      <div
        className="filters__open-wrapper"
        onClick={() => {
          setShow((prev) => !prev);
          document.body.classList.add("fixed");
        }}
      >
        <button className="filters__open"></button>
      </div>
      <div className="filters__submit-mob-wrapper">
        <input className="filters__submit-mob" type="submit" />
      </div>
    </form>
  );
};

export default Filters;
