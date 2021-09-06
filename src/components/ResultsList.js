import React,{useState} from 'react'
import { useSelector,useDispatch} from 'react-redux';
import * as actions from '../actions'
import InfiniteScroll from "react-infinite-scroll-component";
import './ResultsList.css';
import {isEmptyObject} from '../utils/isEmpty';




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
    const searchTerms = useSelector((state)=>state.searchResultsReducer.searchTerms)
    const pageCount = useSelector((state)=>state.searchResultsReducer.searchTerms.pageCount)

    const dispatch=useDispatch();
    // render empty state
    const emptyState =   (
    <p className="nothing">search for something ...</p>
    )
    
   
    const listOfMovies = listResults.Search===undefined?null:listResults.Search.length===0?emptyState:listResults.Search.map((movies,i)=>{
        return <ListItem key={i} data={movies} searchTerms={searchTerms} />
    })
    
    const infiniteScroll = () =>{
        console.log('infinite scroll triggered');
        console.log('pageCount ->',pageCount);
        dispatch(actions.infinite_scroll(searchTerms,pageCount));
        dispatch(actions.increment_page_count(pageCount));

    }
    return (
        <div className="sideList">
            <p className="results">{!isEmptyObject(listResults)?listResults.totalResults+ ' Results':null} </p>
            {
                !isEmptyObject(listResults)?
                    <InfiniteScroll
                    dataLength={listResults.Search.length}
                    next={infiniteScroll}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    scrollableTarget="left"
                    >
                        {listOfMovies}
                    </InfiniteScroll>:null
            }
            
        </div>
    )

}

export default ResultsList

