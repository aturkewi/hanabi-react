import React from 'react';

const GameSetup = (props) => {
  const joinButton = () => {
    const userInGame = props.hands.find(h =>{
      return h.user.id === props.currentUser.id
    })
    if (userInGame) {
      return ''
    } else {
      return <button onClick={props.handleJoin}>Join Game!</button>
    }
  }
  return (
    <div>
      <div>
        <h2>Current Players</h2>
        <ul>
          {props.hands.map(h => (
            <li key={h.user.id}>
              {h.user.username}
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        {joinButton()}
      </div>
      
      <div>
        {props.hands.length > 1 ? <button onClick={props.handleStart}>Start Game</button> : ''}
      </div>
    </div>
  )
}

export default GameSetup;