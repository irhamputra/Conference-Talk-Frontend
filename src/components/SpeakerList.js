import React, { Component } from 'react';
import Tilt from 'react-tilt';

export default class SpeakerList extends Component {
    render(){
        return(
            <div className="container speaker-list">
                <hr/>
                <p className="is-uppercase has-text-danger has-text-weight-bold">Speaker List</p>
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
        )
    }
}