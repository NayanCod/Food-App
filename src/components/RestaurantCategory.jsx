import ScrollToTop from "../utils/scrollToTop";
import ResItems from "./ResItems";

export default function RestaurantCategory({data, showItems, setShowIndex}){
    const handleClick = () => {
        setShowIndex();
    }
    

    return(
        <div>
            <ScrollToTop/>
            <div className="md:w-[70%] sm:w-2/4 w-[80%] lg:w-[50%] mx-auto my-4 shadow-lg p-4 rounded-md">
                <div className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg text-gray-700">{data.title}({data.itemCards.length})</span>
                    <span>{showItems ? <svg className="h-8 w-8 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"/>
                    </svg>
                    : <svg className="h-8 w-8 text-slate-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                    </svg>}</span>
                </div>
                {/* {Accordian body} */}
                <div>
                    { showItems && <ResItems items={data.itemCards}/> }
                </div>
                
                
            </div>

            
            
        </div>
    )
}