import React from 'react';
import Card from './Card'
import Hand from './Hand'
import VisibleCardGroup from './VisibleCardGroup.jsx'

const ActiveGame = (props) => {

  return(
    <div>
      <div>
        <h2>The state of affairs</h2>
        <ul>
          <li>
            Cards left in the deck: { props.game.deck.length }
          </li>
          <li>
            Clues left: { props.game.clue_counter }
          </li>
          <li>
            Misses remaining: { props.game.miss_counter }
          </li>
        </ul>
        < VisibleCardGroup cards={props.game.played} />
        <h2>It is currently {props.currentPlayer.username} turn</h2>
        <h2>Players</h2>
        <ul>
          {props.game.hands.map(hand => (
            <li key={hand.user.id}>
              <Hand
                isMyTurn={props.game.current_player_id === props.currentUser.id}
                isCurrentPlayer={props.game.current_player_id === hand.id}
                isCurrentUser={props.currentUser.id === hand.user.id}
                hand={hand}
                handleClue={props.handleClue}
                handlePlay={props.handlePlay}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ActiveGame;
