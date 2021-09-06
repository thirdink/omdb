import React,{useState,useEffect} from 'react';
import * as actions from '../actions';
import { useDispatch} from 'react-redux';
import {BsSearch}from 'react-icons/bs';
import { IconContext } from "react-icons";
import MultiRangeSlider from '../utils/multiRangeSlider';
import './Header.css'
import '../App.css';

function Header() {
    const [movie,setMovie] = useState('');
    const [typeSelect,setTypeSelect] = useState('');
    const [minYear,setMinYear] = useState('');
    const [maxYear,setMaxYear] = useState('');
    const [pageCount,setPageCount] = useState(1);
    const dispatch = useDispatch();
    const apiKey = process.env.REACT_APP_API_KEY;



    const onHandleSubmit=(e)=>{
        // uses redux to update the redux global store 
        if(movie===""){
            // clears redux store when search input is empty
            dispatch(actions.clear_search_by_id());
            dispatch(actions.clear_retrieve_search_results());
            dispatch(actions.clear_page_count());
        }else{
            dispatch(actions.retrieve_search_results(apiKey,movie,minYear,maxYear,typeSelect,pageCount));
        }
        e.preventDefault();
    }



    return (
        <div>
        <header className="App-header">
            <form onSubmit={onHandleSubmit} className="form">
                    <div className="search">
                        <button type="submit" aria-label="search button" className="searchButton">
                        <IconContext.Provider value={{ size: "2em" }}>
                            <div>
                                <BsSearch />
                            </div>
                        </IconContext.Provider>
                            </button>
                            <div className="searchInput">
                                <input type="text" name="search" aria-label="search text input" placeholder="search here ..." className="inputTypeText" onChange={e=>setMovie(e.target.value)}/>
                            </div>
                    </div> 
                    <div className="rangeFilter" >
                        <div className="yearTitle">
                            <p>Year</p>
                        </div>
                    <MultiRangeSlider
                        min={1950}
                        max={2021}
                        onChange={({ min, max }) => {
                            setMinYear(min);
                            setMaxYear(max);
                        }}
                    />
                    </div>
                    
                    <div className="radioButton">
                        <label className="typeTitle"> Type </label>
                        <div className="radioGroup">
                            <div className="radio">
                                <label className="inputLabel">
                                    <input
                                    type="radio"
                                    value=""
                                    className="inputRadio"
                                    checked={typeSelect === ""}
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
                    </div>
                
            </form>
        </header>
        </div>
    )
}

export default Header
