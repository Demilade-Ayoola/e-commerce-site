// import Product from "../../components/Product";
const cart = [];
const addItems = (state=cart, action)=>{
//const product = action.payload;
switch (action.type) {
    case 'ADDITEM': 
    const exist = state.find((x)=> x.id === action.payload.id)
    if(exist){
        return state
       
    }
    else{
    return [
        ...state, 
        action.payload
    ];
}
        //Check if product exists
        // const exist = state.find((x)=>x.id ===product.id);
        //increase the quantity
        // if(exist){
        //         return state.map((x)=> 
        //     x.id ===product.id ? {...x,qty: x.qty + 1} : x)
        // }else{
        //     const product = action.payload;
        // return[
        //     ...state,{
        //         ...product, qty: 1,}
        //     ]
        
//    }
        
//        break;

        case "DELITEM": 
        return state= state.filter ((x)=>{
            return x.id !== action.payload.id
        })
        

    default:
 return state;
    
}
} 
export default addItems;