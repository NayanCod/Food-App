import { Link } from "react-router-dom";
import GoBack from "../utils/GoBack";
import { useEffect } from "react";

export default function Contact(){
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, []);

    return(
        <div className="md:h-[52.5vh] sm:h-[52.5vh]">
            <GoBack/>
            <h1 className="text-center font-bold text-2xl text-slate-900">CONTACT ME</h1>
            <p className="text-center mb-12 text-slate-600 font-semibold">Questions not answered yet? I'm here to help!</p>
            <div className="main lg:w-[50%] md:w-[40%] sm:w-[40%] w-[85%] m-auto">
                <div className="flex items-center justify-center my-9">
                    <div className="w-[10%] mr-3">
                    <svg className="h-7 w-7 md:h-9 sm:h-9 lg:h-9 md:w-9 sm:w-9 lg:w-9 text-slate-500 hover:text-[#e63337] cursor-pointer"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />  <polyline points="22,6 12,13 2,6" /></svg>
                    </div>
                    <div className="w-[70%] md:w-[80%] lg:w-[80%] sm:w-[80%]">
                        <div>
                            <h2 className="font-bold text-md text-slate-900">EMAIL</h2>
                            <p className="text-sm text-slate-600 font-semibold">Put your query here!</p>
                        </div>
                    </div>
                    <div className=" w-[30%] md:w-[30%] lg:w-[20%] sm:w-[20%] px-2 py-2 text-center font-semibold border text-sm border-gray-400 cursor-pointer rounded-sm hover:bg-[#e63337] hover:text-white">
                        <Link to="https://mail.google.com/mail/?view=cm&fs=1&to=kumarnayab6@gmail.com" target="_blank">EMAIL US</Link>
                    </div>
                </div>
                <div className="flex items-center justify-center my-9">
                    <div className="w-[10%] mr-3">
                    <svg className="h-7 w-7 md:h-9 sm:h-9 lg:h-9 md:w-9 sm:w-9 lg:w-9 text-slate-500 hover:text-[#e63337] cursor-pointer"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />  <line x1="12" y1="12" x2="12" y2="12.01" />  <line x1="8" y1="12" x2="8" y2="12.01" />  <line x1="16" y1="12" x2="16" y2="12.01" /></svg>
                    </div>
                    <div className="w-[70%] md:w-[80%] lg:w-[80%] sm:w-[80%]">
                        <div>
                            <h2 className="font-bold text-md text-slate-900">CHAT</h2>
                            <p className="text-sm text-slate-600 font-semibold">Try solving your query via chat on linkedin</p>
                        </div>
                    </div>
                    <div className=" w-[30%] md:w-[30%] lg:w-[20%] sm:w-[20%] px-[2px] py-2 text-center font-semibold border text-sm border-gray-400 cursor-pointer rounded-sm hover:bg-[#e63337] hover:text-white">
                        <Link to="https://www.linkedin.com/in/nayan-4b2b61249" target="_blank">CHAT WITH US</Link>
                    </div>
                </div>
                <div className="flex items-center justify-center my-9">
                    <div className="w-[10%] mr-3">
                    <svg className="h-7 w-7 md:h-9 sm:h-9 lg:h-9 md:w-9 sm:w-9 lg:w-9 text-slate-500 hover:text-[#e63337] cursor-pointer"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" /></svg>
                    </div> 
                    <div className="w-[70%] md:w-[80%] lg:w-[80%] sm:w-[80%]">
                        <div>
                            <h2 className="font-bold text-md text-slate-900">TELEGRAM</h2>
                            <p className="text-sm text-slate-600 font-semibold">Try solving your query via chat on telegram</p>
                        </div>
                    </div>
                    <div className=" w-[30%] md:w-[30%] lg:w-[20%] sm:w-[20%] px-[2px] py-2 text-center font-semibold border text-sm border-gray-400 cursor-pointer rounded-sm hover:bg-[#e63337] hover:text-white">
                        <Link to="https://t.me/ic0nlc" target="_blank">TELEGRAM US</Link>
                    </div>
                </div>
                <div className="flex items-center justify-center my-9">
                    <div className="w-[10%] mr-3">
                    <svg className="h-7 w-7 md:h-9 sm:h-9 lg:h-9 md:w-9 sm:w-9 lg:w-9 text-slate-500 hover:text-[#e63337] cursor-pointer"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" /></svg>
                    </div> 
                    <div className="w-[70%] md:w-[80%] lg:w-[80%] sm:w-[80%]">
                        <div>
                            <h2 className="font-bold text-md text-slate-900 font-[Roboto]">TWEET</h2>
                            <p className="text-sm text-slate-600 font-semibold">I'm just promoting my twitter profile!</p>
                        </div>
                    </div>
                    <div className=" w-[30%] md:w-[30%] lg:w-[20%] sm:w-[20%] px-[2px] py-2 text-center font-semibold border text-sm border-gray-400 cursor-pointer rounded-sm hover:bg-[#e63337] hover:text-white">
                        <Link to="https://x.com/nayannew9" target="_blank">TWEET US</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}