import React, {Component} from "react";
import Tilt from "react-tilt";

export default class Highlight extends Component {
    render() {
        return (
            <div className="container">
                <hr/>
                <div className="highlight-box">
                    <p className="has-text-danger has-text-weight-bold is-uppercase">Join The Community</p>
                    <p className="is-size-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                        adipisci alias beatae cumque eius eos expedita fugiat id illum labore maiores minima molestias,
                        numquam quasi, quisquam, ratione sit tenetur unde</p>
                </div>
                <hr/>
                <p className="has-text-danger has-text-weight-bold is-uppercase">Highlight from GraphQL Asia 2017</p>
                <div className="highlight-speaker">
                    <Tilt className="Tilt" options={{max: 10}} style={{height: 350, width: 350}}>
                        <div className="Tilt-inner">
                            Highlight Speaker 2017
                        </div>
                    </Tilt>
                    <Tilt className="Tilt" options={{max: 10}} style={{height: 350, width: 350}}>
                        <div className="Tilt-inner">
                            Highlight Speaker 2017
                        </div>
                    </Tilt>
                    <Tilt className="Tilt" options={{max: 10}} style={{height: 350, width: 350}}>
                        <div className="Tilt-inner">
                            Highlight Speaker 2017
                        </div>
                    </Tilt>
                    <Tilt className="Tilt" options={{max: 10}} style={{height: 350, width: 350}}>
                        <div className="Tilt-inner">
                            Highlight Speaker 2017
                        </div>
                    </Tilt>
                    <Tilt style={{height: 350, width: 350}}/>
                    <Tilt style={{height: 350, width: 350}}/>
                </div>
                <div className="container-icon columns has-text-centered">
                    <div className="column">
                        <span className="icon is-large has-text-danger">
                            <i className="fas fa-trophy fa-3x"></i>
                        </span>
                        <p className="has-text-weight-bold title">100%</p>
                        <p className="subtitle">of attendees said they would attend again</p>
                    </div>
                    <div className="column">
                        <span className="icon is-large has-text-danger">
                            <i className="fas fa-box fa-3x"></i>
                        </span>
                        <p className="has-text-weight-bold title">50%</p>
                        <p className="subtitle">of attendees were using GraphQL in production</p>
                    </div>
                    <div className="column">
                        <span className="icon is-large has-text-danger">
                            <i className="fas fa-trophy fa-3x"></i>
                        </span>
                        <p className="has-text-weight-bold title">27%</p>
                        <p className="subtitle">Attendees</p>
                    </div>
                </div>
            </div>
        )
    }
}