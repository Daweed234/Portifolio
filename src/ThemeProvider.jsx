import React, { useContext, useEffect, useState } from "react";

export const ThemeContext = React.createContext({
  theme: "light",
  setTheme: () => {},
});

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("theme", theme);

    document.querySelector("html").setAttribute("class", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const { setTheme, theme } = useContext(ThemeContext);

  return {
    setTheme,
    theme,
  };
};
