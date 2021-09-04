import { SEARCH_RESULTS_RETRIEVED,CLEAR_SEARCH_RESULTS_RETRIEVED } from "./types";

export const retrieve_search_results = (apiKey,movie,minYear,maxYear,typeSelect) =>async(dispatch) =>{

    try{
        const removeExtraSpace = (s) => s.trim().split(/ +/).join('+');
        let spaceRemovedMovie = removeExtraSpace(movie);

        let response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${spaceRemovedMovie}&y=${minYear}-${maxYear}&type=${typeSelect}`)
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