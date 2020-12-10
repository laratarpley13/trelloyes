import React from 'react';
import './App.css';
import Card from './Card.js';
import List from './List.js';

//App component will accept 1 prop, store
//App should render a List component for each of the items in store.lists array
//Each instance of List component should be passed 2 props (and a key). The 2 props are header and cards

function App(props) {
  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        
      </div>
    </main>
  );
}

export default App;
