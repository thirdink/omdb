import React from 'react'
import Header from './components/Header';
import './App.css';
import ResultsList from './components/ResultsList';
import Result from './components/Result';


function App() {
  return (
    // main 3 components 
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
