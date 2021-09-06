
import {
    SEARCH_RESULTS_RETRIEVED,
    CLEAR_SEARCH_RESULTS_RETRIEVED,
    INFINITE_SCROLL,
    SEARCH_TERMS,
    CLEAR_SEARCH_TERMS,
    INCREMENT_PAGE_COUNT,
    CLEAR_PAGE_COUNT
} from '../actions/types'


const searchResultsReducer = (state = {
    searchTerms: {
        apiKey:"",
        movie:"",
        minYear:"",
        maxYear:"",
        typeSelect:"",
        pageCount:0
    },
    searchresult: {}
}, action: any) => {
    switch(action.type) {
        case SEARCH_RESULTS_RETRIEVED:
            return {
                ...state,
                searchTerms: action.payload.searchTerms,
                searchresult: action.payload.result
            };
        case CLEAR_SEARCH_RESULTS_RETRIEVED:
            return{
                ...state,
                searchresult:{}
            }
        case INFINITE_SCROLL:
            return {
                ...state,
                searchresult: {
                    ...state.searchresult,
                    Search: [
                        ...state.searchresult.Search,...action.payload
                    ]
                }
            }
        case SEARCH_TERMS:
            return {
                ...state,
                searchTerms: action.payload
            }
        case CLEAR_SEARCH_TERMS:
            return {
                ...state,
                searchTerms: action.payload
            }
        case INCREMENT_PAGE_COUNT:
            return{
                ...state,
                searchTerms: {
                    ...state.searchTerms,
                    pageCount: action.payload
                }
            }
        case CLEAR_PAGE_COUNT:
            return {
                ...state,
                searchTerms:{
                    ...state.searchTerms,
                    pageCount: action.payload
                }
            }
    
        default:
            return state;
    }
};
export default searchResultsReducer;