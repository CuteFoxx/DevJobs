import { useState } from "react";
import ThemeSwitch from "./components/ThemeSwitch";
import useFetch from "./hooks/useFetch";
import { useSelector } from "react-redux";
import { RootState } from "./state/store";

function App() {
  const { isLoading, error, data } = useFetch("./src/assets/data.json");
  const theme = useSelector((state: RootState) => state.themeReducer.value);

  return (
    <div className={`${theme} app`}>
      <ThemeSwitch />
      <img src="./src/assets/logos/pomodoro.svg" alt="" />
    </div>
  );
}

export default App;
