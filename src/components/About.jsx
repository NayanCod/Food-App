import GoBack from "../utils/GoBack";
import { Link } from "react-router-dom";
import "../index.css";
import ScrollToTop from "../utils/scrollToTop";
import { useEffect } from "react";
export default function About(){

    useEffect(()=>{
        window.scrollTo(0, 0);
    }, []);

    return(
        <div>
        <GoBack/>
        <ScrollToTop/>
            <div className="w-[60%] m-auto md:mt-14 sm:mt-14 md:flex lg:flex lg:flex-row md:flex-row sm:flex-row flex-col justify-center sm:justify-between lg:justify-between md:justify-between items-center">
                <div className="w-2/3 md:h-[46.5vh] sm:h-[46.5vh]">
                    <p className="text-md font-semibold">Hello, This is</p>
                    <h1 className="text-4xl font-semibold my-2 mb-7 -ml-[3px] first-letter:text-[#e63337]"><span>Nayan - </span><span className="">Frontend Developer</span></h1>
                    <span className="text-lg font-semibold cursor-pointer hover:text-[#e63337]"><Link className="flex gap-1 -m-[2px]" to="https://github.com/NayanCod" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" fill="currentColor" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>Github</Link></span>
                    <span className="text-lg font-semibold cursor-pointer hover:text-[#e63337]"><Link to="https://www.linkedin.com/in/nayan-4b2b61249" className="flex items-center gap-1" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                            </svg>Linkedin</Link>
                    </span>
                </div>
                <div className="w-1/3 md:h-[46.5vh] sm:h-[46.5vh] cursor-pointer">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src="/Profile.png" alt="Avatar" className="sm:mt-0 lg:mt-0 md:mt-0 mt-6 sm:w-48 sm:h-48 w-48 h-48 rounded-full"/>
                            </div>
                            <div class="flip-card-back rounded-md shadow-inner border-b-2 flex justify-center items-center">
                                <div>
                                    <img src="/Profile.png" className="w-20 h-20 rounded-full object-cover object-right mx-auto"/>
                                    <h1 className="font-bold text-[#e63337] text-xl">Nayan</h1>
                                    <h1 className="font-bold text-[#e63337] text-lg">Frontend Developer</h1>
                                    <h1 className="font-bold text-[#e63337] text-md">I just love webD</h1>
                                </div>   
                            </div>
                        </div>
                    </div>
                </div>
            </div> 

        </div>
    )
}