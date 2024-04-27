import { useState, useContext } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import {useSelector} from "react-redux";

export default function Header(){
    const [btnName, setBtnName] = useState("Logout");
    const onlineStatus = useOnlineStatus();

    const [open, setOpen] = useState(false);

    const handleAuth = () => {
        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
    }

    // subscribing to the store using Selector
    const cartItems = useSelector((store) => store.cart.items);
    // console.log(cartItems);
    return(
        <div className="lg:flex justify-between lg:items-center shadow-lg mb-2 px-4 sticky top-0 left-0 w-full bg-white z-10">
            <div className="logo-container p-4 flex flex-col lg:items-center lg:ml-6 ml-4 cursor-pointer">
                <Link to="/">
                    <img className="w-16 lg:ml-0 ml-3" src="/logo.png"/>
                </Link>
                <Link to="/">
                    <h4 className="font-sans font-bold text-[#e63337] text-xl">CraveEase</h4>
                </Link>
            </div>
            <div className="nav-items">
                <div onClick={()=>setOpen(!open)} className="text-3xl absolute right-8 top-9 lg:hidden">
                    {
                        open ? (<svg class="h-10 w-10 cursor-pointer text-slate-700 hover:text-[#e63337]"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg>) : (<svg className="h-10 w-10 cursor-pointer text-slate-700 hover:text-[#e63337]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>)
                    }
                </div>
                <ul className={`lg:flex lg:p-0 p-9 lg:m-3 lg:items-center font-sans font-semibold text-lg absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto ${open ? "top-20 opacity-100":"top-[-490px]"} lg:opacity-100 opacity-0 transition-all duration-500 ease-in`}>
                    <li className="lg:px-4 lg:my-0 my-5">Status : {onlineStatus?"🟢" : "🔴"}</li>
                    <li className="lg:px-4 lg:my-0 my-5 hover:text-[#e63337]"><Link className="flex items-center gap-1" to="/">Home
                    <svg className={`h-6 w-6 text-slate-700 hover:text-[#e63337] ${open ? "hidden" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                    </svg>
                    </Link></li>
                    <li className="lg:px-4 lg:my-0 my-5"><Link className="flex items-center gap-1 hover:text-[#e63337]" to="/about"><span>About</span><svg className={`h-6 w-6 text-slate-700 hover:text-[#e63337] ${open ? "hidden" : ""}`} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M12 20l-3 -3h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-2l-3 3" />  <line x1="8" y1="9" x2="16" y2="9" />  <line x1="8" y1="13" x2="14" y2="13" /></svg></Link></li>
                    <li className="lg:px-4 lg:my-0 my-5 hover:text-[#e63337]"><Link className="flex items-center gap-1" to="/contact">Contact
                    <svg className={`h-6 w-6 text-slate-700 hover:text-[#e63337] ${open ? "hidden" : ""}`}  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg></Link></li>
                    <li className="lg:px-4 lg:my-0 my-5 relative hover:text-[#e63337]"><Link className="flex items-center gap-1" to="/cart">Cart
                        <svg className={`h-6 w-6 text-slate-700 hover:text-[#e63337] ${open ? "hidden" : ""}`}  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                        </svg>

                        {cartItems.length === 0 ? "" : <span className="absolute top-4 right-3 text-[#e63337] text-sm font-bold">{cartItems.length}</span>}</Link>
                    </li>
                    <button className="login lg:px-4 lg:my-0 cursor-pointer hover:text-[#e63337]" onClick={handleAuth}>{btnName === "Login" ? <Link to="/">Logout</Link> : "Login"}</button>
                   
                </ul>
            </div>
        </div>
    )
}