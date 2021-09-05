import {combineReducers} from 'redux'
import searchResultsReducer from './searchResultsReducer';
import searchByIDReducer from './searchByIDReducer';
import wishListReducer from './wishListReducer';


export default combineReducers({
    searchResultsReducer,
    searchByIDReducer,
    wishListReducer
})