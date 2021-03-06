const initialState = {
  game: {
    title: '',
    id: '',
    deck: [],
    hands: [
      {
        user: {
          id: '',
          username: ''
        },
        cards: []
      }
    ],
    clue_counter: 0,
    miss_counter: 0,
    status: 'loading'
  },
  status: '',
  actions: {}
}

export default (state = initialState, action) => {

  switch(action.type) {

    case 'FETCHING_GAME':
      return {...initialState, status: "Fetching game"};

    case 'FETCH_GAME_FAILURE':
      return { 
        ...state,
        status: 'Failure Fetching Game'
      };

    case 'SET_GAME':
      return {
        status: "Game Loaded", 
        game: action.game
      };

    default: 
      return state;
  }
}