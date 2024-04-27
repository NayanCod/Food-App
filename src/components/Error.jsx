import { Link, useRouteError } from "react-router-dom";

export default function Error(){
    const err = useRouteError();

    return(
        <div className="w-[100vw] h-[100vh] flex justify-center items-center">
            <div className="text-center lg:-mt-40 xl:-mt-40 md:-mt-40 sm:-mt-40 mt-0">
                <div className="w-full flex justify-center my-8">
                    <img src="/errorImg.png" className="xl:w-52 md:w-52 sm:w-48 w-40"/>
                </div>
                <p className="text-3xl font-mono font-bold my-4">Oops! Something went wrong</p>
                <p className="font-semibold text-lg text-gray-600">You must have picked the wrong door because I<br></br> haven't been able to lay my eye on the page<br></br> you're searching for.</p>
                <button className="px-4 py-2 my-4 border border-gray-400 cursor-pointer rounded-lg hover:bg-[#e63337] hover:text-white"><Link to="/">Go to Home</Link></button>
                <h3>{err.status} {err.statusText}</h3>
            </div>
        </div>
    )
}