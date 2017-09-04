import React from 'react';
import Card from './Card';

const Hand = ({ isCurrentPlayer, isCurrentUser, hand, handleClue, handleDiscard, handlePlay, isMyTurn }) => {

  const onClueClick = clue => handleClue(hand, clue)
  const onPlayClick = cardId => handlePlay(hand, cardId)

  return (
    <div>
      <h3>{hand.user.username}</h3>
      <ul>
        {hand.cards.map((card)=>
          <Card
            card={card}
            key={card.id}
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
