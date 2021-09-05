import { ADD_TO_WISHLIST, DELETE_FROM_WISH_LIST } from '../actions/types'

const initialState = {
    wishLists:[]
}

const wishListReducer = (state = initialState,action)=>{
    switch(action.type){
        case ADD_TO_WISHLIST:
            return{
                ...state,
                wishLists: [...state.wishLists,action.payload]
            }
        case DELETE_FROM_WISH_LIST:
            return {
                ...state,
                wishLists: [
                    ...state.wishLists.filter(wishList=>wishList.imdbID!==action.payload.imdbID)
                ]
            }
        default:
            return state;
    }
}

export default wishListReducer;