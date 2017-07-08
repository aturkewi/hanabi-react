import React from 'react';
import Card from './Card';
// import './Player.css'

const Hand = ({ isCurrentPlayer, isCurrentUser, hand, handleClue, handleDiscard, handlePlay, isMyTurn }) => {

  const onClueClick = clue => handleClue(hand, clue)
  const onPlayClick = cardId => handlePlay(hand, cardId)

  return (
    <div className={isCurrentPlayer ? "current-player" : "not-current-player"}>
      <h3>{hand.user.username}</h3>
      <ul className="cards">
        {hand.cards.map((c, i)=>
          <Card
            card={c}
            key={i}
            isMyTurn={isMyTurn}
            isCurrentUser={isCurrentUser}
            isCurrentPlayer={isCurrentPlayer}
            handleDiscard={handleDiscard}
            onPlayClick={onPlayClick}
            onClueClick={onClueClick}
          />
        )}
      </ul>
    </div>
  )
}

module.exports = Hand;
