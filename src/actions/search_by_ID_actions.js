import { SEARCH_BY_ID, ClEAR_SEARCH_BY_ID } from "./types";

export const searchByID = (apiKey,movieID) =>async(dispatch)=>{

    try{
        let response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${movieID}`);
        let result = await response.json();
        
        return dispatch({
            type:SEARCH_BY_ID,
            payload: result
        })
    }catch(error){
        console.log(error);
    }
}
export const clear_search_by_id = () => {
    return {
        type: ClEAR_SEARCH_BY_ID,
        payload: {}
    }
}