import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { NewGameForm } from '../../views/GamesView/NewGameForm';

describe('NewGameForm', () => {
    let wrapper;
    let createGame;
    let preventDefault;

    beforeEach(() => {
        createGame = jest.fn();
        preventDefault = jest.fn();
        wrapper = shallow(<NewGameForm createGame={createGame} />);
    });

    it('has a default state', () => {
        expect(wrapper.state()).toEqual({
            title: '', 
            player_count: ''
        });
    });

    describe('contains form tag', () => {
        let form;

        beforeEach(() => form = wrapper.find('form'));

        it('that renders', () => {
            expect(form.length).toEqual(1);
        });

        it('rendered with the correct class', () => {
            expect(form.hasClass('uk-margin-medium-top')).toEqual(true);
        });
    });

    describe('contains fieldset tag', () => {
        let fieldset;

        beforeEach(() => fieldset = wrapper.find('fieldset'));

        it('that renders', () => {
            expect(fieldset.length).toEqual(1);
        });

        it('rendered with the correct class', () => {
            expect(fieldset.hasClass('uk-fieldset')).toEqual(true);
        });
    });
    
    describe('contains label tags', () => {
        let labels;

        beforeEach(() => labels = wrapper.find('label'));

        it('that are rendered', () => {
            expect(labels.length).toEqual(2);
        });

        it('rendered inside of a div.uk-margin', () => {
            labels.forEach(label => {
                expect(label.parent().is('div')).toEqual(true);
                expect(label.parent().hasClass('uk-margin')).toEqual(true);
            });
        });
    
        it('rendered with correct class', () => {
            labels.forEach(label => {
                expect(label.hasClass('uk-form-label')).toEqual(true);
            });
        });
    
        it('rendered with the correct text', () => {
            const titleLabel = wrapper.find('label[htmlFor="title"]');
            const playerCountLabel = wrapper.find('label[htmlFor="player_count"]');
    
            expect(titleLabel.text()).toEqual('Game Room Name');
            expect(playerCountLabel.text()).toEqual('# of Players');
        });

    });

    describe('contains input tags', () => {
        let inputs;
        let titleInput;
        let playerCountInput;

        beforeEach(() => {
            inputs = wrapper.find('input');
            titleInput = wrapper.find('input[name="title"]');
            playerCountInput = wrapper.find('input[name="player_count"]');
        });

        it('that are rendered', () => {
            expect(inputs.length).toEqual(2);
        });

        it('rendered inside of a div.uk-form-controls', () => {
            inputs.forEach(input => {
                expect(input.parent().is('div')).toEqual(true);
                expect(input.parent().hasClass('uk-form-controls')).toEqual(true);
            });
        });
    
        it('rendered with the correct placeholders', () => {
            const titleInput = wrapper.find('input[placeholder="Game Room Name"]')
            const playerCountInput = wrapper.find('input[placeholder="2-5 Players"]')
    
            expect(titleInput.length).toEqual(1);
            expect(playerCountInput.length).toEqual(1);
        });
    
        it('rendered with the correct class', () => {
            inputs.forEach(input => {
                expect(input.hasClass('uk-input')).toEqual(true);
            });
        });
    });

    describe('contains button[type="submit"] tag', () => {
        let button;
        
        beforeEach(() => button = wrapper.find('button[type="submit"]'));

        it('that renders', () => {
            expect(button.length).toEqual(1);
        });

        it('renders with the correct classes', () => {
            expect(button.hasClass('uk-button uk-button-primary uk-button-small')).toEqual(true);
        });
    
        it('renders with the correct text', () => {
            expect(button.text()).toEqual('Create Game Room');
        });
    });

    describe('contains events', () => {
        let titleInput;
        let playerCountInput;
        let form;

        beforeEach(() => {
            titleInput = wrapper.find('input[name="title"]');
            playerCountInput = wrapper.find('input[name="player_count"]');
            form = wrapper.find('form');
        });

        it('that prevent default after submiting form', () => {
            titleInput.simulate('change', { target: { name: 'title', value: 'test title' }});
            playerCountInput.simulate('change', { target: { name: 'player_count', value: 2 }});
            form.simulate('submit', { preventDefault });
    
            expect(preventDefault).toHaveBeenCalledTimes(1);
        });
    
        it('that reset state after submitting form', () => {
            titleInput.simulate('change', { target: { name: 'title', value: 'test title' }});
            playerCountInput.simulate('change', { target: { name: 'player_count', value: 2 }});

            expect(wrapper.state()).toEqual({
                title: 'test title',
                player_count: 2
            });

            form.simulate('submit', { preventDefault });
        
            expect(wrapper.state()).toEqual({ 
                title: '', 
                player_count: ''
            });  
        });
    
        it('that call createGame prop after submitting form', () => {
            form.simulate('submit', { preventDefault });
            
            expect(createGame).toHaveBeenCalledTimes(1);
        });
    })
});