import React from 'react';
import contains from 'lodash-node/modern/collection/contains';
import map from 'lodash-node/modern/collection/map';
import take from 'lodash-node/modern/array/take';

class Picture extends React.Component {
    render() {
        const gallowsStyle = {
            stroke: 'brown',
            strokeWidth: '10'
        };

        const ropeStyle = {
            stroke: 'black',
            strokeWidth: '3'
        };

        const victimStyle = {
            stroke: 'black',
            strokeWidth: '2',
            fill: 'white'
        };

        const victim = take([
            <circle key="1" cx="200" cy="80" r="30" style={victimStyle} />,
            <ellipse key="2" cx="200" cy="160" ry="50" rx="20" style={victimStyle} />,
            <line key="3" x1="180" x2="140" y1="140" y2="100" style={victimStyle} />,
            <line key="4" x1="220" x2="260" y1="140" y2="100" style={victimStyle} />,
            <line key="5" x1="188" x2="160" y1="200" y2="260" style={victimStyle} />,
            <line key="6" x1="212" x2="240" y1="200" y2="260" style={victimStyle} />
        ], this.props.incorrectGuesses);

        return (
            <svg width="300" height="300">
                <g>
                    <line x1="50" y1="5" x2="50" y2="290" style={gallowsStyle} />
                    <line x1="0" y1="290" x2="100" y2="290" style={gallowsStyle} />
                    <line x1="45" y1="5" x2="202" y2="5" style={gallowsStyle} />
                    <line x1="50" y1="80" x2="115" y2="5" style={gallowsStyle} />
                    <line x1="200" y1="10" x2="200" y2="50" style={ropeStyle} />
                </g>

                <g>
                    {victim}
                </g>
            </svg>
        );
    }
}

class Letter extends React.Component {
    render() {
        return (
            <button disabled={this.props.hasBeenUsed}
                    onClick={this.props.guess}
                >{this.props.letter}</button>
        );
    }
}

class Answer extends React.Component {
    render() {
        const letters = map(this.props.answer, (letter, i) =>
            contains(this.props.guesses, letter) ?
                <span key={i}>{letter}</span> :
                <span key={i}>_</span>
        );

        return (
            <div>
                {letters}
            </div>
        );
    }
}

export class Hangman extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            guesses: []
        };
    }

    guess(letter) {
        this.state.guesses.push(letter);
        this.forceUpdate();
    }

    incorrectGuesses() {
        let i, n = 0;

        for (i = 0; i < this.state.guesses.length; ++i) {
            if (!contains(this.props.answer, this.state.guesses[i])) {
                n += 1;
            }
        }

        return n;
    }

    hasBeenUsed(letter) {
        return contains(this.state.guesses, letter);
    }

    render() {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';

        const buttons = map(alphabet, (letter) =>
            <Letter letter={letter}
                    key={letter}
                    hasBeenUsed={this.hasBeenUsed(letter)}
                    guess={this.guess.bind(this, letter)}
                />
        );

        return (
            <div>
                <h1>Hangman</h1>

                <Picture incorrectGuesses={this.incorrectGuesses()} />

                <Answer answer={this.props.answer} guesses={this.state.guesses} />

                <div>
                    {buttons}
                </div>
            </div>
        );
    }
}
