import React from 'react';
import './Card.css';

//Accepts two props title and component
//title is a string of the card's title
//content is a string of the card's content
//These props will be passed in for each Card from the List component

function Card(props) {
    return (
        <div className="Card">
            <button type="button">delete</button>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    );
}

export default Card;