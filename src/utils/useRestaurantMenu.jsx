import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

export default function useRestaurantMenu(resId){
    const [resInfo, setResInfo] = useState(null);
    //fetchdata
    const fetchData = async() => {
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        setResInfo(json.data);
    }
    useEffect(()=>{
        fetchData();
    }, []);
    return resInfo;
}