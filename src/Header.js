import React,{useState} from 'react';



function Header() {
    const [movie,setMovie] = useState('');
    const apiKey = process.env.REACT_APP_API_KEY

    const fetchMoveDb = async () => {
        let result ;
        try{
            result = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${movie}`)
        }catch(error){
            console.log(error);
        }
        console.log(result);
    }
    const onHandleSubmit=(e)=>{
        fetchMoveDb();
        e.preventDefault();
    }
    return (
        
        <div>
        <header className="App-header">
            <form onSubmit={onHandleSubmit}>
            <label>
                Search
                <input type="text" name="search" onChange={e=>setMovie(e.target.value)}/>
            </label>
            <button type="submit">Submit</button>
            </form>
        </header>
            
        </div>
    )
}

export default Header
