import { useSite } from "../hooks/useSite";
import { contentData } from "../data/contentData";

function ProjectCard({project}){
const { lang } = useSite();
  const dataLang = contentData[lang].cardLinks;

  return(
    <div data-cy="project-card" className="flex flex-col justify-between h-full group">
     <div className="flex flex-col">
        <div className=" w-full h-39 lg:h-45 overflow-hidden mb-4.5">
            < img 
               src={project.image}
               alt={project.title}
               className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            />
        </div>
        <h3 className="text-2xl lg:text-3xl font-medium mb-4.5 text-indigo-700 dark:text-[#CFCBFF]">
            {project.title}
        </h3>
        <p className="text-gray-500 dark:text-white text-sm font-normal leading-tight mb-4.5">
            {project.description}
        </p>
        <div className="flex flex-nowrap gap-1.5 mb-4.5">
            {project.tags.map((tag, index) => (
                <span
                 key={index}
                 className="px-4.5 pt-1.5 pb-1.75 border border-indigo-800 dark:border-[#8F88FF] bg-white dark:bg-[#383838] dark:text-[#8F88FF] text-indigo-800 rounded-sm text-sm font-medium hover:scale-105 transition-transform duration-300"
                >
                  {tag}
                </span>
            ))}
        </div>
     </div>
     <div className="flex items-center justify-between pt-1">
        <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-800 dark:text-[#E1E1FF] font-medium text-base underline underline-offset-4 hover:opacity-77 hover:scale-110 transition-all duration-300"
        >
            Github
        </a>
        <a
        href={project.siteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-800 dark:text-[#E1E1FF] font-medium text-base underline underline-offset-4 hover:opacity-77 hover:scale-110 transition-all duration-300"
        >
            {dataLang.viewSite}
        </a>
     </div>
    </div>
  );
}
export default ProjectCard;