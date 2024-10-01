const CartItem=({imagee,name,rating,area})=>{
    return(
        <>
        <div className="cartitem">
        <img src={imagee}/>
        
        <p>{name}</p>
        <p>{area}</p>
        <p>{rating} star</p>
        </div>
        </>
    );
}
    export default CartItem;