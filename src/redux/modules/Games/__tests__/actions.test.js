import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import * as actions from '../actions';

global.window = document.defaultView;
window.localStorage = (() => {
  let store = {};
  return {
    getItem(key) {
      return store[key]
    },
    setItem(key, value) {
      store[key] = JSON.stringify(value.toString())
    },
    removeItem(key) {
      store[key] = null;
    },
    clear() {
      store = {}
    },
  };
})()

const middlewares = [ thunk ]; 
const mockStore = configureMockStore(middlewares);

describe('Auth Module action creators', () => {

  describe('fetchingGames()', () => {
    
    it('creates an action to pass "FETCHING_GAMES" to the reducer', () => {
      expect(actions.fetchingGames()).toEqual({ 
        type: 'FETCHING_GAMES'
      });
    });
  });

  describe('fetchingGamesFailure()', () => {
    
    it('creates an action to pass "FETCHING_GAMES_FAILURE" to the reducer', () => {
      expect(actions.fetchingGamesFailure()).toEqual({ 
        type: 'FETCHING_GAMES_FAILURE'
      });
    });
  });

  describe('setGames(games)', () => {

    it('creates an action to pass an array of games to replace the games reducer state', () => {
      const games = [{ title: 'game 1' }, { title: 'game 2' }];

      expect(actions.setGames(games)).toEqual({ 
        type: 'SET_GAMES',
        games
      });
    });
  });  
});
