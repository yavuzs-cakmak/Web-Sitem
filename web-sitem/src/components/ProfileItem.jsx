
function ProfileItem({label, value}){
    return (
      <div className="flex flex-col lg:flex-row lg:items-baseline gap-2 lg:gap-6">
       <span className="text-lg font-semibold text-black dark:text-white w-full lg:w-38 shrink-0">
        {label}
       </span>
       <span className="text-black dark:text-white font-normal w-full lg:w-58">
        {value}
       </span>
      </div>
    );
}
export default ProfileItem;