/* eslint-disable react-refresh/only-export-components */
import {createContext, useEffect} from "react";
import {useLocalStorage} from "../hooks/useLocalStorage";

export const SiteContext = createContext();

export function SiteProvider({children}) {
    const [theme, setTheme] = useLocalStorage("site-theme", "light");
    const [lang, setLang] = useLocalStorage("site-lang", "en");

    useEffect (() => {
      const root = document.documentElement;
      if (theme === "dark"){
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
      root.setAttribute("lang", lang); 
    },[theme,lang]);

    const toggleTheme = () => {
     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };
    const toggleLang = () => {
     setLang((prevLang) => (prevLang === "en" ? "tr" : "en"));
    };
    const values = {
        theme, toggleTheme, lang, toggleLang,
    };
    return <SiteContext.Provider value={values}>{children}</SiteContext.Provider>;
}
