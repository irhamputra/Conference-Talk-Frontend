import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Footer extends Component {
    render(){
        return(
           <footer className="footer">
               <div className="container">
                   <div className="columns">
                       <div className="column is-1">
                           logo
                       </div>
                       <div className="column is-2">
                           <ul>
                               <li className="link-footer">
                                   <NavLink  to="/get-ticket">Get Ticket</NavLink>
                               </li>
                               <li>
                                   <NavLink to="/#speakers">Speakers</NavLink>
                               </li>
                               <li>
                                   <NavLink to="/#sponsors">Sponsors</NavLink>
                               </li>
                               <li>
                                   <NavLink to="/team">Team</NavLink>
                               </li>
                           </ul>
                       </div>
                       <div className="column is-2">
                           <ul>
                               <li>
                                   <NavLink to="api.graphql-asia.com/">API</NavLink>
                               </li>
                               <li>
                                   <NavLink to="/c">Code of Conduct</NavLink>
                               </li>
                               <li>
                                   <NavLink to="/get-ticket">Imprint</NavLink>
                               </li>
                               <li>
                                   <NavLink to="/get-ticket">View Source</NavLink>
                               </li>
                           </ul>
                       </div>
                       <div className="column is-2">
                           <ul>
                               <li>
                                   <NavLink to="/get-ticket">Twitter</NavLink>
                               </li>
                               <li>
                                   <NavLink to="/get-ticket">Medium</NavLink>
                               </li>
                               <li>
                                   <NavLink to="/get-ticket">Contact Us!</NavLink>
                               </li>
                           </ul>
                       </div>
                       <div className="column level-right">
                           <p className="level-item">GraphCool & Honeypot</p>
                       </div>
                   </div>
               </div>
           </footer>
        )
    }
}