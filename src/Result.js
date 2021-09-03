import React from 'react'
import { useSelector} from 'react-redux';


function Result() {

    const selectedMovie=useSelector((state)=>state.searchByIDReducer.searchByID);
    console.log(selectedMovie.length);
    const ratingsListings = selectedMovie.length===undefined?null:selectedMovie.Ratings.map((item,i)=>{
        return (
                <div className="imdb" key={i}>
                    <div className="score">
                        {item.Value}
                    </div>
                    <div className="ratingName">
                        {item.Source}
                    </div>
                </div>
        )
    })

    return (
        <div className="movieBox">
            <div className="MoviePoster" key="01">
                <div className="posterContainer">
                    <img src={selectedMovie.Poster} alt={selectedMovie.Title+' image poster'} className="imagePoster"/>
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

        </div>
    )
}

export default Result
