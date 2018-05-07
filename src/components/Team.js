import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Teams from '../components/Teams';

const Team = () => (
    <div>
        <Header/>
        <div className="container-icon">
            <Teams/>
        </div>
        <Footer/>
    </div>
);

export default Team;