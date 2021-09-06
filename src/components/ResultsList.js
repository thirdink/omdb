import React from 'react';
import { useSelector,useDispatch} from 'react-redux';
import {
    searchByID,
    infinite_scroll,
    increment_page_count
} from '../actions';
import InfiniteScroll from "react-infinite-scroll-component";
import './ResultsList.css';
import {isEmptyObject} from '../utils/isEmpty';




function ListItem(props) {
    const apiKey = process.env.REACT_APP_API_KEY;
    const dispatch=useDispatch();

    return (
            <li 
                className="liSideList" 
                onClick={()=>{dispatch(searchByID(apiKey,props.data.imdbID))}}
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
    const searchTerms = useSelector((state)=>state.searchResultsReducer.searchTerms)
    const pageCount = useSelector((state)=>state.searchResultsReducer.searchTerms.pageCount)

    const dispatch=useDispatch();
    // render empty state
    const emptyState =   (
    <p className="nothing">search for a movie or tv series ...</p>
    )
    // render error state
    const errorState = (
        <p className="error">Movie not found !</p>
    )
    // if listResults is not empty and doest container error then render the list
    const listOfMovies = isEmptyObject(listResults)?emptyState:listResults.Response==="False"?errorState:listResults.Search.map((movies,i)=>{
        return <ListItem key={i} data={movies} searchTerms={searchTerms} />
    })
    // triggered when user scrolls to the end of the list
    const infiniteScroll = () =>{
        dispatch(infinite_scroll(searchTerms,pageCount));
        dispatch(increment_page_count(pageCount));
    }

    return (
        <div className="sideList">
            <p className="results">{!isEmptyObject(listResults)?listResults.Response==="False"?null:listResults.totalResults+ ' Results':null} </p>
            {
                !isEmptyObject(listResults)?listResults.Response==="False"?errorState:
                    <InfiniteScroll
                    dataLength={listResults.Search.length}
                    next={infiniteScroll}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    scrollableTarget="left"
                    >
                        {listOfMovies}
                    </InfiniteScroll>:emptyState
            }
            
        </div>
    )

}

export default ResultsList

