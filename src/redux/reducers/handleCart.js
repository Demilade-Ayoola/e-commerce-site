const cart = [];
const handleCart = (state=cart,action)=>{
const product = action.payload;
switch (action.type) {
    case 'ADDITEM':
        //Check if product exists
        const exist = state.find((x)=>x.id ===product.id);
        //increase the quantity
        if(exist){
                return state.map((x)=> 
            x.id ===product.id ? {...x,qty: x.qty + 1} : x)
        }else{
            const product = action.payload;
        return[
            ...state,{
                ...product, qty: 1,}
            ]
        }
        
        break;

        case "DELITEM":
        const exists1 = state.find((x)=>x.id === product.id);
        if(exists1.qty === 1){
            return state.filter((x)=>x.id !== exists1.id)
        }

    default:
 return state;
    break;
}
} 
export default handleCart