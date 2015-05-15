import React from 'react';

export class Hangman extends React.Component {
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
        
        return (
            <div>
                <h1>Goodbye, cruel world.</h1>

                <svg width="300" height="300">
                    <g>
                        <line x1="50" y1="5" x2="50" y2="290" style={gallowsStyle} />
                        <line x1="0" y1="290" x2="100" y2="290" style={gallowsStyle} />
                        <line x1="45" y1="5" x2="202" y2="5" style={gallowsStyle} />
                        <line x1="50" y1="80" x2="115" y2="5" style={gallowsStyle} />
                        <line x1="200" y1="10" x2="200" y2="50" style={ropeStyle} />
                    </g>

                    <g>
                        <circle cx="200" cy="80" r="30" style={victimStyle} />
                        <ellipse cx="200" cy="160" ry="50" rx="20" style={victimStyle} />
                        <line x1="180" x2="140" y1="140" y2="100" style={victimStyle} />
                        <line x1="220" x2="260" y1="140" y2="100" style={victimStyle} />
                        <line x1="188" x2="160" y1="200" y2="260" style={victimStyle} />
                        <line x1="212" x2="240" y1="200" y2="260" style={victimStyle} />
                    </g>
                </svg>
            </div>
        );
    }
}
