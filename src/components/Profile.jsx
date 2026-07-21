import { profileData } from "../data/profileData";
import ProfileItem from "./ProfileItem";
import { useSite } from "../hooks/useSite";

function Profile(){
    const {lang} = useSite();
    const data= profileData[lang];
    return(
   <>
   <section id="profile" className="scroll-mt-24 w-full flex flex-col">
     <div className="w-full border-b border-[#BAB2E7] mb-7 lg:mb-9.75"/>
       <h2 className="text-4xl lg:text-5xl font-semibold leading-none text-[#1F2937] mb-7 lg:mb-9.75 dark:text-[#AEBCCF]">
        {data.sectionTitle}
       </h2>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-15 lg:gap-10">
         <div className="lg:col-span-5 flex flex-col gap-5.25">
            <h3 className="text-3xl font-medium text-indigo-700 dark:text-[#B7AAFF]">
                {data.profileTitle}
            </h3>
            <div className="flex flex-col gap-2.5">
                {data.info.map((item, index) => (
                    <ProfileItem 
                    key={index}
                    label={item.label}
                    value={item.value}
                    />
                ))}
            </div>
         </div>
         <div className="w-full lg:w-xl lg:col-span-7 flex flex-col gap-5.25">
            <h3 className="text-3xl font-medium text-indigo-700 dark:text-[#B7AAFF]">
                {data.aboutTitle}
            </h3>
            <div className="text-gray-500 dark:text-white font-normal text-sm lg:text-lg flex flex-col gap-5.5 leading-normal">
                {data.aboutText.map((paragraph,index) => (
                    <p className="gap-2" key={index}>{paragraph}</p>
                ))}
            </div>
         </div>
      </div> 
      <div className="w-full border-b border-[#BAB2E7] mt-7 lg:mt-9.75"/>
     
   </section>
   </>
    );
}
export default Profile;