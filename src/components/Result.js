import React,{useState} from 'react';
import { useSelector,useDispatch} from 'react-redux';
import * as actions from '../actions';
import './Result.css';
import { FcBookmark }  from 'react-icons/fc';
import { FiBookmark } from 'react-icons/fi';
import { IconContext } from "react-icons";


function Result() {
    const dispatch = useDispatch();
    const selectedMovie=useSelector((state)=>state.searchByIDReducer.searchByID);
    const watchList = useSelector((state)=>state.wishListReducer.wishLists);
    const [isInWatchList,setIsInWatchList] = useState(false);



    function isEmptyObject(obj) {
        return Object.keys(obj).length === 0;
    }

    const checkIfMovieIsInWatchList=(movie,watchList)=>{
        // console.log(movie);
        let booleanForWatchList=false;

        watchList.map((item)=>{
            if(item.imdbID===movie.imdbID){
                booleanForWatchList=true;
                
            }
        })

        return booleanForWatchList;
    }

    const handleWatchList=(movie)=>{   
        // console.log(checkIfMovieIsInWatchList(movie,watchList)); 
        if(!checkIfMovieIsInWatchList(movie,watchList)){
            dispatch(actions.add_to_wishlist(movie));
            setIsInWatchList(true);
        }else{
            console.log(movie);
            dispatch(actions.delete_from__wishlist(movie));
            setIsInWatchList(false);
        }


    }

    const ratingsListings = selectedMovie.Ratings===undefined?null:selectedMovie.Ratings.map((item,i)=>{
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

    const wishListComponent=(
        <button className="wishListIconOuter" onClick={()=>handleWatchList(selectedMovie)}>
            <IconContext.Provider value={{size:"2em"}}>
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
    const selectedRender = isEmptyObject(selectedMovie)===true?null:(<div className="movieBox">
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

</div>)


    return (
        
        <React.Fragment>
            {selectedRender}
        </React.Fragment>
        
        
    )
}

export default Result
