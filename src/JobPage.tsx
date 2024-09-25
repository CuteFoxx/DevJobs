import { useParams } from "react-router-dom";
import Header from "./components/Header";
import { RootState } from "./state/store";
import { useSelector } from "react-redux";

const JobPage = () => {
  const theme = useSelector((state: RootState) => state.themeReducer.value);
  const { id } = useParams();

  return (
    <div className={`${theme} app`}>
      <Header />
      {id}
    </div>
  );
};

export default JobPage;
