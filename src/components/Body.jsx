import "../index.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import ScrollToTop from "../utils/scrollToTop";
import TopRestaurantCard from "./TopRestaurantCard";
import HeaderRestaurantCard from "./HeaderRestaurantCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Body(){
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [ToplistOfRestaurants, setTopListOfRestaurants] = useState([]);
    const [HeaderlistOfRestaurants, setHeaderListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [showvalue, setShowValue] = useState(7);
    const [showvalue2, setShowValue2] = useState(4);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: showvalue2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 1500,
    };
    const settings2 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: showvalue,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2500,
    };

    

    useEffect(()=>{
        fetchData();  // All the restaurants
        window.scrollTo(0, 0);
        function updateValueBasedOnScreenWidth() {
            const width = window.innerWidth;
            setScreenWidth(width);
      
            // Update value based on screen width
            if (width < 900 && width >= 765) {
              setShowValue(3);
              setShowValue2(3);
            }else if(width<765 && width >= 509){
                setShowValue2(2);
            } else if(width < 509){
                setShowValue(2);
                setShowValue2(1);
            }else if(width<=1024 && width > 900){
                setShowValue(5);
                setShowValue2(3);
            }else {
              setShowValue(7);
              setShowValue2(4);
            }
          }
      
          // Call the function initially and on window resize
          window.addEventListener("resize", updateValueBasedOnScreenWidth);
          // Cleanup the event listener
          return () => {
            window.removeEventListener("resize", updateValueBasedOnScreenWidth);
          };

    }, []);

    const fetchData = async() => {
        const data = await fetch("https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D28.65200%26lng%3D77.16630%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING");
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setTopListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setHeaderListOfRestaurants(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
        // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const handleTopRated = () => {
        const filterList = listOfRestaurants.filter((res)=>res.info.avgRating > 4.3);
        setFilteredRestaurant(filterList);
        toast.success('Top Rated restaurant');

    }

    const handleAll = () => {
        setFilteredRestaurant(listOfRestaurants);
        toast.success('All restaurant');
    }

    const resBetThreeToSix = () => {
        const filterList = listOfRestaurants.filter((res)=> (res.info.costForTwo > "₹300 for two" && res.info.costForTwo < "₹600 for two"));
        setFilteredRestaurant(filterList);
        toast.success('Between Rs.300-Rs.600');
    }

    const fastDelivery = () => {
        const filterList = listOfRestaurants.filter((res)=> res.info.sla.deliveryTime <= 30);
        setFilteredRestaurant(filterList);
        toast.success('Fast Delivery');

    }

    const pureVeg = () => {
        const filterList = listOfRestaurants.filter((res)=> res.info.veg === true);
        setFilteredRestaurant(filterList);
        toast.success('Pure Veg!');
    }

    const handleNameFilter = (e) => {
        setSearchText(e.target.value);
        const filterRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredRestaurant(filterRestaurant);
    }

    const lessThanThreeHundred = () => {
        const filterList = listOfRestaurants.filter((res)=> res.info.costForTwo <  "₹300 for two");
        setFilteredRestaurant(filterList);
        toast.success('Restaurant less than Rs.300');
    }

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false) return <h1>Looks like you're offline!! 🥴</h1>

    return ((listOfRestaurants.length === 0 || ToplistOfRestaurants.length === 0 || HeaderlistOfRestaurants.length === 0) ? <Shimmer/> : (  
        <div className="body w-[90%] mx-auto">
            <div className="w-[85%] m-auto text-gray-800 mb-5">
                <h1 className="text-2xl font-bold mx-4 mt-6">What's on your mind ?</h1>
                <Slider {...settings2}>
                    {
                        HeaderlistOfRestaurants.map((restaurant) => (

                            <Link to={"/restaurant/"+restaurant.id} key={restaurant.id}><HeaderRestaurantCard resData={restaurant}/></Link> // This page is not avaialable right now!
                        ))
                    }
                </Slider>
                
            </div>
            <div className="h-[2px] w-full bg-gray-300 rounded-full"></div>

            <div className="w-[85%] m-auto text-gray-800 my-10">
                <h1 className="text-2xl font-bold mx-4">Top restaurants chain in Delhi</h1>
                <Slider {...settings}>
                    {
                        ToplistOfRestaurants.map((restaurant) => (

                            <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}><TopRestaurantCard resData={restaurant}/></Link>
                        ))
                    }
                </Slider>
            </div>

            <div className="h-[2px] w-full bg-gray-300 rounded-full"></div>

            <div className="w-[85%] m-auto mt-10">
            <h1 className="text-2xl font-bold mx-4 text-gray-800">Restaurants with online food delivery in Delhi</h1>
                <div className="flex items-center flex-wrap md:gap-2 gap-1">
                    <div className="search p-4 md:-ml-0 -ml-4">
                        <input type="text" className="border border-solid border-gray-400 px-4 py-[5px] outline-none rounded-lg focus:border-[#e63337]" onChange={handleNameFilter} value={searchText} placeholder="Search Restaurant"/>
                    </div> 
                    <div onClick={handleAll} className="px-4 py-2 border border-gray-400 cursor-pointer rounded-lg hover:bg-[#e63337] hover:text-white">
                        <button>All</button>
                    </div>
                    <div onClick={handleTopRated} className="px-4 py-2 border border-gray-400 cursor-pointer rounded-lg hover:bg-[#e63337] hover:text-white">
                        <button>Rating 4.3+</button>
                    </div>
                    <div onClick={fastDelivery} className="px-4 py-2 border border-gray-400 cursor-pointer rounded-lg hover:bg-[#e63337] hover:text-white">
                        <button>Fast Delivery</button>
                    </div>
                    <div onClick={pureVeg} className="px-4 py-2 border border-gray-400 cursor-pointer rounded-lg hover:bg-[#e63337] hover:text-white">
                        <button>Pure Veg</button>
                    </div>
                    <div onClick={resBetThreeToSix} className="px-4 py-2 border border-gray-400 cursor-pointer rounded-lg hover:bg-[#e63337] hover:text-white">
                        <button>Rs.300-Rs.600</button>
                    </div>
                    <div onClick={lessThanThreeHundred} className="px-4 py-2 border border-gray-400 cursor-pointer rounded-lg hover:bg-[#e63337] hover:text-white">
                        <button>Less than Rs.300</button>
                    </div>
                </div>
            </div>
            
            <ScrollToTop/>
            <ToastContainer
            position="top-center"
            autoClose={500}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            />
            <div className="flex flex-wrap w-[85%] m-auto">
                {
                    filteredRestaurant.map((restaurant) => (

                        <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>
                    ))
                }
            </div>
        </div>
    ))
}