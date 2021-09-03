import React,{useState} from 'react';
import * as actions from './actions'
import { useDispatch} from 'react-redux';
import {BsSearch}from 'react-icons/bs'

function Header() {
    const [movie,setMovie] = useState('');
    const dispatch = useDispatch();
    const apiKey = process.env.REACT_APP_API_KEY;

    const onHandleSubmit=(e)=>{
        // uses redux to update the redux global store 
        console.log(movie);
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
            <form onSubmit={onHandleSubmit}>
            <button type="submit"><BsSearch/></button>
            <label>
                <input type="text" name="search" onChange={e=>setMovie(e.target.value)}/>
            </label>
            </form>
        </header>
        </div>
    )
}

export default Header
