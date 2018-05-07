import React from 'react';
import Tilt from 'react-tilt';

const Teams = () => (
    <div>
        <div className="container has-text-centered">
            <p className="has-text-danger is-uppercase has-text-weight-bold">Co-Organized By</p>
            <p className="title">GraphCool & Honeypot.io</p>
        </div>

        <div className="container speaker-list">
            <hr/>
            <p className="is-uppercase has-text-danger has-text-weight-bold">Team</p>
            <div className="highlight-speaker">
                <Tilt className="Tilt" options={{ max: 10 }} style={{ height: 350, width: 350 }}>
                    <div className="Tilt-inner">
                        Speaker 2018
                    </div>
                </Tilt>
                <Tilt className="Tilt" options={{ max: 10 }} style={{ height: 350, width: 350 }}>
                    <div className="Tilt-inner">
                        Speaker 2018
                    </div>
                </Tilt>
                <Tilt className="Tilt" options={{ max: 10 }} style={{ height: 350, width: 350 }}>
                    <div className="Tilt-inner">
                        Speaker 2018
                    </div>
                </Tilt>
                <Tilt className="Tilt" options={{ max: 10 }} style={{ height: 350, width: 350 }}>
                    <div className="Tilt-inner">
                        Speaker 2018
                    </div>
                </Tilt>
                <Tilt className="Tilt" options={{ max: 10 }} style={{ height: 350, width: 350}}>
                    <div className="Tilt-inner">
                        Speaker 2018
                    </div>
                </Tilt>
                <Tilt style={{ height: 350, width: 350}}/>
            </div>
        </div>
    </div>
);

export default Teams;