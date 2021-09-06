import { ADD_TO_WISHLIST, DELETE_FROM_WISH_LIST } from '../actions/types'

const initialState = {
    wishLists:[]
}

const wishListReducer = (state = initialState,action)=>{
    switch(action.type){
        case ADD_TO_WISHLIST:
            let addToWishList = [...state.wishLists,action.payload]
            return{
                ...state,
                wishLists: addToWishList
            }
        case DELETE_FROM_WISH_LIST:
            let wishListArrToDelete =  [
                ...state.wishLists.filter(wishList=>wishList.imdbID!==action.payload.imdbID)
            ]
            return {
                ...state,
                wishLists: wishListArrToDelete
            }
        default:
            return state;
    }
}

export default wishListReducer;