import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import {useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ResItems({items}){
    // const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const [add, setAdd] = useState(false);
    const handleAddItem = (item) => {
        dispatch(addItem(item));
        toast.success("Item added to cart");
        setAdd(true);
    }

    return(
        <div>
            {
                items.map((item) =>(
                    <div key={item.card.info.id} className="m-2 p-2 border-gray-300 border-b-[1px] text-left flex justify-between items-center bg-gray-100">
                        <div className="md:w-9/12 sm:w-9/12 w-[50%]">
                            <div className="py-2">
                                <h2 className="font-semibold text-lg text-gray-700">{item.card.info.name}</h2>
                                <p className="text-sm">₹{item.card.info.price/100}</p>
                            </div>
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
                        </div>
                        <div className="md:w-3/12 sm:w-3/12 w-[50%] p-4">
                            <div className="absolute">
                                <button className="md:px-4 sm:px-8 xl:px-7 md:py-2 sm:py-2 lg:px-3 px-4 py-1 bg-white border border-gray-300 rounded-md xl:ml-7 lg:ml-3 md:ml-3 ml-3 mt-[60px] lg:text-sm xl:mt-[70px] md:mt-[70px] lg:mt-[70px] sm:mt-[70px] text-green-600 hover:shadow-lg" onClick={() => handleAddItem(item)}>ADD</button>
                            </div>
                            <img src={CDN_URL + item.card.info.imageId} className="rounded-lg w-full lg:h-20 xl:h-24 md:h-20" />
                        </div>
                    </div>
                )) 
            }
            <div className="bottom-6 left-2/4 fixed">
                {
                    add ? <p className="w-full bg-[#e63337] text-white font-semibold p-3 rounded-md"><Link to="/cart">View Cart</Link></p> : ""
                }
            </div>
        </div>
    )
}