
function SkillCard({title, description}) {
    return(
      <div className="flex flex-col items-start gap-5 lg:gap-7" >
        <h3 className="font-medium text-2xl lg:text-3xl text-indigo-700 leading-7 dark:text-[#B7AAFF]">
         {title}
        </h3>
        <p className="text-gray-500 dark:text-white text-xs font-normal leading-4">
            {description}
        </p>
      </div>
    );
}
export default SkillCard;