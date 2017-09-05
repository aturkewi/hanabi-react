import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { GamesList } from '../../views/Games/GamesList';

describe('GamesList', () => {
    let wrapper;
    let users = [{ username: 'bob' }, { username: 'jose' }, { username: 'victoria' }];
    let games = [
        { title: 'Test Room 1', status: 'setup', users },
        { title: 'Test Room 2', status: 'active', users },
        { title: 'Test Room 3', status: 'completed', users },
    ];

    beforeEach(() => {
        wrapper = shallow(<GamesList games={games} />);
    });

    it('renders a collection of GameRoomCard components', () => {
        expect(wrapper.find('GameRoomCard').length).toEqual(3);
    });
});