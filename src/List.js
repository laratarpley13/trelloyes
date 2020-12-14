import React from 'react';
import Card from './Card';
import './List.css';

//List component accepts 2 props: header and cards
//header is a string of the header of the card to render
//cards is an array of card objects. Each object should have a title and content
//these props will be passed in for each List from the app component

function List (props) {
    return(
        <section className="List"> 
            <header className="List-header">
                <h2>{props.header}</h2>
            </header>
            <div className="List-cards">
                {props.cards.map((card) => 
                    <Card 
                        key={card.id}
                        title={card.title}
                        content={card.content}
                    />
                )}
                <button type="button" className="List-add-button">
                    + Add Random Card
                </button>    
            </div>
        </section>
    );
}

export default List;