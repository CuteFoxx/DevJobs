import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme as setThemeRedux } from "../state/theme/themeSlice";

const ThemeSwitch = () => {
  const [theme, setTheme] = useState<string>("light");
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

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
    dispatch(setThemeRedux(theme));
  }, [theme]);

  const handleColorSchemeChange = () => {
    if (mediaQuery.matches) {
      setTheme("dark");
      dispatch(setThemeRedux("dark"));
    } else {
      setTheme("light");
      dispatch(setThemeRedux("light"));
    }
    console.log(1);
  };

  const changeTheme = (): void => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }

    dispatch(setThemeRedux(theme));
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
