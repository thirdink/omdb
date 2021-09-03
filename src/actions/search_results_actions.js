import { SEARCH_RESULTS_RETRIEVED,CLEAR_SEARCH_RESULTS_RETRIEVED } from "./types";

export const retrieve_search_results = (apiKey,movie) =>async(dispatch) =>{

    try{
        let response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${movie}`)
        let result = await response.json();

        return dispatch({
            type:SEARCH_RESULTS_RETRIEVED,
            payload: result.Search
        })
    }catch(error){
        console.log(error);
    }

}

export const clear_retrieve_search_results=()=>{
    return {
        type:CLEAR_SEARCH_RESULTS_RETRIEVED,
        payload: []
    }
}