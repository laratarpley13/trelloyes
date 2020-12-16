import React, { Component } from 'react';
import './App.css';
import STORE from './store'
import List from './List';

//App component will accept 1 prop, store
//App should render a List component for each of the items in store.lists array
//Each instance of List component should be passed 2 props (and a key). The 2 props are header and cards

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {}
    }
  }
  state = {
    store: STORE,
  };

  handleDeleteItem = (card) => {
    const { lists, allCards } = this.state.store;

    function omit(obj, keyToOmit) {
      let {[keyToOmit]: _, ...rest} = obj;
      return rest;
    }

    const newLists = lists.map(list => ({
      ...list,
      cardIds: list.cardIds.filter(id => id !== card.id)
    }));

    const newCards = omit(allCards, card.id);

    this.setState({    
      store: {
        lists: newLists,
        allCards: newCards
      }  
    })

  }
  handleAddRandomItem = (listId) => {
    console.log("add random item", { listId })

    const newRandomCard = () => {
      const id = Math.random().toString(36).substring(2, 4)
        + Math.random().toString(36).substring(2, 4);
      return {
        id,
        title: `Random Card ${id}`,
        content: 'lorem ipsum',
      }
    }

    const newCard = newRandomCard()

    const newLists = this.state.store.lists.map(list => {
      if (list.id === listId) {
        return {
          ...list,
          cardIds: [...list.cardIds, newCard.id]
        };
      }
      return list;
    })

    this.setState({
      store: {
        lists: newLists,
        allCards: {
          ...this.state.store.allCards,
          [newCard.id]: newCard
      }
      }
    })
  }

  render() {
    const { store } = this.state
    return(
      <main className='App'>
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {store.lists.map(list => (
            <List 
              key={list.id}
              id={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
              onDeleteItem={this.handleDeleteItem}
              onAddRandomItem={this.handleAddRandomItem}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
