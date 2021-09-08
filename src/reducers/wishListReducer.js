import { ADD_TO_WATCHLIST, DELETE_FROM_WATCHLIST } from '../actions/types'

const initialState = {
    watchLists:[]
}

const wishListReducer = (state = initialState,action)=>{
    switch(action.type){
        case ADD_TO_WATCHLIST:
            let addToWatchList = [...state.watchLists,action.payload]
            return{
                ...state,
                watchLists: addToWatchList
            }
        case DELETE_FROM_WATCHLIST:
            let watchListArrToDelete =  [
                ...state.watchLists.filter(watchLists=>watchLists.imdbID!==action.payload.imdbID)
            ]
            return {
                ...state,
                watchLists: watchListArrToDelete
            }
        default:
            return state;
    }
}

export default wishListReducer;