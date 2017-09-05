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

    handleOnChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleOnSubmit = event => {
        event.preventDefault();
        const game = Object.assign({}, this.state);
        this.props.createGame(game)
        this.setState({
            title: '', 
            player_count: ''
        });
    }

    render() {
        return (
            <form className="uk-margin-medium-top" onSubmit={this.handleOnSubmit}>
                <fieldset className="uk-fieldset">
                    <div className="uk-margin">
                        <label className="uk-form-label" htmlFor="title">Game Room Name
                        </label>
                        <div className="uk-form-controls">
                            <input
                                className="uk-input" 
                                name="title"
                                placeholder="Game Room Name"
                                value={this.state.title}
                                onChange={this.handleOnChange}
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
                                value={this.state.player_count}
                                onChange={this.handleOnChange}
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