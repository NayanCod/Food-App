import { handleScrollTop } from "./helper"

export default function ScrollToTop(){

    return(
        <div className="bottom-6 right-6 fixed z-1000">
            <button onClick={handleScrollTop}>
            <svg className="h-12 w-12 text-[#e63337]"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"/>
            </svg>

            </button>
        </div>
    )
}