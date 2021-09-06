import React from 'react';
import { useSelector,useDispatch} from 'react-redux';
import {add_to_wishlist,delete_from__wishlist} from '../actions';
import './Result.css';
import { FcBookmark }  from 'react-icons/fc';
import { FiBookmark } from 'react-icons/fi';
import { IconContext } from "react-icons";
import {isEmptyObject} from '../utils/isEmpty';

function Result() {
    const dispatch = useDispatch();
    const selectedMovie=useSelector((state)=>state.searchByIDReducer.searchByID);
    const watchList = useSelector((state)=>state.wishListReducer.wishLists);

    // checks if the movie is already in the watch list
    const checkIfMovieIsInWatchList=(movie,watchList)=>{
        let booleanForWatchList=false;

        // eslint-disable-next-line array-callback-return
        watchList.map((item)=>{
            if(item.imdbID===movie.imdbID){
                booleanForWatchList=true;
                
            }
        })
        return booleanForWatchList;
    }   
    // triggers when wathclist button is pressed
    const handleWatchList=(movie)=>{   
        if(!checkIfMovieIsInWatchList(movie,watchList)){
            dispatch(add_to_wishlist(movie));
        }else{
            dispatch(delete_from__wishlist(movie));
        }
    }

    // only render if there is ratings in a movie
    const ratingsListings = selectedMovie.Ratings===undefined?null:selectedMovie.Ratings.map((item,i)=>{
        // added this if statement just for the css border-right that is different between these components
        if(i<2){
            return (
                <div className="individualRating"  key={i}>
                    <div className="ratingsBorder">
                        <div className="score">
                            {item.Value}
                        </div>
                        <div className="ratingName">
                            {item.Source}
                        </div>
                    </div>
                </div>
        )
        }else{
            return (
                <div className="individualRating" key={i}>
                    <div className="score">
                        {item.Value}
                    </div>
                    <div className="ratingName">
                        {item.Source}
                    </div>
                </div>
        )
        }
    })
    // renders the watchlist button component
    const wishListComponent=(
        <button className="wishListIconOuter" onClick={()=>handleWatchList(selectedMovie)}>
            <IconContext.Provider value={{size:"2em",className:"wishListIcon"}}>
                {checkIfMovieIsInWatchList(selectedMovie,watchList)?<FcBookmark/>:<FiBookmark/>}                
            </IconContext.Provider>
            <div className="wishListInner">
                <p>
                    WatchList
                </p>
            </div>
        </button>
    )


    // only renders when selectedMovie object is not empty
    const selectedRender = isEmptyObject(selectedMovie)===true?null:
    (
    <div className="movieBox">
        <div className="MoviePoster" key="01">
            <div className="posterContainer">
                <img src={selectedMovie.Poster} alt={selectedMovie.Title} className="imagePoster"/>
                <div className="titleContainer">
                    <div className="watchList">
                    {wishListComponent}
                    </div>
                    <div className="title">{selectedMovie.Title}</div>
                    <div className="categoryContainer">
                        <div className="rated">{selectedMovie.rated}</div> 
                        <div className="year">{selectedMovie.Year}</div>
                        <div className="genre">{selectedMovie.Genre}</div>
                        <div className="time">{selectedMovie.Runtime}</div>
                    </div>
                    <div className="actors">{selectedMovie.Actors}</div>
                </div>
            </div>
        </div>
        <div className="plot" key="02">{selectedMovie.Plot}</div>
        <div className="ratings" key="03">
            {ratingsListings}
        </div>
    </div>
    )


    return (
        
        <React.Fragment>
            {selectedRender}
        </React.Fragment>
        
        
    )
}

export default Result
