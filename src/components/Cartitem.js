const CartItem=({imagee,name,rating,area})=>{
    return(
        <>
        <div className="w-56 p-2 m-2 bg-green-200">
        <img src={imagee}/>
        
        <p>{name}</p>
        <p>{area}</p>
        <p>{rating} star</p>
        </div>
        </>
    );
}
    export default CartItem;