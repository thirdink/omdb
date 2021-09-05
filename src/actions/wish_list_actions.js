import { ADD_TO_WISHLIST,DELETE_FROM_WISH_LIST } from "./types";

export const add_to_wishlist = (movie)=>{
    return {
        type: ADD_TO_WISHLIST,
        payload: movie
    }
}

export const delete_from__wishlist = (movie)=>{
    return {
        type: DELETE_FROM_WISH_LIST,
        payload: movie
    }
}