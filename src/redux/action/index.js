//To add to cart
export const addItem = (product) =>{
    return{
        type: "ADDITEM",
        payload: product,
    }
}

//To delete from cart
export const delItem = (product) =>{
    return{
        type: "DELITEM",
        payload: product,
    }
}