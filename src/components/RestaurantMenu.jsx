import ShimmerCol from "./ShimmerCol";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import GoBack from "../utils/GoBack";
import { CDN_URL } from "../utils/constants";
import { useEffect } from "react";

export default function RestaurantMenu(){
    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);

    useEffect(()=>{
        window.scrollTo(0, 0);
    }, []);

    if(resInfo === null) return <ShimmerCol/>

    const {name, cuisines, costForTwoMessage, cloudinaryImageId} = resInfo?.cards[2]?.card?.card?.info;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=> c?.card?.["card"]?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory' );
    // console.log(categories);

    return(

        <div>
            <GoBack/>
            <div className="md:w-[70%] sm:w-2/4 lg:w-[50%] w-[80%] mx-auto flex justify-between items-center bg-gray-200 rounded-md p-5 my-5 border border-black border-b-[100%]">
                <div>
                    <h1 className="my-3 font-bold text-2xl text-gray-700">{name}</h1>
                    <h3 className="my-1 font-semibold text-lg text-gray-700">{cuisines.join(", ")} ● {costForTwoMessage}</h3>
                </div>
                <div className="w-44 h-32 rounded-lg hover:scale-95 duration-200 cursor-context-menu"><img className="w-full h-32 rounded-md" src={CDN_URL+cloudinaryImageId}/></div>
            </div>
            {
                categories.map((category, index)=> (              
                    <RestaurantCategory key={category?.card?.card.title} data={category?.card?.card} showItems={index === showIndex ? true : false} setShowIndex = {() => setShowIndex(index)}/>
                ))
            }
        </div>
    )
}