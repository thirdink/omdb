import React,{useState} from 'react';
import * as actions from './actions'
import { useDispatch} from 'react-redux';
import {BsSearch}from 'react-icons/bs'

function Header() {
    const [movie,setMovie] = useState('');
    const [typeSelect,setTypeSelect] = useState('');
    const dispatch = useDispatch();
    const apiKey = process.env.REACT_APP_API_KEY;

    const onHandleSubmit=(e)=>{
        // uses redux to update the redux global store 

        if(movie===""){
            dispatch(actions.clear_search_by_id());
            dispatch(actions.clear_retrieve_search_results());
        }else{
            dispatch(actions.retrieve_search_results(apiKey,movie));
        }
        e.preventDefault();
    }

    return (
        <div>
        <header className="App-header">
            <form onSubmit={onHandleSubmit} className="form">
                    <div className="search">
                        <button type="submit" className="searchButton"><BsSearch/></button>
                            <div className="searchInput">
                                <input type="text" name="search" onChange={e=>setMovie(e.target.value)}/>
                            </div>
                    </div>
                    <div className="rangeFilter" >
                        
                    </div>
                    <div className="radioButton">
                        <div className="radio">
                            <label className="inputLabel">
                                <input
                                type="radio"
                                value="any"
                                className="inputRadio"
                                checked={typeSelect === "any"}
                                onChange={e=>setTypeSelect(e.target.value)}
                                />
                                Any
                            </label>
                        </div>
                        <div className="radio">
                            <label className="inputLabel">
                                <input
                                type="radio"
                                value="movie"
                                className="inputRadio"
                                checked={typeSelect === "movie"}
                                onChange={e=>setTypeSelect(e.target.value)}
                                />
                                Movies
                            </label>
                        </div>
                        <div className="radio">
                            <label className="inputLabel">
                                <input
                                type="radio"
                                value="series"
                                className="inputRadio"
                                checked={typeSelect === "series"}
                                onChange={e=>setTypeSelect(e.target.value)}
                                />
                                Series
                            </label>
                        </div>
                        <div className="radio">
                            <label className="inputLabel">
                                <input
                                type="radio"
                                value="episode"
                                className="inputRadio"
                                checked={typeSelect === "episode"}
                                onChange={e=>setTypeSelect(e.target.value)}
                                />
                                Episode
                            </label>
                        </div>
                    </div>
                
            </form>
        </header>
        </div>
    )
}

export default Header
