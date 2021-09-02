import React from 'react'
import { useSelector} from 'react-redux';



function ResultsList() {
    const listResults = useSelector((state)=> state.searchResultsReducer.searchresult)
    const emptyState =   (<p>the list is empty</p>)
    

    const listOfMovies = listResults.length===0?emptyState:listResults.map((movies)=>{
        return <li key={movies.imdbID}>{movies.Title}</li>
    })


    // console.log(listResults);
    return (
        <div>
            {listOfMovies}
        </div>
    )

}

export default ResultsList

