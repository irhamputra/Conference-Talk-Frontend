import React, {Component} from "react";
import './App.css'

import Header from "./components/Header";
import TicketList from "./components/TicketList";
import SpeakerList from './components/SpeakerList';
import Highlight from './components/Highlight';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Sponsor from './components/Sponsor'

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Hero/>
                <Highlight/>
                <SpeakerList/>
                <Sponsor/>
                <TicketList/>
                <Footer/>
            </div>
        );
    }
}

export default App;
