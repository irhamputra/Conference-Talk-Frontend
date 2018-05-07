import React from 'react';
import conference from '../static/photos/hands-people-woman-meeting.jpg'

const Sponsor = () => (
    <div className="has-background-grey-lighter" classID="speak">
        <div className="container">
            <div className="columns sponsor_box">
                <div className="column is-7">
                    <img src={conference} alt="img"/>
                </div>
                <div className="column">
                    <p className="has-text-danger has-text-weight-bold is-uppercase">
                        Want to Sponsor?
                    </p>
                    <p className="subtitle">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet molestiae, repellat?
                        A alias debitis molestias quas qui rem! Debitis ex fugit hic nesciunt non optio quos repellat,
                        repudiandae velit! Autem.
                    </p>
                    <button className="button btn-hero is-danger">Contact us</button>
                </div>
            </div>
        </div>

    </div>
);

export default Sponsor;