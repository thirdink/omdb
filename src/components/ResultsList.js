import React from 'react'
import { useSelector,useDispatch} from 'react-redux';
import * as actions from '../actions'
import './ResultsList.css';
import {isEmptyObject} from '../utils/isEmpty'
function ListItem(props) {
    const apiKey = process.env.REACT_APP_API_KEY;

    const dispatch=useDispatch();

    return (
            <li 
                className="liSideList" 
                onClick={()=>{dispatch(actions.searchByID(apiKey,props.data.imdbID))}}
                >
                    <img 
                        src={props.data.Poster} 
                        alt={props.data.Title} 
                        className="sideListImg"
                        />

                    <div className="sideListTitle">
                        <div className="sideListTitleText">   
                            {props.data.Title}
                        </div>
                        <div className="sideListTitleYear">
                            {props.data.Year}
                        </div>
                    </div>
            </li>
            );
}

function ResultsList() {
    // gets the data from the redux global state
    const listResults = useSelector((state)=> state.searchResultsReducer.searchresult)
    // render empty state
    const emptyState =   (
    <p className="nothing">search for something ...</p>
    )
    

    const listOfMovies = listResults.Search===undefined?null:listResults.Search.length===0?emptyState:listResults.Search.map((movies)=>{
        return <ListItem key={movies.imdbID} data={movies}/>
    })
    


    return (
        <div className="sideList">
            <p className="results">{!isEmptyObject(listResults)?listResults.totalResults+ ' Results':null} </p>
            {listOfMovies}
        </div>
    )

}

export default ResultsList

