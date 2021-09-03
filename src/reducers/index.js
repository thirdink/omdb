import {combineReducers} from 'redux'
import searchResultsReducer from './searchResultsReducer';
import searchByIDReducer from './searchByIDReducer';


export default combineReducers({
    searchResultsReducer,
    searchByIDReducer
})