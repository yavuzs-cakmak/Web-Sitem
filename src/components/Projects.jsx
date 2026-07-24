import { useState, useEffect } from "react";
import axios from 'axios';
import { projectsData } from "../data/projectsData";
import ProjectCard from "./ProjectCard";
import { useSite } from "../hooks/useSite";

function Projects(){
    const {lang} = useSite();
    const defaultData = projectsData[lang];
    const [projects,setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
     const fetchProjects = async () => {
      try{
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        const response= await axios.post('https://reqres.in/api/workintech', defaultData.list, {
    headers: {
      'x-api-key': import.meta.env.VITE_API_KEY 
    }
  }
);
        setProjects(response.data);
        console.log("✅ Projeler API'den başarıyla çekildi:", response.data);
      } catch(error){
        console.error("Projeler API'den çekilirken hata oluştu:", error);
        setProjects(defaultData.list);
      } finally {
        setLoading(false);
      }
     };
     fetchProjects();
    },[lang, defaultData.list]);

    return(
   <>
   <section id="projects" className="w-full flex flex-col mb-24 lg:mb-34.75">
      <h2 className="text-4xl lg:text-5xl font-semibold text-[#1F2937] dark:text-[#AEBCCF] mb-7 lg:mb-9 ">
        {defaultData.sectionTitle}
      </h2>
      {loading ? (
        <div className="w-full py-12 flex justify-center items-center">
            <p data-cy="projects-loading" className="text-indigo-800 dark:text-[#AEBCCF] font-semibold text-lg lg:text-2xl animate-pulse">
                Projeler Sunucudan Yükleniyor...
            </p>
        </div>
      ) : (
          <div data-cy="projects-grid" className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-30">
            {projects.map((item) =>(
                <ProjectCard key={item.id} project={item}/>
            ))}
          </div>
      )}
   </section>
   </>
    );
}
export default Projects;
