export default function Footer(){

    return(
        <div className="w-full bg-[#02060c] p-10 mt-28 bottom-0">
            <div className="w-[85%] m-auto sm:flex sm:justify-around text-white">
                <div>
                    <h1 className="font-bold text-3xl text-[#e63337] my-3 shadow-slate-300">CraveEase</h1>
                    <p className="text-slate-400 cursor-pointer my-3 font-semibold">© 2024 Bundl Technologies <br></br>Pvt. Ltd</p>
                </div>
                <div>
                    <h2 className="font-bold text-xl text-gray-100 my-3 shadow-slate-300">Company</h2>
                    <ul className="text-slate-400 cursor-pointer my-3 font-semibold">
                        <li className="hover:text-[#e63337] my-3">About</li>
                        <li className="hover:text-[#e63337] my-3">Careers</li>
                        <li className="hover:text-[#e63337] my-3">Team</li>
                        <li className="hover:text-[#e63337] my-3">Swiggy One</li>
                        <li className="hover:text-[#e63337] my-3">Swiggy Instamart</li>
                        <li className="hover:text-[#e63337] my-3">Swiggy Genie</li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-bold text-xl text-gray-100 my-3 shadow-slate-300">Contact Us</h2>
                    <ul className="text-slate-400 cursor-pointer my-3 font-semibold">
                        <li className="hover:text-[#e63337] my-3">Help & Support</li>
                        <li className="hover:text-[#e63337] my-3">Partner with us</li>
                        <li className="hover:text-[#e63337] my-3">Ride with us</li>
                    </ul>
                    <h2 className="font-bold text-xl text-gray-100 mt-10 shadow-slate-300">Legal</h2>
                    <ul className="text-slate-400 cursor-pointer my-3 font-semibold">
                        <li className="hover:text-[#e63337] my-3">Terms & Conditions</li>
                        <li className="hover:text-[#e63337] my-3">Cookie Policy</li>
                        <li className="hover:text-[#e63337] my-3">Privacy Policy</li>
                    </ul>
                </div>
                <div>
                <h2 className="font-bold text-xl text-gray-100 my-3 shadow-slate-300">We deliever to:</h2>
                    <ul className="text-slate-400 cursor-pointer my-3 font-semibold">
                        <li className="hover:text-[#e63337] my-3">Bangalore</li>
                        <li className="hover:text-[#e63337] my-3">Gurgaon</li>
                        <li className="hover:text-[#e63337] my-3">Hyderabad</li>
                        <li className="hover:text-[#e63337] my-3">Delhi</li>
                        <li className="hover:text-[#e63337] my-3">Mumbai</li>
                        <li className="hover:text-[#e63337] my-3">Pune</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}