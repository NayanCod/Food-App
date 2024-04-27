import { useDispatch, useSelector } from "react-redux";
import { clearCart, DELETE_ITEM} from "../utils/cartSlice";
import ScrollToTop from "../utils/scrollToTop";
import GoBack from "../utils/GoBack";
import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import { CDN_URL } from "../utils/constants";

export default function Cart(){
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
        toast.success("Cart cleared");

    }
    const handleRemoveItem = (item) => {
        dispatch(DELETE_ITEM(item));
    }

    useEffect(()=>{
        window.scrollTo(0, 0);
    }, []);
    return(
        <div>
            <GoBack/>
            <ScrollToTop/>
            <ToastContainer position="top-center" autoClose={500} hideProgressBar newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored"/>
            <div className="text-center m-4">    
                <h1 className="text-2xl font-bold">Cart</h1>
                <div className="w-6/12 mx-auto">
                    {
                        cartItems.length === 0 ? (<button className="m-2 p-2 border border-gray-400 cursor-pointer rounded-lg hover:bg-[#e63337] hover:text-white"><Link to={"/"}>Add Items</Link></button>) : (<div><button className="m-2 p-2 border border-gray-400 cursor-pointer rounded-lg hover:bg-[#e63337] hover:text-white" onClick={handleClearCart}>Clear Cart</button><button className="m-2 p-2 border border-gray-400 cursor-pointer rounded-lg hover:bg-[#e63337] hover:text-white"><Link to={"/"}>Add More Items</Link></button></div>)
                    }
                    
                    {cartItems.length === 0 ? <EmptyCart/> : (   
                        cartItems.map((item) =>(
                        <div key={item.card.info.id} className="m-2 p-2 border-gray-300 border-b-[1px] text-left flex justify-between items-center bg-gray-100">
                            <div className="md:w-9/12 sm:w-9/12 w-[50%]">
                                <div className="py-2">
                                    <h2 className="font-semibold text-lg text-gray-700">{item.card.info.name}</h2>
                                    <p className="text-sm">₹{item.card.info.price/100}</p>
                                </div>
                                
                                <button className="p-2 text-sm rounded-md text-red-500 hover:scale-90 border duration-300 border-red-500" onClick={() => handleRemoveItem(item)}>Remove Item</button>
                                
                            </div>
                            <div className="md:w-3/12 sm:w-3/12 w-[50%] p-4">
                                <img src={CDN_URL + item.card.info.imageId} className="rounded-lg w-full h-24" />
                            </div>
                        </div>
                        ))
                        
                    )}
                </div>
            </div>
        </div>
        
    )
}