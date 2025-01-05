import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  let deviceTheme = localStorage.getItem("theme");
  const [isDark, setIsDark] = useState(deviceTheme === "dark");

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newTheme = !prev;
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      return newTheme;
    });
  };
  const themeLog = { isDark, toggleTheme };

  return (
    <ThemeContext.Provider value={themeLog}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
