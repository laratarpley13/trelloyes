import React, { Component } from 'react';
import './App.css';
import List from './List';

//App component will accept 1 prop, store
//App should render a List component for each of the items in store.lists array
//Each instance of List component should be passed 2 props (and a key). The 2 props are header and cards

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };

  render() {
    const { store } = this.props
    return(
      <main className='App'>
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {store.lists.map(list => (
            <List 
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
