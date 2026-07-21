import { useSite } from "../hooks/useSite";

function ModeSwitch(){
  const {theme, toggleTheme, lang, toggleLang} = useSite();
  const getModeText = () => {
    if (lang === "tr") {
      return theme === "dark" ? "AYDINLIK MOD" : "KARANLIK MOD";
    }
    return theme === "dark" ? "LIGHT MODE" : "DARK MODE";
  };

return(
    <>
<div className="flex items-center gap-3 text-base font-bold tracking-wider text-gray-500 justify-end">
<label 
htmlFor="dark-mode-toggle"
className="flex items-center gap-2 cursor-pointer select-none">
<input
data-cy="theme-toggle" 
onChange = {toggleTheme}
type = "checkbox"
id="dark-mode-toggle"
checked={theme === "dark"}
className="hidden"
aria-label="Toggle Dark Mode"
/>
  <div className={`relative w-14 h-6 rounded-full p-1 flex items-center ${
      theme === "dark" ? "justify-start bg-[#4731D3]" : "justify-end bg-indigo-700"
    }`}>
  <span className="w-4 h-4 bg-yellow-300 rounded-full shadow-md block transition-transform duration-400"></span>
  </div>
<span className="text-gray-500 dark:text-gray-300">{getModeText()}</span>
</label>
<span className="w-1.5 h-4.5 text-gray-500 dark:text-gray-300 leading-none">|</span>
<div className="uppercase">
<button
data-cy="lang-toggle" 
onClick={toggleLang}
type="button"
className="text-indigo-600 dark:text-indigo-400 cursor-pointer hover:underline font-bold"
>
  {lang === "en" ? (
            <>
              TÜRKÇE<span className="text-gray-500 font-normal">'YE GEÇ</span>
            </>
          ) : (
            <>
              SWITCH TO<span className="text-gray-500 font-normal"> ENGLISH</span>
            </>
          )}
</button>
</div>
</div>
</>
);
}
export default ModeSwitch;