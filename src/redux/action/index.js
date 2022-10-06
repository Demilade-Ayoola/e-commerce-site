//To add to cart
export const addItem = (newProduct) =>{
    return{
        type: "ADDITEM",
        payload: newProduct,
    }
}

//To delete from cart
export const delItem = (newProduct) =>{
    return{
        type: "DELITEM",
        payload: newProduct,
    }
}
//to handle number state
export const handleCounter = (counter)=>{
    return{
        type: "HANDLECOUNTER",
        payload: counter,
    }
}