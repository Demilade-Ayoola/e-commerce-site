//To add to cart
export const addCart = (product) =>{
    return{
        type: "ADDITEM ",
        payload: product
    }
}

//To delete from cart
export const delCart = (product) =>{
    return{
        type: "DELITEM ",
        payload: product
    }
}