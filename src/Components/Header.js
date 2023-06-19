import React, { useEffect, useState } from "react";
import Logo from "../Assets/log193.png";

const Header = () => {

  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('Theme'))||"light");

  useEffect(() => {
    localStorage.setItem('Theme',JSON.stringify(theme))
    document.documentElement.removeAttribute('class')
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <header>
      <div className="logo flex h-24  text-2xl pl-24 items-center bg-head font-semibold shadow-md mb-36 max-sm:pl-1">
        <img
          src={Logo}
          alt="taskmate logo"
          className="h-16 w-16 hover:cursor-pointer max-sm:h-12 w-12"
        />
        <span className="task max-sm:text-lg">Task Mate</span>
        <div className="ThemeSelector space-x-3 max-sm:pl-0 flex ">
          <span
            onClick={() => setTheme("light")}
            className={theme === "light" ? "light activeTheme" : "light"}
          ></span>
          <span
            onClick={() => setTheme("medium")}
            className={theme === "medium" ? "medium activeTheme" : "medium"}
          ></span>
          <span
            onClick={() => setTheme("dark")}
            className={theme === "dark" ? "dark activeTheme" : "dark"}
          ></span>
          <span
            onClick={() => setTheme("gradientOne")}
            className={
              theme === "gradientOne"
                ? "gradientOne activeTheme"
                : "gradientOne"
            }
          ></span>
          <span
            onClick={() => setTheme("gradientTwo")}
            className={
              theme === "gradientTwo"
                ? "gradientTwo activeTheme"
                : "gradientTwo"
            }
          ></span>
          <span
            onClick={() => setTheme("gradientThree")}
            className={
              theme === "gradientThree"
                ? "gradientThree activeTheme"
                : "gradientThree"
            }
          ></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
