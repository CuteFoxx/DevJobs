import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme as themeSetter } from "../state/theme/themeSlice";
import { RootState } from "../state/store";

const ThemeSwitch = () => {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const theme = useSelector((state: RootState) => state.themeReducer.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      mediaQuery.matches ? setTheme("dark") : setTheme("light");
      mediaQuery.addEventListener("change", handleColorSchemeChange);
    } else if (localStorage.getItem("theme")) {
      localStorage.getItem("theme") === "dark"
        ? setTheme("dark")
        : setTheme("light");
    }
  }, [theme]);

  const handleColorSchemeChange = () => {
    mediaQuery.matches ? setTheme("dark") : setTheme("light");
  };

  const changeTheme = (): void => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  const setTheme = (theme: string) => {
    dispatch(themeSetter(theme));
  };

  return (
    <div className="header__theme-toggle-wrapper">
      <input
        className="header__theme-toggle"
        checked={theme === "dark"}
        type="checkbox"
        onChange={changeTheme}
      />
    </div>
  );
};

export default ThemeSwitch;
