import React from 'react';

function Card({ card, onCardClick }) {
  function handleCardClick() {
    onCardClick(card);
  }

  return (
    <div id="elements-template">
      <div className="elements__item">
        <button className="elements__delete" type="button"></button>
        <img
          className="elements__image"
          src={card.link}
          alt={card.name}
          onClick={handleCardClick}
        />
        <div className="elements__info">
          <h2 className="elements__title">{card.name}</h2>
          <div className="elements__like-container">
            <button className="elements__like" type="button"></button>
            <p className="elements__like-counter">{card.likes.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
