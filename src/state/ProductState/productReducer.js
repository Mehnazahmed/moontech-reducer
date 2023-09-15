import { actionTypes } from "./actionTypes";

export const initialState={
    loading:false,
    products:[],
    error:false,
    cart:[],
    wishlist:[],
    
}

const productReducer = (state,action) => {
    
   switch (action.type) {
    case actionTypes.FETCHING_START:
        return {
            ...state,
            loading:true,
            error:false
        }
    case actionTypes.FETCHING_SUCCESS:
        return {
            ...state,
            loading:false,
            products: action.payload,
            error:false
        }
    case actionTypes.FETCHING_ERROR:
        return{
            ...state,
            loading:false,
            error:false
        }
    case actionTypes.ADD_TO_CART:
        return{
            ...state,
            cart: [...state.cart,action.payload]
        }
    case actionTypes.WISH_LIST:
        return{
            ...state,
            wishlist: [...state.wishlist,action.payload]
        }

    case actionTypes.REMOVE_ITEM:
        const productIdToRemove = action.payload;
        const updatedCart = state.cart.filter((product) => product._id !== productIdToRemove)
        return{
            ...state,
            cart: updatedCart
        }    


        
   
    default:
        return state;
   } 
};

export default productReducer;