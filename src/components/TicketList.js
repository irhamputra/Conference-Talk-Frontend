import React, { Component } from 'react';

export default class TicketList extends Component {
    render(){
        return(
            <section className="ticket-list">
                <div className="container has-text-centered">
                    <p className="has-text-weight-bold has-text-danger is-uppercase">Get Your Ticket!</p>
                    <p className="subtitle">
                        You don't want to miss out, join us for GraphQL Asia!
                    </p>
                    <div className="columns">
                        <div className="column">
                            <div className="box">
                                <p className="subtitle">$199</p>
                                <p className="title">Early Bird</p>
                                <p className="has-text-grey">Sold out</p>
                                <button className="button btn-hero" disabled>Get Tickets</button>
                            </div>
                        </div>
                        <div className="column">
                            <div className="box box_active">
                                <p className="subtitle">$299</p>
                                <p className="title">Regular Ticket</p>
                                <p className="has-text-grey">Regular ticket price for the conference</p>
                                <button className="button btn-hero is-danger">Get Tickets</button>
                            </div>
                        </div>
                        <div className="column">
                            <div className="box">
                                <p className="subtitle">$299</p>
                                <p className="title">Late Bird</p>
                                <p className="has-text-grey">Last chance to get tickets</p>
                                <button className="button btn-hero is-danger" disabled>Get Tickets</button>                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}