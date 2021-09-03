
import {SEARCH_BY_ID,ClEAR_SEARCH_BY_ID} from '../actions/types'

const searchByIDReducer = (state = {
    searchByID: {}
}, action: any) => {
    switch(action.type) {
        case SEARCH_BY_ID:
            return {
                ...state,
                searchByID: action.payload
            };
        case ClEAR_SEARCH_BY_ID:
            return {
                ...state,
                searchByID: action.payload
            }
        default:
            return state;
    }

};
export default searchByIDReducer;