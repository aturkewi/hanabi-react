import React, { Component } from 'react';
import FormInput from '../../components/FormInput';

export class NewGameForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '', 
            player_count: ''
        }
    }
    render() {
        return (
            <form className="uk-margin-medium-top">
                <fieldset className="uk-fieldset">
                    <div className="uk-margin">
                        <label className="uk-form-label" htmlFor="title">Game Room Name
                        </label>
                        <div className="uk-form-controls">
                            <input
                                className="uk-input" 
                                name="title"
                                placeholder="Game Room Name"
                            />
                        </div>
                    </div>
                    <div className="uk-margin">
                        <label className="uk-form-label" htmlFor="player_count"># of Players
                        </label>
                        <div className="uk-form-controls">
                            <input
                                className="uk-input" 
                                name="player_count"
                                placeholder="2-5 Players"
                            />
                        </div>
                    </div>
                    <button
                        className="uk-button uk-button-primary uk-button-small"
                        type="submit"
                    >
                        Create Game Room
                    </button>
                </fieldset>
            </form>
        )
    }
};

export default NewGameForm;