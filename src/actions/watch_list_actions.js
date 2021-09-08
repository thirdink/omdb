import { ADD_TO_WATCHLIST,DELETE_FROM_WATCHLIST } from "./types";

export const add_to_watchlist = (movie)=>{
    return {
        type: ADD_TO_WATCHLIST,
        payload: movie
    }
}

export const delete_from__watchlist = (movie)=>{
    return {
        type: DELETE_FROM_WATCHLIST,
        payload: movie
    }
    
}