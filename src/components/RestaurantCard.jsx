import "../index.css";
import { CDN_URL } from "../utils/constants";
export default function RestaurantCard(resData){
    // console.log(resData);
    const {cloudinaryImageId, name, avgRating, cuisines, areaName, veg} = resData?.resData?.info;
    const {slaString} = resData?.resData?.info?.sla;
    // const {header, subHeader} = resData?.resData?.info?.aggregatedDiscountInfoV3;
    return(
        <div className="m-4 w-[260px] lg:w-[220px] xl:w-[260px] rounded-lg transition-all hover:scale-95 relative lg:-z-0 md:-z-0 sm:-z-0 xl:-z-0 -z-10">
            <img className="rounded-xl w-[100%] h-52 bg-blend-multiply cursor-pointer shadow-[inset_0_-6px_4px_rgba(0,0,0,0.8)]" alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
            <h3 className="text-gray-700 text-lg font-semibold overflow-hidden overflow-ellipsis whitespace-nowrap">{name}</h3>
            <h4 className="text-gray-700 font-semibold flex">{avgRating}⭐● {slaString}</h4>
            <h4 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-gray-500">{cuisines.join(", ")}</h4>
            <h4 className="text-gray-500">{areaName}</h4>
            <div className="absolute top-1 right-1">
                {
                    veg? <img width="30" height="30" src="https://img.icons8.com/fluency/48/vegetarian-food-symbol.png" alt="vegetarian-food-symbol"/> : <img width="30" height="30" src="https://img.icons8.com/fluency/48/non-vegetarian-food-symbol.png" alt="non-vegetarian-food-symbol"/>
                }
            </div>
        </div>
    )
}