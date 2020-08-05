import useLocalStorage from "./useLocalStorage";

import { useEffect } from "react";

export function useDarkMode() {
  
    const [darkMode, setDarkMode] = useLocalStorage();
  useEffect(() => {
    document.body.classList.toggle("dark-mode");
  }, [darkMode]);

  const toggleMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return [darkMode, toggleMode, setDarkMode];
}
