import {skillsData} from "../data/skillsData";
import SkillCard from "./SkillCard";
import { useSite } from "../hooks/useSite";

function Skills(){
    const {lang} = useSite();
    const data = skillsData[lang];

    return(
   <>
   <section id="skills" className="mt-31 scroll-mt-54 w-full flex flex-col">
     <h2 className="text-4xl lg:text-5xl font-semibold leading-none text-[#1F2937] dark:text-[#AEBCCF] mb-7 lg:mb-9.75">
        {data.sectionTitle}
     </h2>
     <div className="grid grid-cols-1 lg:grid-cols-3 gap-9 lg:gap-30">
      {data.list.map((item)=>(
        <SkillCard 
        key={item.id}
        title={item.title}
        description={item.description}
        />
      ))}
     </div>

   </section>
   </>
    );
}
export default Skills;