import { useEffect } from 'react';
import { footerData } from "../data/footerData";
import {toast} from "react-toastify";
import { useSite } from "../hooks/useSite";

function Footer(){
    const {lang} = useSite(); 
    const data = footerData[lang];
    const copyToClipboard = () => {
 navigator.clipboard.writeText(data.email);
 toast.success("E-posta adresi panoya kopyalandı! 📋", {
    position: "bottom-right",
    autoClose: 2000,
  });
};

const EmailActionToast = () => {

const subject = encodeURIComponent("İş Teklifi");
const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${data.email}&su=${subject}`;
const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${data.email}&subject=${subject}`;
const mailtoUrl = `mailto:${data.email}?subject=${subject}`;
return (
<div className="flex flex-col gap-2 py-1">
 <p className="font-semibold text-sm text-indigo-800">
  📋 E-posta otomatik kopyalandı! Hızlıca teklif göndermek ister misin?
 </p>
 <div className="flex flex-wrap gap-2 mt-1">
    <a href={gmailUrl} target="_blank" rel="noopener noreferrer" className="px-2.5 py-1 text-xs font-medium bg-red-500 hover:bg-red-600 text-white rounded shadow-sm transition-colors">Gmail</a>
    <a href={outlookUrl} target="_blank" rel="noopener noreferrer" className="px-2.5 py-1 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded shadow-sm transition-colors">Outlook</a>
    <a href={mailtoUrl} className="px-2.5 py-1 text-xs font-medium bg-gray-600 hover:bg-gray-700 text-white rounded shadow-sm transition-colors"> Mail Uygulaması ile</a>
 </div>
</div>
);
};

useEffect(()=>{
 const triggerEmailAction = () => {
 navigator.clipboard.writeText(data.email);
  toast.dismiss();
  toast(<EmailActionToast />, {
    position:"bottom-right",
    autoClose: 6000,
    closeOnClick: false,
  });
};

 const handleSignal = () =>{
  triggerEmailAction();
 };
 window.addEventListener("openEmailToast", handleSignal);
 return () => {
  window.removeEventListener("openEmailToast", handleSignal);
 };
}, []); // eslint-disable-line react-hooks/exhaustive-deps

    return(
   <>
   <footer id="contact" className="w-full bg-[#F9F9F9] dark:bg-[#141414] pt-21.25 pb-32.5 transition-colors duration-300">
     <div className="max-w-6xl mx-auto px-4 lg:px-7 flex flex-col justify-between">
       <div className="mb-10 lg:mb-15.25">
        <h2 className="text-3xl lg:text-[42px] font-semibold text-[#1F2937] dark:text-[#AEBCCF] leading-tight max-w-sm lg:max-w-135">
            {data.title}
        </h2>
       </div>
       <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-15 lg:gap-137.25">
         <div className="flex items-center gap-0.5">
            <span role="img" aria-label="hand-pointing for email" className="text-base lg:text-xl">👉</span>
            <button
             data-cy="email-copy-btn" 
             onClick={copyToClipboard}
             className="text-base lg:text-xl font-medium text-[#AF0C48] dark:text-[#BAB2E7] underline underline-offset-4 hover:opacity-77 transition-opacity cursor-pointer leading-none tracking-wider"
            >
             {data.email}
            </button>
         </div>
         <nav aria-label="Footer Navigation" className="flex gap-4 lg:gap-5 tracking-[0.01em] leading-normal text-base lg:text-lg">
            {data.links.map((link, index) =>(
            <a
             key={index}
             href={link.url}
             target={link.target}
             rel="noopener noreferrer"
             className={`${link.color} hover:underline underline-offset-4 transition-all max-w-50 lg:max-w-74 whitespace-nowrap`}
            >
             {link.name}
            </a>
            ))}
          
         </nav>
       </div>
     </div>
   </footer>
   </>
    );
}
export default Footer;