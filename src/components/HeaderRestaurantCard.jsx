import "../index.css";
import { HERO_CDN_URL} from "../utils/constants";
export default function RestaurantCard(resData){
    const {imageId} = resData?.resData;
    return(
        <div className="m-4 w-[160px] rounded-lg bg-gray-100 transition-all hover:scale-95 ">
            <img className="rounded-xl w-[100%] h-52 bg-blend-multiply cursor-pointer" alt="res-logo" src={HERO_CDN_URL+imageId}/>
        </div>
    );
}