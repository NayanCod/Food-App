import "../index.css";
import { CDN_URL } from "../utils/constants";
export default function RestaurantCard(resData){
    // console.log(resData);
    const {cloudinaryImageId, name, avgRating, areaName} = resData?.resData?.info;
    const {slaString} = resData?.resData?.info.sla;
    return(
        <div className="m-4 lg:w-[250px] w-[175px] rounded-lg transition-all hover:scale-95 ">
            <img className="rounded-xl w-[100%] lg:h-52 h-[150px] bg-blend-multiply cursor-pointer" alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
            <h3 className="text-gray-700 text-lg font-semibold overflow-hidden overflow-ellipsis whitespace-nowrap">{name}</h3>
            <h4 className="text-gray-700 font-bold">{avgRating}⭐ ● {slaString}</h4>
            <h4 className="text-gray-500">{areaName}</h4>
        </div>
    )
}