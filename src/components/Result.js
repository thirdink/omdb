import React from 'react'
import { useSelector} from 'react-redux';
import './Result.css';


function Result() {

    const selectedMovie=useSelector((state)=>state.searchByIDReducer.searchByID);


    function isEmptyObject(obj) {
        return Object.keys(obj).length === 0;
    }


    const ratingsListings = selectedMovie.Ratings===undefined?null:selectedMovie.Ratings.map((item,i)=>{
        console.log(i);
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
    // only renders when selectedMovie object is not empty
    const selectedRender = isEmptyObject(selectedMovie)===true?null:(<div className="movieBox">
    <div className="MoviePoster" key="01">
        <div className="posterContainer">
            <img src={selectedMovie.Poster} alt={selectedMovie.Title} className="imagePoster"/>
            <div className="titleContainer">
                <div className="watchList"></div>
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
