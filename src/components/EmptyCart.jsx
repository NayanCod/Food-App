export default function EmptyCart(){

    return(
        <div className="w-full mx-auto mt-10">
            <div className="xl:w-1/2 mx-auto">
                <img className="xl:w-[70%] xl:ml-9" src="/emptyCart.png" />
            </div>
            <div className="font-bold mt-5">
                <h1>Cart is Empty</h1>
                <p>Add more item to the cart</p>
            </div>
            
        </div>
    )
}