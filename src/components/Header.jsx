import ModeSwitch from "./ModeSwitch";
import axios from 'axios';
import { useSite } from "../hooks/useSite";
import { contentData } from "../data/contentData";

function Header(){
  const { lang } = useSite();
  const dataLang = contentData[lang].header;
   const handleHireMeClick = async () =>{
   const contactSection = document.getElementById('contact');
   if(contactSection){
    contactSection.scrollIntoView({behavior: "smooth"});
   }
   try {
      const response = await axios.post("https://reqres.in/api/users",{
       action: "Hire Me Button Clicked",
       timestamp: new Date().toISOString()
      },{
        headers: {
          'x-api-key': import.meta.env.VITE_API_KEY
        }
      });
      console.log("✅ API log isteği başarıyla iletildi(Header Button):", response.data);
   } catch(error) {
      console.error("API log hatası:", error);
   }
   setTimeout(()=>{
    window.dispatchEvent(new Event("openEmailToast"));
   }, 2000);
  };


    return(
   <>
   <div>
    <header className="w-full py-4.25 dark:bg-koyumor-bg">
      <div className="mb-6.5">
           <ModeSwitch />
         </div>
        <div className="gap-2 flex items-center justify-between">
          <a href="#profile">
      <div className="w-15.75 h-15.5 bg-[#EEEBFF] dark:bg-[#4731D3] rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-105 cursor-pointer">
        
        <span className="text-[#7B61FF] dark:text-[#8F88FF] font-semibold text-2xl leading-8 tracking-tighter inline-block transform rotate-30">
            Y
        </span>
      </div>
      </a>
      <div className="flex items-center gap-8 lg:gap-15 text-lg font-medium leading-7 text-gray-500 ">
        <nav className="flex items-center gap-6 lg:gap-20.5">
            <a href="#skills" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
               {dataLang.skills}
            </a>
            <a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
               {dataLang.projects}
            </a>
        </nav>
        <button
        data-cy="header-hire-btn" 
        onClick={handleHireMeClick} 
        type="button"
        className="border border-indigo-800 text-indigo-800 bg-white font-medium px-4 lg:px-8 py-3 rounded-md hover:bg-indigo-800 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-slate-700 transition-all duration-200 cursor-pointer shadow-sm active:scale-90"
        >
            {dataLang.hireMe}
        </button>
      </div>
        </div>
    </header>
   </div>
   </>
    );
}
export default Header;