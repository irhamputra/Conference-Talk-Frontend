import React from 'react';

const Hero = () => (
    <div className="hero is-medium">
        <div className="hero-body">
            <div className="container">
                <div className="columns">
                    <div className="column is-three-fifths">
                        <h1 className="title is-size-2">
                            Join us for Asia’s biggest
                            GraphQL-dedicated conference
                        </h1>
                        <h3 className="is-size-6 text-hero has-text-grey">
                            GraphQL Asia is a non-profit GraphQL conference in Asia with speakers from all around
                            the world. Learn about GraphQL best practices from industry experts and become part of the
                            thriving GraphQL community. GraphQL Asia is organized by Graph.Cool and Honeypot.
                        </h3>
                        <div className="columns">
                            <div className="column is-one-quarter">
                                <p className="has-text-danger has-text-weight-bold">Date</p>
                                <p>June 15th, 2018</p>
                            </div>
                            <div className="column">
                                <p className="has-text-danger has-text-weight-bold">Location</p>
                                <p>nHow Hotel, Jakarta</p>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column">
                                <a className="button btn-hero is-danger" href="https://www.eventbrite.com" target="_blank">Get Ticket</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Hero;