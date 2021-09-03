import React from 'react'
import { useSelector,useDispatch} from 'react-redux';
import * as actions from './actions'


function ListItem(props) {
    const apiKey = process.env.REACT_APP_API_KEY;

    const dispatch=useDispatch();
    return (<li onClick={()=>{dispatch(actions.searchByID(apiKey,props.data.imdbID))}}>{props.data.Title}</li>)
}

function ResultsList() {
    // gets the data from the redux global state
    const listResults = useSelector((state)=> state.searchResultsReducer.searchresult)
    const emptyState =   (<p>search for something </p>)
    

    const listOfMovies = listResults===undefined?null:listResults.length===0?emptyState:listResults.map((movies)=>{
        return <ListItem key={movies.imdbID} data={movies}/>
    })

    return (
        <div>
            {listOfMovies}
        </div>
    )

}

export default ResultsList

