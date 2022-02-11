
import './App.css';
import React,{useState,useEffect} from 'react';

const API_URL = `http://api.icndb.com/jokes/random`;


function App() {
  const [joke, setJoke] = useState('');

  const generateJokes = () => {
    fetch(API_URL)
      .then(res=>res.json())
      .then(data=>setJoke(data.value.joke))
    
  }

  useEffect( () => {
    generateJokes();
  }, [])
  return (
    <div className="App">
      <h2>Jokes</h2>
      <div className='joke'>
      <p> {joke} </p>
      </div>
      <button onClick={generateJokes}>New Joke</button>
    </div>
  );
}

export default App;
