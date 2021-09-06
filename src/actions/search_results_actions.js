
import { 
    SEARCH_RESULTS_RETRIEVED,
    CLEAR_SEARCH_RESULTS_RETRIEVED,
    INFINITE_SCROLL,
    CLEAR_SEARCH_TERMS ,
    INCREMENT_PAGE_COUNT,
    CLEAR_PAGE_COUNT
} from "./types";

const removeExtraSpace = (s) => s.trim().split(/ +/).join('+');

export const retrieve_search_results = (apiKey,movie,minYear,maxYear,typeSelect,pageCount) =>async(dispatch) =>{

    let searchTerms = {
        apiKey,
        movie,
        minYear,
        maxYear,
        typeSelect,
        pageCount
    }

    try{
        let spaceRemovedMovie = removeExtraSpace(movie);

        let response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${spaceRemovedMovie}&y=${minYear}-${maxYear}&type=${typeSelect}`);
        let result = await response.json();

        let searchResultTerms = {
            searchTerms,
            result
        }
        
        return dispatch({
            type:SEARCH_RESULTS_RETRIEVED,
            payload: searchResultTerms
        })
    }catch(error){
        console.log(error);
    }
}

export const increment_page_count=(pageCount)=>{
    const incrementedPageCount = pageCount+1;

    return{
        type: INCREMENT_PAGE_COUNT,
        payload: incrementedPageCount
    }
}

export const clear_page_count=()=>{
    return {
        type: CLEAR_PAGE_COUNT,
        payload: 0
    }
}
export const clear_retrieve_search_results=()=>{
    return {
        type:CLEAR_SEARCH_RESULTS_RETRIEVED,
        payload: []
    }
}


export const clear_search_terms = () =>{
    return {
        type: CLEAR_SEARCH_TERMS,
        payload: {}
    }
}

export const infinite_scroll = (searchTerms,pageCount) =>async(dispatch)=>{

        
    const {apiKey,movie,minYear,maxYear,typeSelect} = searchTerms;

    try{
        let spaceRemovedMovie = removeExtraSpace(movie);

        let response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${spaceRemovedMovie}&y=${minYear}-${maxYear}&type=${typeSelect}&page=${pageCount}`);
        let result = await response.json();

        return dispatch({
            type: INFINITE_SCROLL,
            payload: result.Search
        })

    }catch(error){
        console.log(error);
    }

}