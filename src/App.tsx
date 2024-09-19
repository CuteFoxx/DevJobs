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
      <header className="header">
        <div className="header__container">
          <a href="/" className="header__logo">
            <img src="./src/assets/desktop/logo.svg" alt="Logo" />
          </a>
          <ThemeSwitch />
        </div>
      </header>
      <input type="checkbox" name="" id="" />
    </div>
  );
}

export default App;
