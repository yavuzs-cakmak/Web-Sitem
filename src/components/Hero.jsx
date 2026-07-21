import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import { contentData } from "../data/contentData";
import { useSite } from "../hooks/useSite";

function Hero(){
  const { lang,} = useSite();
  const dataLang = contentData[lang].hero;
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
      console.log("✅ API log isteği başarıyla iletildi(Hero Button):", response.data);
   } catch(error) {
      console.error("API log hatası:", error);
   }
   setTimeout(()=>{
    window.dispatchEvent(new Event("openEmailToast"));
   }, 2000);
  };

    return(
   <>
   <section className="w-full max-w-285 2xl:max-w-335 mx-auto px-2 lg:px-1 py-2 lg:py-1 flex flex-col-reverse lg:flex-row items-center justify-between gap-17 2xl:gap-26">
     <div className="flex-1 flex flex-col items-start gap-6 text-lef w-full">
        <div className="flex items-center gap-2.5">
      <div className="w-24.5 border border-indigo-800 bg-indigo-700 dark:border-[#BAB2E7] dark:bg-[#B7AAFF] mb-10"/>
        <span className="text-indigo-700 dark:text-[#B7AAFF] font-medium text-xl leading-7 mb-10">
            Yavuz Selim Çakmak
        </span>
        </div>
        <h1 className="text-4xl lg:text-5xl 2xl:text-5xl font-bold text-gray-800 leading-none dark:text-[#AEBCCF]">
            {dataLang.titleLine1} <br />
            {dataLang.titleLine2}
        </h1>
        <p className="text-gray-500 text-sm leading-5 lg:text-lg lg:leading-7 font-normal w-full lg:max-w-138.25 2xl:max-w-2xl">
          {dataLang.description}
        </p>
        <div className="flex flex-col lg:flex-row flex-wrap items-center gap-3 pt-5 lg:pt-10 w-full lg:w-auto">
            <button
            data-cy="hero-hire-btn" 
            className="bg-indigo-800 dark:bg-[#E1E1FF] hover:bg-[#B7AAFF] dark:hover:bg-[#B7AAFF] text-white dark:text-black rounded-md text-lg leading-7 font-medium px-8 py-3 transition-all duration-200 cursor-pointer shadow-sm active:scale-90 w-full lg:w-auto text-center"
            onClick={handleHireMeClick}
            type="button"
            >
                {dataLang.hireMe}
            </button>
            <a
            href="https://github.com/yavuzs-cakmak"
            target="_blank"
            rel="noreferrer"
            className="border border-indigo-800 dark:border-[#E1E1FF] text-indigo-800 dark:text-[#E1E1FF] hover:bg-[#E1E1FF] dark:hover:bg-white dark:hover:text-koyumor-bg text-lg font-medium leading-7 py-3 pl-3 pr-5 rounded-md transition-all duration-200 flex items-center justify-center gap-2.5 w-full lg:w-auto lg:max-w-31.75 "
            >
                <FontAwesomeIcon icon={faGithub} className="text-2xl"/>
                {dataLang.github}
            </a>
            <a
            href="https://linkedin.com/in/yavuzscakmak"
            target="_blank"
            rel="noreferrer"
            className="border border-indigo-800 dark:border-[#E1E1FF] text-indigo-800 dark:text-[#E1E1FF] hover:bg-[#E1E1FF] dark:hover:bg-white dark:hover:text-koyumor-bg text-lg font-medium leading-7 py-3 pl-3 pr-5 rounded-md transition-all duration-200 flex items-center justify-center gap-2.5 w-full lg:w-auto lg:max-w-31.75 "
            >
                 <FontAwesomeIcon icon={faLinkedinIn}  className="text-2xl"/>
                 {dataLang.linkedin}
            </a>
        </div>
     </div>
     <div className="w-full max-w-112.5 lg:max-w-135 xl:max-w-140 h-80 lg:h-93.75 rounded-[18px] overflow-hidden shadow-lg shrink-0 mx-auto lg:mx-0">
        <img 
          src="/MyPhoto.svg"
          alt="a person who working on computer"
          className="w-full h-full object-cover object-[center_84%] rounded-[18px] dark:brightness-90 transition-all duration-200"
        />
     </div>
   </section>
   </>
    );
}
export default Hero;