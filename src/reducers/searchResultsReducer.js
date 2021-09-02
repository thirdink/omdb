
import {SEARCH_RESULTS_RETRIEVED} from '../actions/types'

const searchResultsReducer = (state = {
    searchresult: []
}, action: any) => {
    switch(action.type) {
        case SEARCH_RESULTS_RETRIEVED:
            return {
                ...state,
                searchresult: action.payload
            };
        default:
            return state;
    }
};
export default searchResultsReducer;