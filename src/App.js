import React from 'react'
import Header from './Header';
import './App.css';
import ResultsList from './ResultsList';
import Result from './Result';


function App() {


  return (
    <div className="App">
      <Header/>
      <div className="contentContainer"> 
      <div className="left">
        <ResultsList/>
      </div>
        <div className="right">
          <Result />
        </div>
      </div>
    </div>
  );
}

export default App;
